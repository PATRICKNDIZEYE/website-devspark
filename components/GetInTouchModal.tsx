"use client";

import { useState, useEffect } from "react";
import { X, Send, Loader2 } from "lucide-react";
import { useTheme } from "./ThemeProvider";

interface GetInTouchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GetInTouchModal = ({ isOpen, onClose }: GetInTouchModalProps) => {
  const { theme } = useTheme();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    description: "",
    budget: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setFormData({ name: "", contact: "", description: "", budget: "" });
      setErrors({});
      setSubmitSuccess(false);
    }
  }, [isOpen]);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.contact.trim()) {
      newErrors.contact = "Contact information is required";
    } else if (
      !/^[\w\.-]+@[\w\.-]+\.\w+$/.test(formData.contact) &&
      !/^\+?[\d\s-()]+$/.test(formData.contact)
    ) {
      newErrors.contact = "Please enter a valid email or phone number";
    }

    if (!formData.description.trim()) {
      newErrors.description = "Project description is required";
    } else if (formData.description.trim().length < 20) {
      newErrors.description = "Please provide at least 20 characters";
    }

    if (!formData.budget.trim()) {
      newErrors.budget = "Budget is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setSubmitSuccess(true);
      
      // Reset form after success
      setTimeout(() => {
        onClose();
        setSubmitSuccess(false);
      }, 2000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrors({ 
        submit: error instanceof Error 
          ? error.message 
          : "Something went wrong. Please try again." 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  if (!isOpen) return null;

  const bgColor = theme === "dark" ? "rgba(15, 15, 15, 0.95)" : "rgba(255, 255, 255, 0.95)";
  const textColor = theme === "dark" ? "#ffffff" : "#1a1a1a";
  const borderColor = theme === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)";
  const inputBg = theme === "dark" ? "rgba(26, 26, 26, 0.8)" : "rgba(245, 245, 245, 0.8)";

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 backdrop-blur-md transition-opacity duration-300"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      />

      {/* Modal */}
      <div
        className="relative w-full max-w-2xl rounded-[32px] p-6 md:p-8 shadow-2xl transition-all duration-300"
        style={{
          backgroundColor: bgColor,
          border: `1px solid ${borderColor}`,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110 hover:opacity-70"
          style={{ color: textColor }}
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Success Message */}
        {submitSuccess ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Send className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-2" style={{ color: textColor }}>
              Thank You!
            </h3>
            <p style={{ color: theme === "dark" ? "#a0a0a0" : "#666666" }}>
              We&apos;ll get back to you soon.
            </p>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="mb-6">
              <h2
                className="text-3xl md:text-4xl font-bold mb-2"
                style={{ color: textColor }}
              >
                Get In Touch
              </h2>
              <p
                className="text-base"
                style={{ color: theme === "dark" ? "#a0a0a0" : "#666666" }}
              >
                Tell us about your project and we&apos;ll get back to you
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                  style={{ color: textColor }}
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-[16px] border transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  style={{
                    backgroundColor: inputBg,
                    borderColor: errors.name
                      ? "#ef4444"
                      : borderColor,
                    color: textColor,
                  }}
                  placeholder="John Doe"
                />
                {errors.name && (
                  <p className="text-sm text-red-500 mt-1">{errors.name}</p>
                )}
              </div>

              {/* Contact Field */}
              <div>
                <label
                  htmlFor="contact"
                  className="block text-sm font-medium mb-2"
                  style={{ color: textColor }}
                >
                  Email or Phone *
                </label>
                <input
                  type="text"
                  id="contact"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-[16px] border transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  style={{
                    backgroundColor: inputBg,
                    borderColor: errors.contact
                      ? "#ef4444"
                      : borderColor,
                    color: textColor,
                  }}
                  placeholder="john@example.com or +250 XXX XXX XXX"
                />
                {errors.contact && (
                  <p className="text-sm text-red-500 mt-1">{errors.contact}</p>
                )}
              </div>

              {/* Description Field */}
              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium mb-2"
                  style={{ color: textColor }}
                >
                  Project Description *
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-[16px] border resize-none transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  style={{
                    backgroundColor: inputBg,
                    borderColor: errors.description
                      ? "#ef4444"
                      : borderColor,
                    color: textColor,
                  }}
                  placeholder="Briefly describe your project, goals, and requirements..."
                />
                {errors.description && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.description}
                  </p>
                )}
              </div>

              {/* Budget Field */}
              <div>
                <label
                  htmlFor="budget"
                  className="block text-sm font-medium mb-2"
                  style={{ color: textColor }}
                >
                  Proposed Budget *
                </label>
                <input
                  type="text"
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-[16px] border transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  style={{
                    backgroundColor: inputBg,
                    borderColor: errors.budget
                      ? "#ef4444"
                      : borderColor,
                    color: textColor,
                  }}
                  placeholder="e.g., $5,000 - $10,000 or RWF 5M - 10M"
                />
                {errors.budget && (
                  <p className="text-sm text-red-500 mt-1">{errors.budget}</p>
                )}
              </div>

              {/* Submit Error */}
              {errors.submit && (
                <p className="text-sm text-red-500">{errors.submit}</p>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-4 rounded-full font-semibold flex items-center justify-center gap-2 transition-all hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default GetInTouchModal;

