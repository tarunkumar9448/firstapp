
import AboutImg from "../assets/img/img1.jpg";
import TeamImg1 from "../assets/img/img2.jpg";
import TeamImg2 from "../assets/img/img3.jpg";
import TeamImg3 from "../assets/img/img4.jpg";
import Counter from "../components/Counter";

function About() {
  return (
   <div className="min-h-screen bg-gray-100 dark:bg-gray-700">
     <h1 className="text-4xl font-bold mb-6 text-center bg-blue-600 text-white py-20 text-center">
         About Us
     </h1>
     <div className="max-w-5xl mx-auto px-6 py-16">
         <section class="py-10">
             <div class="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
                 <img src={AboutImg} alt="Team" class="rounded-xl shadow-lg" />
                 <div>
                     <h2 class="text-3xl font-bold mb-4 dark:text-gray-100">Who We Are</h2>
                     <p class="text-gray-600 mb-4 dark:text-gray-300">
                         We are a passionate team of developers and designers dedicated to
                         building high-quality websites and web applications using the latest
                         technologies like Tailwind CSS, React, and Laravel.
                     </p>
                     <p class="text-gray-600 dark:text-gray-300">
                         Our goal is to deliver fast, secure, and beautiful digital experiences
                         that help businesses grow online.
                     </p>
                 </div>
             </div>
         </section>        

         <section class="py-16">
             <div class="max-w-6xl mx-auto">
                 <h2 class="text-3xl font-bold text-center mb-10 dark:text-gray-100">Our Team</h2>

                 <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

                     <div class="bg-white rounded-xl shadow-md p-6 text-center dark:bg-gray-800">
                         <img src={TeamImg1} class="w-24 h-24 rounded-full mx-auto mb-4" />
                         <h3 class="font-bold text-xl dark:text-gray-100">John Doe</h3>
                         <p class="text-gray-500">Frontend Developer</p>
                     </div>

                     <div class="bg-white rounded-xl shadow-md p-6 text-center dark:bg-gray-800">
                         <img src={TeamImg1} class="w-24 h-24 rounded-full mx-auto mb-4" />
                         <h3 class="font-bold text-xl dark:text-gray-100">Jane Smith</h3>
                         <p class="text-gray-500">Backend Developer</p>
                     </div>

                     <div class="bg-white rounded-xl shadow-md p-6 text-center dark:bg-gray-800">
                         <img src={TeamImg1} class="w-24 h-24 rounded-full mx-auto mb-4" />
                         <h3 class="font-bold text-xl dark:text-gray-100">David Lee</h3>
                         <p class="text-gray-500">UI/UX Designer</p>
                     </div>

                 </div>
             </div>
         </section>
         <section class="bg-white py-10 rounded-xl dark:bg-gray-800">
                 <h2 class="text-3xl font-bold text-center mb-10 dark:text-gray-100">Our Success</h2>
             <div class="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                 <div>
                     <Counter end={500} suffix="+" />
                     <p class="text-gray-600 mt-2 dark:text-gray-200">Projects</p>
                 </div>

                 <div>
                     <Counter end={250} suffix="+" />
                     <p class="text-gray-600 mt-2 dark:text-gray-200">Clients</p>
                 </div>

                 <div>
                     <Counter end={10} suffix="+" />
                     <p class="text-gray-600 mt-2 dark:text-gray-200">Years Experience</p>
                 </div>

                 <div>
                     <Counter end={24} suffix="/7" />
                     <p class="text-gray-600 mt-2 dark:text-gray-200">Support</p>
                 </div>
             </div>
         </section>
     </div>
 </div>
  );
}

export default About;