function Contact() {
  return (
       <div className="min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-6 text-center bg-blue-600 text-white py-20 text-center">
        Contact Us
      </h1>
      
    <div className="max-w-3xl mx-auto py-16 px-6">
      <form className="bg-white shadow-lg rounded-xl p-8 space-y-6">
        <input type="text" placeholder="Your Name" className="w-full border p-3 rounded-lg"/>
        <input  type="email" placeholder="Your Email" className="w-full border p-3 rounded-lg"/>
        <textarea placeholder="Your Message" rows="5" className="w-full border p-3 rounded-lg"></textarea>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
          Send Message
        </button>
      </form>
    </div>
    </div>
  );
}

export default Contact;