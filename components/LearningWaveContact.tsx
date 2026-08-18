"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import { Clock3, Send } from "lucide-react";

export default function LearningWaveContact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setFeedback("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });

      const contentType = response.headers.get("content-type") || "";
      const result = contentType.includes("application/json")
        ? await response.json()
        : { error: "The server returned an unexpected response." };

      if (!response.ok) {
        throw new Error(result.error || "Unable to send message.");
      }

      setStatus("success");
      setFeedback("Thank you. Your message has been sent successfully.");
      form.reset();
    } catch (error) {
      setStatus("error");
      setFeedback(
        error instanceof Error
          ? error.message
          : "Unable to send your message. Please try again."
      );
    }
  }

  return (
    <section id="contact" className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-purple-100 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-purple-700">Get In Touch</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">Have Questions in Mind?</h2>
            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">Let us help you design better learning systems.</p>

            <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <input name="name" type="text" placeholder="Full Name" required autoComplete="name" className="h-14 rounded-xl border border-purple-100 bg-white px-5 text-sm outline-none transition focus:border-purple-400 focus:ring-4 focus:ring-purple-100" />
                <input name="email" type="email" placeholder="Email Address" required autoComplete="email" className="h-14 rounded-xl border border-purple-100 bg-white px-5 text-sm outline-none transition focus:border-purple-400 focus:ring-4 focus:ring-purple-100" />
              </div>

              <textarea name="message" placeholder="Message" rows={5} required className="w-full resize-none rounded-xl border border-purple-100 bg-white px-5 py-4 text-sm outline-none transition focus:border-purple-400 focus:ring-4 focus:ring-purple-100" />

              <button type="submit" disabled={status === "sending"} className="inline-flex items-center justify-center gap-3 rounded-xl bg-purple-700 px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-purple-200 transition-all duration-300 hover:-translate-y-1 hover:bg-purple-800 hover:shadow-xl hover:shadow-purple-300 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0">
                {status === "sending" ? "Sending..." : "Send Message"}
                <Send size={18} />
              </button>

              {feedback && (
                <p role="status" aria-live="polite" className={`text-sm font-medium ${status === "success" ? "text-green-700" : "text-red-600"}`}>
                  {feedback}
                </p>
              )}
            </form>

            <div className="mt-6 flex items-center gap-3 text-sm text-slate-600">
              <Clock3 size={20} className="text-purple-700" />
              We typically respond within 24–48 hours.
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-purple-100/70 blur-3xl" />
            <Image src="/images/contact-illustration.png" alt="LearningWave contact illustration" width={720} height={520} className="relative z-10 h-auto w-full object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
}
