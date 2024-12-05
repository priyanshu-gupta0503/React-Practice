import Button from '../Button/Button'
import styles from './ContactForm.module.css'
import { MdMessage } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
function ContactForm() {
    // let name="Anshu";
    // let email="priyanshu1535@gmail.com";
    // let text="Subscribe to this Channel";

    const onSubmit=(event)=>
    {       
        event.preventDefault();
        console.log(event);
        
        // name=event.target[0].value;
        // email=event.target[1].value;
        // text=event.target[2].value;
    }
  return (
  <>
<section className={`${styles.container}`}>
    <div className={`${styles.contact_form}`}>
        <div className={`${styles.top_btn}`}>
        <Button  
        text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px"/>}/>
        <Button text="VIA CALL" icon={<IoMdCall fontSize="24px"/>} />
        </div>
        <Button isOutline={true} text="VIA Email Form" icon={<MdEmail fontSize="24px"/>} />
        <form onSubmit={onSubmit}>
           <div className={`${styles.form_controller}`}>
           <label htmlFor="name">Name</label>
           <input type="text" name='name' />
           </div>
           <div className={`${styles.form_controller}`}>
           <label htmlFor="email">E Mail</label>
           <input type="text" name='email' />
           </div>
           <div className={`${styles.form_controller}`}>
           <label htmlFor="text">Text</label>
           <textarea type="text" name='text' rows={6} />
           </div>
        <div style={{justifyContent:"end"}}className={`${styles.top_btn}`}>
        <Button type="submit"text='Submit'/>
        </div>
        </form>
     
    </div>
    <div className={`${styles.contact_image}`}><img src="/images/Service 24_7-pana 1.png" alt="Working Slave" />
    </div>
</section>
  </>
  )
}

export default ContactForm
