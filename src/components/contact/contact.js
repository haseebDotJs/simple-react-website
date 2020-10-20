import React from 'react';
import './contact.css'

const Contact = () => {
    return (
        <>
            <div className='contact'>
                <h1>Contact Us</h1>
                <div className='line'></div>
                <div className="container">
                    <form method='GET'>
                        <label>First Name</label>
                        <input type="text" id="fname" name="firstname" placeholder="Your name.." required/>
                        <label>Last Name</label>
                        <input type="text" id="lname" name="lastname" placeholder="Your last name.." required/>
                        <label>Country</label>
                        <select id="country" name="country">
                            <option value="australia">Pakistan</option>
                            <option value="canada">America</option>
                            <option value="usa">Other</option>
                        </select>
                        <label>Subject</label>
                        <textarea id="subject" name="subject" placeholder="Write something.." required></textarea>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    )
}
export default Contact