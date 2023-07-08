import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function ContactUs() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_gxtgr5q', 'template_hcdk6aq', form.current, 'eYZsO9dMjjjc0ww4u')
      .then((result) => {
          console.log(result.text);
          alert('Message sent succesfully')
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='bg-gradient-to-tl from-[#ede3da] to-orange-200'>
      <div className="container mx-auto px-4 pt-24 ">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <div className="flex mb-8">
          <div className="w-1/2 pr-4">
            <div className="mb-6">
              <h2 className="text-xl font-bold mb-2">Address</h2>
              <p>Burhan Misiri, Tirane</p>
            </div>
            <div className="mb-6">
              <h2 className="text-xl font-bold mb-2">Email</h2>
              <p>julianbici14@gmail.com</p>
            </div>
            <div className="mb-6">
              <h2 className="text-xl font-bold mb-2">Phone</h2>
              <p>068 428 3954</p>
            </div>
          </div>
          <div className="w-1/2 pl-4">
            <div className="h-64 bg-gray-200 rounded-lg"></div>
          </div>
        </div>
      </div>
      <section >
        <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <p class="mb-8 lg:mb-16 font-light text-center sm:text-xl">Got a technical issue? Need details about the way i work? Let me know.</p>
          <form ref={form} onSubmit={sendEmail} class="space-y-8">
              <div>
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                <input name='from_email' type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@gmail.com" required />
              </div>
              <div>
                  <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                  <input name='from_subject' type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how I can help you" required />
              </div>
              <div class="sm:col-span-2">
                  <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                  <textarea name='message' id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
              </div>
              <button type='submit' value='Send' className=" flex items-center justify-between rounded-2xl bg-[#1C1C1E] px-5 py-3 text-center text-sm font-semibold text-white hover:bg-gray-700 duration-200 hover:cursor-pointer active:duration-75">
                Send
              </button>
              </form>
        </div>
      </section>
    </div>
  );
}

export default ContactUs;
