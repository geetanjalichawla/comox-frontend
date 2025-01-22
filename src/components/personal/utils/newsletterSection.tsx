import { CheckCircle } from "lucide-react";
import React from "react";

const NewsletterSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-12 px-6 rounded-lg shadow-md md:py-24 w-full">
      <div className="max-w-2xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-normal leading-loose text-neutral-900 font-sans mb-6">
          Subscribe to our email newsletter and get 10% off
        </h2>

        {/* Input and Button */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4 items-center justify-center border-b pb-2 border-neutral-300 focus-within:border-neutral-800 transition-all duration-500 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-auto flex-1 px-4 py-3 bg-transparent rounded-lg focus:outline-none focus:ring-0 text-neutral-800 placeholder:text-neutral-700"
          />
          <button className="w-full sm:w-auto px-6 py-4 bg-black text-white font-medium rounded-lg hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-offset-neutral-600">
            Subscribe
          </button>
        </div>

        {/* Checkbox and Description */}
        <div className="mt-4 flex items-center justify-center gap-2 text-sm text-neutral-600">
            <CheckCircle />
          <label htmlFor="newsletter-checkbox">
            Join the 10,000 users in our newsletter
          </label>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
