import './index.css';

function Feedback () {
  
        return (
            <div className="feedback">
                <div className="container">
                    <div className="feedback-info">
                        <h1 className="feedback-info-title">Tell what you need?</h1>
                        <p className="feedback-info-text">My phone number is <span className="feedback-info-phone">+ 46 475146</span></p>
                        <p className="feedback-info-text"> Alternatively, please send me a message using the concact form and i'll get back to you</p>
                    </div>
                    <form action="#" class="feedback-form">
                        <input class="input name-input" type="text" placeholder="Your Name" />
                        <input class="input email-input" type="email" placeholder="Your Email" />
                        <input class="input phone-input" type="tel" placeholder="Your Phone" />
                        <textarea class="input message-input" type="text" placeholder="Message" />
                    </form>
                    <button class="feedback-button" type="submit">Send Message</button>
                </div>
            </div>
        );
}

export default Feedback;