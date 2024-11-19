import {NextResponse} from "next/server";
import {sql} from "@vercel/postgres";
import { Resend } from 'resend';
import {Registration} from "@/app/lib/types/registration";

export async function POST(req: Request) {
  const body = await req.json();
  const resend = new Resend(process.env.RESEND_API_KEY);

  const registration = Registration.fromObject(body);

  try {

    const { rows } = await sql`select first_name, last_name from cdwm.registrations`;

    if (rows.some(row => row.first_name == registration.firstName && row.last_name == registration.lastName))
    {
      return NextResponse.json({ error: "User already registered. If you would like to update your choices, please add a number to the end of the last name." }, { status: 400 });
    }

    const result = await sql`insert into cdwm.registrations 
(first_name, last_name, cookie_inside, cookie_outside, welcome_cocktail_1, welcome_cocktail_2, dietary_requirements, truths_lie)
values (${registration.firstName}, ${registration.lastName}, ${registration.cookieInside}, ${registration.cookieOutside}, ${registration.welcomeCocktail1}, ${registration.welcomeCocktail2}, ${registration.dietaryRequirements}, ${registration.truthsAndLie})`;

    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'jules.dehon01@me.com',
      subject: 'User Registered to CDWM',
      html: `Successfully registered ${registration.toString()}`
    });

    console.log(`Successfully Registered: ${registration.toString()}`)

    return NextResponse.json({ message: "Registered Successfully", result }, { status: 201 });
  } catch (error) {
    console.error("Registration Error ", error);
    return NextResponse.json({ error: `Registration error: ${error}` }, { status: 500 });
  }
}