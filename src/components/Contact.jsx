import { useRef, useState } from 'react';
import style from './Contact.module.css';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Contact = () => {
    const [messageData, setMessageData] = useState({
        name: '',
        email: '',
        content: '',
        errors: {
            name: false,
            email: false,
            content: false
        }
    });
    const [firstSend, setFirstSend] = useState(true);
    const [sending, setSending] = useState(false)

    const contactForm = useRef()

    const validateEmail = (email) => {
        return email.match(
            // eslint-disable-next-line
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };

    const handleInputChange = (e) => {
        let { name, value } = e.target;
        let error = false;

        if (firstSend) {
            setMessageData({
                ...messageData,
                [name]: value
            });
            return;
        }

        if (value === '') error = true;
        if (name === 'email') error = !validateEmail(value);

        setMessageData({
            ...messageData,
            [name]: value,
            errors: {
                ...messageData.errors,
                [name]: error,
            }
        })
    }
    const checkValidation = () => {
        const { name, email, content } = messageData;
        let errors = {
            name: name === '',
            email: !validateEmail(email),
            content: content === ''
        };
        setMessageData({
            ...messageData,
            errors
        })
    }
    const isValid = () => {
        return messageData.name !== '' && messageData.content !== "" && validateEmail(messageData.email)
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();

        if (isValid()) {
            setSending(true);
            emailjs.sendForm('service_5wdohco', 'template_53h2mfg', contactForm.current, 'jbaqcmYR0pfEweOpg')
                .then((result) => {
                    toast.success("¡Mensaje Enviado!", {
                        position: toast.POSITION.TOP_RIGHT,
                        className: 'foo-bar',
                        autoClose: 3500
                    });
                    setMessageData({
                        name: '',
                        email: '',
                        content: '',
                        errors: {
                            name: false,
                            email: false,
                            content: false
                        }
                    });
                    setSending(false);
                },
                    (error) => {
                        toast.error("¡Error al enviar!", {
                            position: toast.POSITION.TOP_RIGHT,
                            className: 'foo-bar',
                            autoClose: 3500
                        });
                    })
        } else {
            checkValidation();
            setFirstSend(false);
        }

    }

    return (
        <div className={style.contactContainer}>
            <ToastContainer />
            <h3>CONTACTO</h3>
            <form ref={contactForm} className={style.formContact}>
                <h4>Envíame un mensaje</h4>
                <div className={style.formInputs}>
                    <div className={style.inputContainer}>
                        <input
                            className={`${style.formInput} ${messageData.errors.name && style.invalidInput}`}
                            placeholder='Nombre'
                            name='name'
                            value={messageData.name}
                            onChange={handleInputChange}></input>
                        {messageData.errors.name && <p className={style.errorMessage}>Ingrese un nombre.</p>}
                    </div>
                    <div className={style.inputContainer}>
                        <input
                            className={`${style.formInput} ${messageData.errors.email && style.invalidInput}`}
                            placeholder='Correo'
                            name='email'
                            value={messageData.email}
                            onChange={handleInputChange}></input>
                        {messageData.errors.email && <p className={style.errorMessage}>Ingrese un correo válido</p>}
                    </div>
                    <div className={style.inputContainer}>
                        <textarea
                            className={`${style.textarea} ${messageData.errors.content && style.invalidInput}`}
                            placeholder='Escribe tu mensaje'
                            name='content'
                            value={messageData.content}
                            onChange={handleInputChange}></textarea>
                        {messageData.errors.content && <p className={style.errorMessage}>Ingrese un mensaje</p>}
                    </div>
                    <button
                        className={style.btnSubmit}
                        disabled={sending}
                        onClick={handleSubmitForm}>{sending ? 'Enviando...' : 'Enviar'}</button>
                </div>

            </form>
        </div>
    )
}
export default Contact;