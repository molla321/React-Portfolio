import { useRef, useState} from 'react';
import emailjs from 'emailjs-com';

// const Email = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();
//     "service_vocy8ds","template_11eip0z",
//     emailjs.sendForm('service_vocy8ds', 'template_11eip0z', form.current, 'DsYeM3xdjKpvmKTUr')
//       .then((result) => {
//           console.log(result.text);
//       }, (error) => {
//           console.log(error.text);
//       });
//   };

//   return (
    // <form ref={form} onSubmit={sendEmail}>
    //   <label>Name</label>
    //   <input type="text" name="user_name" />
    //   <label>Email</label>
    //   <input type="email" name="user_email" />
    //   <label>Message</label>
    //   <textarea name="message" />
    //   <input type="submit" value="Send" />
    // </form>
//   );
// };

// export default Email;




const Email = () => {
  const ref = useRef();
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs
      .sendForm(
        "service_vocy8ds",
        "template_11eip0z",
        ref.current,
        "DsYeM3xdjKpvmKTUr"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };
  return (
    <>
       <form ref={ref} onSubmit={handleSubmit}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
      {success &&
              "Your message has been sent. We'll get back to you soon :)"}
    </form>
    
    </>
  );
};

export default Email;