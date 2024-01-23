"use client";

import { Widget } from "@typeform/embed-react";

export default function ContactForm() {
  const formID = process.env.NEXT_PUBLIC_TYPEFORM_PROJECT_ID;

  return (
    <section className="col-span-2 md:col-span-6 lg:col-start-2 lg:col-span-12">
      <Widget id={formID} className="h-[300px] md:h-[500px]">
        Contact Us
      </Widget>
    </section>
  );
}
