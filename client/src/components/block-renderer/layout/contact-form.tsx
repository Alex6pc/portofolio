"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { getStrapiURL } from "@/lib/utils";
import Link from "next/link";

interface FormData {
  name: string;
  email: string;
  message: string;
  phone?: string;
  privacyAccepted: boolean;
}

const LoadingOverlay = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
  >
    <div className="bg-white p-6 rounded-lg shadow-xl flex flex-col items-center gap-4">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      <p className="text-gray-700">Nachricht wird gesendet...</p>
    </div>
  </motion.div>
);

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
    phone: "",
    privacyAccepted: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`${getStrapiURL()}/api/contacts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: formData }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setSubmitStatus({
        type: "success",
        message: "Nachricht erfolgreich gesendet!",
      });
      setFormData({ name: "", email: "", message: "", phone: "", privacyAccepted: false });
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Fehler beim Senden der Nachricht. Bitte versuchen Sie es später erneut.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6 relative">
      {/* <AnimatePresence>
        {isSubmitting && <LoadingOverlay isActive={isSubmitting} />}
      </AnimatePresence> */}
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-text-secondary">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            onInvalid={(e: React.InvalidEvent<HTMLInputElement>) => {
              e.target.setCustomValidity('Bitte geben Sie Ihren Namen ein');
            }}
            onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
              e.target.setCustomValidity('');
            }}
            className="mt-1 block w-full bg-background text-text rounded-md border border-primary px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-text-secondary">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            onInvalid={(e: React.InvalidEvent<HTMLInputElement>) => {
              e.target.setCustomValidity('Bitte geben Sie eine gültige E-Mail-Adresse ein');
            }}
            onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
              e.target.setCustomValidity('');
            }}
            className="mt-1 block w-full bg-background text-text rounded-md border border-primary px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-text-secondary">
            Telefon
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 block w-full bg-background text-text rounded-md border border-primary px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-text-secondary">
            Nachricht *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            value={formData.message}
            onChange={handleChange}
            onInvalid={(e: React.InvalidEvent<HTMLTextAreaElement>) => {
              e.target.setCustomValidity('Bitte geben Sie eine Nachricht ein');
            }}
            onInput={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
              e.target.setCustomValidity('');
            }}
            className="mt-1 block w-full bg-background text-text rounded-md border border-primary px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>

        {/* Privacy Policy Checkbox */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex items-start space-x-3"
        >
          <input
            type="checkbox"
            id="privacy"
            checked={formData.privacyAccepted}
            onChange={(e) => setFormData({ ...formData, privacyAccepted: e.target.checked })}
            className="mt-1 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
            required
          />
          <label htmlFor="privacy" className="text-sm text-text-secondary">
            Ich habe die{" "}
            <Link
              href="/privacy-policy"
              className="text-primary hover:text-primary-hover underline underline-offset-4"
            >
              Datenschutzerklärung
            </Link>
            {" "}gelesen und akzeptiere diese.
          </label>
        </motion.div>

        {submitStatus.type && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`p-4 rounded-md ${submitStatus.type === "success" ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"
              }`}
          >
            {submitStatus.message}
          </motion.div>
        )}

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={isSubmitting}
          className={`w-full rounded-md bg-primary px-4 py-2 text-white shadow-sm hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${isSubmitting ? "opacity-75 cursor-not-allowed" : ""
            }`}
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center gap-2">
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              <span>Wird gesendet...</span>
            </div>
          ) : (
            "Nachricht senden"
          )}
        </motion.button>
      </motion.form>
    </div>
  );
} 