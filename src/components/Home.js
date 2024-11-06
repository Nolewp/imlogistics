import React from "react";
import "./Home.css";

const Home = () => {
    return (
        <>
            <div className="home-container">
                <div className="contain">
                    <section id="home">
                        <h1>Welcome to IMLogistics</h1>
                        <p>
                            IMLogistics is a third-party logistics provider located in the heart of Chicago. IM prides itself on being the pinnacle of transportation partners - relentlessly pursuing a higher standard than ever seen before in the transportation space. Our belief in strong communication, transparency, and hard work has led us to a 100% customer retention rate. At IM, we will outwork and outperform our competitors - because logistics is who we are.
                        </p>
                    </section>
                </div>
            </div>

            <section id="Customers">
                <h2>Customers</h2>
                <p>
                    In a world driven by automation, IM is bringing a human touch back to the customer experience. We provide a single point of contact that will handle all of your shipping needs, who will also have the ability to provide expert advice and cost-saving strategies to resolve issues you may face. We understand that the world of transportation can be volatile and stressful - that’s why we make it a point to provide constant communication and diligence to our customers. With a representative being available 24/7, we promise better service and coverage than our competitors.
                </p>
            </section>

            <section id="Carriers">
                <h2>Carriers</h2>
                <h5>Rewarding partnerships</h5>
                <p>We boast a 95% retention rate over hundreds of carrier partnerships, with <a href="https://directory.dat.com/offices/M_cgrrKE_KKEcHE/details/broker-mc-1594397?q=%221594397%22&si=0">DAT</a> and Google reviews to match.</p>
                <p>We offer daily loads across the continental United States at fair rates.</p>

                <h5>Fast Set-Up</h5>
                <p>We are partnered with the most reputable onboarding platform and factoring company, giving us quick set-up times.</p>

                <h5>Easy Communication</h5>
                <p>One point of contact for all your needs with 24/7 availability.</p>

                <h5>Complete Professionalism</h5>
                <p>Full payment transparency.</p>
                <p>Respectful and reliable logistics representatives.</p>
            </section>

            <section id="Contact">
                <h2>Contact Us</h2>
                <p>Feel free to reach out to us for inquiries or to discuss how we can meet your logistics needs.</p>
                <div className="form">
                    <div className="col-md-8 offset-md-2">
                        <div className="errors"></div>
                        <form method="POST" id="target" action="https://formsubmit.co/c3ea8f117f05ff6a7a683a36366e51ee">
                            <input type="text" name="_honey" style={{ display: "none" }} />
                            <input type="hidden" name="_captcha" value="false" />
                            <input type="hidden" name="_next" value="https://imlogistics.us/thanks" />
                            <div className="form-group">
                                <div className="form-row">
                                    <div className="col">
                                        <label htmlFor="name">Full Name</label>
                                        <input type="text" id="name" name="name" className="form-control" required />
                                    </div>
                                    <div className="col">
                                        <label htmlFor="email">Email Address</label>
                                        <input type="email" id="email" name="email" className="form-control" required />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" className="form-control" name="message" rows="8" required></textarea>
                            </div>
                            <input type="hidden" value="" name="url" />
                            <button type="submit" className="btn btn-lg btn-outline-primary btn-block">Send Message</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
