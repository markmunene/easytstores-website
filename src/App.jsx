import { useState, useRef, useEffect } from 'react'

import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer'
import Navbar from './Components/Navbar';
import pic1 from './assets/pic1.png'
import pic2 from './assets/pic2.png'
import pic3 from './assets/pic3.png'
import pic4 from './assets/pic4.png'
import pic5 from './assets/pic5.png'
import logo1 from './assets/Alfa-Romeo-Logo.png'
import logo2 from './assets/Diatto-Logo-500x281.png'
import logo3 from './assets/Fiat-Logo-500x281.png'
import logo4 from './assets/Iveco-Logo-500x281.png'
import logo5 from './assets/Pagani-Logo-500x281.png'

import play from './assets/play.png'
import appstore from './assets/appstore.png'

import pic6 from './assets/pic6.png'



function App() {
  // const [count, setCount] = useState(0)
  const [openFaq, setopenFaq] = useState(false)
  const [openFaq1, setopenFaq1] = useState(false)

  const [openFaq2, setopenFaq2] = useState(false);
  const [openFaq3, setopenFaq3] = useState(false);
  const [openFaq4, setopenFaq4] = useState(false);
  const [openFaq5, setopenFaq5] = useState(false);
  const [openFaq6, setopenFaq6] = useState(false);
  const [openFaq7, setopenFaq7] = useState(false);
  const [openFaq8, setopenFaq8] = useState(false);

  const faqContentRef = useRef(null)
  const faqContentRef1 = useRef(null)
  const faqContentRef2= useRef(null)
  const faqContentRef3= useRef(null)
  const faqContentRef4= useRef(null)
  const faqContentRef5= useRef(null)
  const faqContentRef6= useRef(null)
  const faqContentRef7= useRef(null)
  const faqContentRef8= useRef(null)

  const HandleopenFaq = () => {
    setopenFaq(!openFaq)
    // faqContentRef.current.style.maxHeight = openFaq ? '0px' : `${faqContentRef.current.scrollHeight}px`
    faqContentRef.current.style.display = openFaq ? 'none' : 'block';
  }
  const HandleopenFaq1 = () => {
    setopenFaq1(!openFaq1)
    // faqContentRef.current.style.maxHeight = openFaq1 ? '0px' : `${faqContentRef.current.scrollHeight}px`
    faqContentRef1.current.style.display = openFaq1 ? 'none' : 'block';
  }
  const HandleopenFaq2 = () => {
    setopenFaq2(!openFaq2)
    // faqContentRef.current.style.maxHeight = openFaq2 ? '0px' : `${faqContentRef.current.scrollHeight}px`
    faqContentRef2.current.style.display = openFaq2 ? 'none' : 'block';
  }
  const HandleopenFaq3 = () => {
    setopenFaq3(!openFaq3)
    // faqContentRef.current.style.maxHeight = openFaq3 ? '0px' : `${faqContentRef.current.scrollHeight}px`
    faqContentRef3.current.style.display = openFaq3 ? 'none' : 'block';
  }
  const HandleopenFaq4 = () => {
    setopenFaq4(!openFaq4)
    // faqContentRef.current.style.maxHeight = openFaq4 ? '0px' : `${faqContentRef.current.scrollHeight}px`
    faqContentRef4.current.style.display = openFaq4 ? 'none' : 'block';
  }
  const HandleopenFaq5 = () => {
    setopenFaq5(!openFaq5)
    // faqContentRef.current.style.maxHeight = openFaq5 ? '0px' : `${faqContentRef.current.scrollHeight}px`
    faqContentRef5.current.style.display = openFaq5 ? 'none' : 'block';
  }
  const HandleopenFaq6 = () => {
    setopenFaq6(!openFaq6)
    // faqContentRef.current.style.maxHeight = openFaq6 ? '0px' : `${faqContentRef.current.scrollHeight}px`
    faqContentRef6.current.style.display = openFaq6 ? 'none' : 'block';
  }
  const HandleopenFaq7 = () => {
    setopenFaq7(!openFaq7)
    // faqContentRef.current.style.maxHeight = openFaq7 ? '0px' : `${faqContentRef.current.scrollHeight}px`
    faqContentRef7.current.style.display = openFaq7 ? 'none' : 'block';
  }
  const HandleopenFaq8 = () => {
    setopenFaq8(!openFaq8)
    // faqContentRef.current.style.maxHeight = openFaq8 ? '0px' : `${faqContentRef.current.scrollHeight}px`
    faqContentRef8.current.style.display = openFaq8 ? 'none' : 'block';
  }
  const aboutRef = useRef(null)
  const contactRef = useRef(null)
  const faqRef = useRef(null)

  // scrolling
  const scrollDown = (ref) => {
    console.log(ref);
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      behavior: 'smooth',
    });
  };
  const scrollDownFaq = (ref) => {
    console.log(ref);
    window.scrollTo({
      top: faqRef.current.offsetTop,
      behavior: 'smooth',
    });
  };
  const scrollDownContact = (ref) => {
    // console.log(ref);
    window.scrollTo({
      top: contactRef.current.offsetTop,
      behavior: 'smooth',
    });
  };

  // handle  contact form
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [ subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    if (!name || !email || !message) {
      setError('Please fill all fields')
      setLoading(false)
    } else {
      const data = {
        name,
        email,
        message,
      }
      // send an email through sendgrid
      // back up code 035801
      Email.send({
        // secureToken: "8adae84823590510837d48706d2398f8",
         Host : "smtp.elasticemail.com", 
       Username : "munenemark72@gmail.com",
         Password : "348C03BACB6A078C1B3CD7C4642B0B73FB85",
           To : 'munenemark72@gmail.com', 
           From : 'markmunene72@gmail.com', 
           Subject : subject, 
        Body : `<html><h2>Header</h2><strong>${message}</strong><br></br>
        ${name}<br></br>
        ${email}<br></br>
        </html> ` })
        .then(  
          (result) => {
            setLoading(false)
            setSuccess('Message sent successfully')
            console.log(result);
            setName('')
            setEmail('')
            setMessage('')
          },
          (error) => {
            setLoading(false)
            setError('Something went wrong')
          }
      )
    }
  }

  

  return (
    <div className="cotainer">
        <Navbar scrollDown={scrollDown} scrollDownContact={scrollDownContact} scrollDownFaq={scrollDownFaq}   />
      <div className="hero-section">

        <div className="heroHeader">
          <h1>Easystores <br/> Application</h1>
          <p >Automate stock monitoring and sales analysis in your business</p>
        </div>
        <div className="productImagesContainer">
          
        <img
            className='img-fluid productImage'
            style={{
                marginTop:'80px'
              }}
            src={pic1}
          />
          <img
            className='img-fluid productImage'

            src={pic2}
          />
          <img
            className='img-fluid productImage'
            style={{
              marginTop:'50px'
            }}
            src={pic3}
          />
          
        </div>

      </div>

      <div className="about-section">
        <div className="download-btn">
          <a href="#" role="button">
          <img alt='' src={play} />
          
          </a>
          <a href='#' className='mr-2 ' role="button" >
          <img alt='' src={appstore} />
          </a>

        </div>

      </div>
      <div className="About-header">
        <h1>About us</h1>
      </div>

      <div className="row">

        <div className="aboutSectionContent" id='aboutSectionContent' ref={aboutRef}>  
        <div className="col-md-6 photoContainer">
          
        <span><strong>Updating stock screen</strong></span>
              <img src={pic2} alt="" className=' about-photo'  />
          <div className="rectangle-color">

          
            </div>
          </div>
          <div className="col-md-6">

        <div className="about-textContent">
          <div className="">
          <h2 className=''>
          Monitoring product stock levels 
          </h2>
          <p className='w-75'>
                  The app allows the merchant to monitor stock levels of each product.
                  if a product is below the set minimum quantity the merchant receives 
              a whatsapp message of all the products running low.
            </p>
              <a href="" className='btn btn-primary shadow'> learn more</a>
        </div>
        
          </div>
          </div>
       

        </div>
       
      </div>
      <div className=" row ">   
       <div className="aboutSectionContent">
        <div className=" col-md-6 " >
          <div className="about-textContent">

        
          <h2 className=''>
            Sales analysis
          </h2>
          <p className='w-75 classMleft ' >
              Using the selling price and buying price the app calculates the profit for each product sold and the results are recorded for analysis
              with these records can be generated  of each product sold in a particular
              date, month, year , to a certain cutomer etc.
            </p>
              <a href="" className='btn btn-primary shadow'> learn more</a>
       
          </div>
        
          </div>
        <div className=" col-md-6 photoContainer">
      
            <span><strong>Sales Analysis Screen</strong></span>
              <img src={pic4} alt="" className='about-photo'  />
          <div className="rectangle-color">

            </div>
            </div>
            </div>

      </div>
      <div className="row">
        <div className="aboutSectionContent">  
          <div className="col-md-6 photoContainer">

          <span><strong>Saving a Sale screen</strong></span>
              <img src={pic5} alt="" className='about-photo'  />
          <div className="rectangle-color">
            </div>
          </div>
          <div className="col-md-6">

        <div className="about-textContent">
          <div className="">
          <h2 className=''>
            Printing reciepts using bluetooth printer
          </h2>
          <p className='w-75'>
              The app prints a receipt using a thermal printer conneted through bluetooth.
                  beside this it also calculates balance automatically and also offer discounts to users.
                  finally while recording a sale a saler can capture the customer contact which can later be used for marketting.
          </p>
              <a href="" className=' learn-more3 shadow'> learn more</a>
        </div>
          </div>
        
          </div>
       

      </div>
       
      </div>
      {/* our clients section */}
      <div className="our-clients">
        <div className="our-clients-header">
          <h1>Our clients</h1>
          <p className='client-text m-2'>
           We have worked with local shop owners in kenya for over a year now.
          </p>
        </div>
        <div className="our-clients-content">
          <div className="our-clients-content-item">  
            <img src={logo1} alt="" className='' />
          </div>
          <div className="our-clients-content-item">
            <img src={logo2} alt="" className='' />
          </div>
          <div className="our-clients-content-item">
            <img src={logo3} alt="" className='' />
          </div>
          <div className="our-clients-content-item">
            <img src={logo4} alt="" className='' />
          </div>
          <div className="our-clients-content-item">
            <img src={logo5} alt="" className='' />
          </div>
        </div>
      </div>

      {/* Faqs */}
      <div className="faqs"ref={faqRef} >
        <div className="faqs-header">
          <h1>Faqs</h1>
        </div>
        <div className="faqs-content">
          <div className="faqs-content-item card mb-2 ">
            <div className=" card-header">
              <div className="item-Header">
          
              <button onClick={()=>HandleopenFaq()} className='faq-open-btn mr-1'><i className={openFaq ? 'fa-sharp fa-solid fa-minus' : 'fa-solid fa-plus'} ></i></button>
            <h3 className='mt-1 text-center'>Get low stock products ?</h3>
             </div>
            </div>
            <div className="item-content card-body " ref={faqContentRef}>
            <p>
             Press the low stock button on the home screen and it will filter out all the products with stock level below or equal current stock
            </p>
           </div>
          </div>
          <div className="faqs-content-item card mb-2">
            <div className=" card-header">
              <div className="item-Header">
          
              <button onClick={()=>HandleopenFaq1()} className='faq-open-btn mr-1'><i className={openFaq1 ? 'fa-sharp fa-solid fa-minus' : 'fa-solid fa-plus'} ></i></button>
            <h3 className='mt-1 text-center'>Get products after login ? </h3>
             </div>
            </div>
            <div className="item-content card-body " ref={faqContentRef1}>
            <p>
              Press the sync button on the home screen
            </p>
           </div>
          </div>
          <div className="faqs-content-item card mb-2">
            <div className=" card-header">
              <div className="item-Header">
          
              <button onClick={()=>HandleopenFaq3()} className='faq-open-btn mr-1'><i className={openFaq3 ? 'fa-sharp fa-solid fa-minus' : 'fa-solid fa-plus'} ></i></button>
            <h3 className='mt-1 text-center'>Generate sales reports, income statement ?</h3>
             </div>
            </div>
            <div className="item-content card-body " ref={faqContentRef3}>
            <p>
             Go to admin screen the press the three dots on the to right corner and select sales report
            </p>
           </div>
          </div>
          <div className="faqs-content-item card mb-2">
            <div className=" card-header">
              <div className="item-Header">
          
              <button onClick={()=>HandleopenFaq2()} className='faq-open-btn mr-1'><i className={openFaq2 ? 'fa-sharp fa-solid fa-minus' : 'fa-solid fa-plus'} ></i></button>
            <h3 className='mt-1 text-center'>Record expenses, gains outside sales  ?</h3>
             </div>
            </div>
            <div className="item-content card-body " ref={faqContentRef2}>
            <p>
             Go to items then income statement expenses then select either gain or lose , expense description and amount 
            </p>
           </div>
          </div>
          
        </div>
      </div>
      {/* download section */}
      <div className="download-section">
        <div className="row">
          <div className="col-md-6">
            <div className="download-text-content">
              <div className="">
              <h1>download App</h1>
              <p className='mb-4'>
                Ease your struggle for managing your shop and taking it to the next level in life 
              </p>
              <div className="download-btns d-flex ">
                  <a href="#" className=''>
                    <img src={appstore} alt="" />
                </a>
                  <a href="#" className=''>
                    <img src={play} alt="" />
                </a>

              </div>
             </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="download-photo-container ">
              <img src={pic1} alt='something is good' className='' />
            </div>
          </div>
        </div>
      </div>
      {/* contact us section */}
      <div className="contact w-100">
        <div className="contact-header">
          <h1 className='text-center'>Contact us</h1>
        </div>

      <div className="row" data-aos="fade-in" ref={contactRef}>

<div className="col-lg-5 d-flex align-items-stretch ">
  <div className="info">
    <div className="address">
      <i className="icofont-google-map"></i>
      <h4>Location:</h4>
      <p>Nairobi Kenya</p>
    </div>

    <div className="email">
      <i className="icofont-envelope"></i>
      <h4>Email:</h4>
      <p>munenemark72@gmail.com</p>
    </div>

    <div className="phone">
      <i className="icofont-phone"></i>
      <h4>Call:</h4>
      <p>+254 748 406 477</p>
    </div>

   
  </div>

</div>

<div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
  <form  method="post" role="form" className="php-email-form">
    <div className="row">
      <div className="form-group col-md-6">
        <label for="name">Your Name</label>
                  <input type="text" name="name" className="form-control" id="name" data-rule="minlen:4" data-msg="Please enter at least 4 chars"
                    value={name} onChange={(e)=>setName(e.target.value)} 
                  />
        <div className="validate"></div>
      </div>
      <div className="form-group col-md-6">
        <label for="name">Your Email</label>
                  <input type="email" className="form-control" name="email" id="email" data-rule="email" data-msg="Please enter a valid email"
                    value={email} onChange={(e)=>setEmail(e.target.value)}
                  />
        <div className="validate"></div>
      </div>
    </div>
    <div className="form-group">
      <label for="name">Subject</label>
                <input type="text" className="form-control" name="subject" id="subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject"
      
                  value={subject} onChange={(e)=>setSubject(e.target.value)}
                />
      <div className="validate"></div>
    </div>
    <div className="form-group">
      <label for="name">Message</label>
                <textarea className="form-control" id="message" 
                  value={message} onChange={(e)=>setMessage(e.target.value)}
      name="message" rows="10" data-rule="required"

       data-msg="Please write something for us"></textarea>
      <div className="validate"></div>
    </div>
    <div className="mb-3">
      <div className="loading">Loading</div>
      <div className="error-message"></div>
      <div id="message_sent" className="sent-message">Your message has been sent. Thank you!</div>
    </div>
    <div className="text-center"><button type="submit" onClick={handleSubmit}>Send Message</button></div>
  </form>
</div>

</div>
      </div>


      

   
    <Footer />
    </div>
  )
}

export default App
