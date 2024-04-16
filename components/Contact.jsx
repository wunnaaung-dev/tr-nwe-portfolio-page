import { contacts } from "@/data/data";
import Image from "next/image";

const Contact = () => {
  return (
    <section className="bg-[#333333] py-6" id="contact">
      <h1 className="text-5xl md:text-6xl lg:text-7xl text-[#FFC94A] font-bold text-center">
        Contact Me
      </h1>
      <p className="text-center text-white">
        You can reach out to me from the following contact information
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-4">
        <div className="space-y-2">
          {contacts.map((contact) => (
            <ContactList
              key={contact.id}
              title={contact.title}
              details={contact.details}
            />
          ))}
        </div>
        <div>
            <Image src="/contact-me.jpg" className="rounded-lg" alt="classroom-img" width={400} height={500}/>
        </div>
      </div>
    </section>
  );
};

const ContactList = ({ title, details }) => {
  return (
    <div className="bg-slate-200 rounded-lg shadow-xl w-80 p-3 flex gap-3">
      <div className="bg-blue-100 rounded-lg p-2 flex justify-center items-center">
        {icons[title.toLowerCase()]}
      </div>
      <div>
        <h3 className="font-bold">{title}</h3>
        <p className="text-sm text-slate-700">{details}</p>
      </div>
    </div>
  );
};

const LocationIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-8 h-8 text-slate-600"
    >
      <path
        fillRule="evenodd"
        d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

const PhoneIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-8 h-8 text-slate-600"
    >
      <path d="M10.5 18.75a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" />
      <path
        fillRule="evenodd"
        d="M8.625.75A3.375 3.375 0 0 0 5.25 4.125v15.75a3.375 3.375 0 0 0 3.375 3.375h6.75a3.375 3.375 0 0 0 3.375-3.375V4.125A3.375 3.375 0 0 0 15.375.75h-6.75ZM7.5 4.125C7.5 3.504 8.004 3 8.625 3H9.75v.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3h1.125c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 0 1 7.5 19.875V4.125Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

const EmailIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-8 h-8 text-slate-600"
    >
      <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
      <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
    </svg>
  );
};
const icons = {
  address: <LocationIcon />,
  phone: <PhoneIcon />,
  email: <EmailIcon />,
};
export default Contact;
