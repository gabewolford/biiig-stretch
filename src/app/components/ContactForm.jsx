"use client";

import { PopupButton } from "@typeform/embed-react";

export default function ContactForm() {
  const formID = process.env.NEXT_PUBLIC_TYPEFORM_PROJECT_ID;

  return (
    <section className="col-span-2 md:col-span-6 lg:col-start-2 lg:col-span-12">
      <header className="text-gold font-medium liteweight text-2xl md:text-3xl mb-2 md:mb-4">
        Got a project for us?
      </header>
      <PopupButton
        id={formID}
        className="min-h-fit px-6 py-2 bg-light-blue hover:bg-white transition-colors duration-300 rounded text-[#011026] text-xl text-medium"
      >
        get in touch
      </PopupButton>
    </section>
  );
}
