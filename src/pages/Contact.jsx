function Contact() {
  return (
    <div className="max-w-3xl mx-auto py-16 px-6">

      <h1 className="text-4xl font-bold mb-8 text-center">
        Contact Us
      </h1>

      <form className="bg-white shadow-lg rounded-xl p-8 space-y-6">

        <input
          type="text"
          placeholder="Your Name"
          className="w-full border p-3 rounded-lg"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="w-full border p-3 rounded-lg"
        />

        <textarea
          placeholder="Your Message"
          rows="5"
          className="w-full border p-3 rounded-lg"
        ></textarea>

        <button
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          Send Message
        </button>

      </form>

    </div>
  );
}

export default Contact;