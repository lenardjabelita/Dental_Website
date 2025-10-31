import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <section className="relative">
      {/* soft background */}
      <div className="absolute inset-0 bg-gradient-to-b from-teal-50 via-slate-50 to-white" aria-hidden />
      
      <div className="relative mx-auto max-w-6xl px-6 py-16">
        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-3">Contact Us</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            We’d love to hear from you. Whether you’re booking a visit, have a question, or need assistance, our friendly team is ready to help.
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Phone */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-lg">
            <div className="flex items-center gap-3 text-teal-600 mb-2">
              <Phone size={22} />
              <h2 className="text-lg font-semibold text-slate-900">Call Us</h2>
            </div>
            <p className="text-slate-700">
              Office: <a href="tel:+13105391224" className="text-teal-600 hover:underline">(310) 539-1224</a><br />
              Emergency: <a href="tel:+13104864549" className="text-teal-600 hover:underline">(310) 486-4549</a>
            </p>
            <p className="mt-3 text-sm text-slate-500">
              Available during business hours. For emergencies, call or text the emergency line directly.
            </p>
          </div>

          {/* Email */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-lg">
            <div className="flex items-center gap-3 text-teal-600 mb-2">
              <Mail size={22} />
              <h2 className="text-lg font-semibold text-slate-900">Email</h2>
            </div>
            <p className="text-slate-700">
              <a href="mailto:Godsmile777@ymail.com" className="text-teal-600 hover:underline">
                Godsmile777@ymail.com
              </a>
            </p>
            <p className="mt-3 text-sm text-slate-500">
              We typically respond within one business day.
            </p>
          </div>

          {/* Address */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-lg">
            <div className="flex items-center gap-3 text-teal-600 mb-2">
              <MapPin size={22} />
              <h2 className="text-lg font-semibold text-slate-900">Visit Us</h2>
            </div>
            <p className="text-slate-700">
              1809 ½ Lomita Blvd<br />
              Lomita, CA 90717
            </p>
            <p className="mt-3 text-sm text-slate-500">
              Located near Lomita Blvd &amp; Narbonne Ave. Free parking available.
            </p>
          </div>
        </div>

        {/* Office hours */}
        <div className="mt-12 bg-white rounded-2xl p-8 text-center shadow-lg border border-slate-200">
          <h3 className="text-xl font-semibold text-slate-900 mb-2">Office Hours</h3>
          <p className="text-slate-700">Mon • Wed • Fri • Sat <br /> 11:00 AM – 7:00 PM</p>
          <p className="mt-4 text-slate-600">
            For appointments and questions, please call during office hours or email us anytime. We’ll respond promptly.
          </p>
        </div>

        {/* Map */}
        <div className="mt-16 rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-white">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.1954134130743!2d-118.320!3d33.792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd4c3ccf!2s1809%20Lomita%20Blvd%2C%20Lomita%2C%20CA%2090717!5e0!3m2!1sen!2sus!4v0000000000000"
            width="100%"
            height="400"
            loading="lazy"
            allowFullScreen
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
}
