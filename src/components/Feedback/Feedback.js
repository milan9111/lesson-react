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
                        <input class="name-input" type="search" placeholder="Your Name" />
                        <input class="email-input" type="search" placeholder="Your Email" />
                        <input class="phone-input" type="search" placeholder="Your Phone" />
                        <input class="message-input" type="search" placeholder="Message" />
                        <button class="feedback-button">Send Message</button>
                    </form>
                </div>
            </div>
        );
}

export default Feedback;