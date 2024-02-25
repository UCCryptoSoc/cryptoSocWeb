
import React from 'react';
import { images } from '../../constants';
import './About.css';

const About = () => {
return (
    <div className="section-padding">
    <div className="row dao-info">
        <div className="col-lg-8 col-12">
        <h3>Who are we?</h3>

        <p className="pt-1 pb-3">
        Established in 2018 and officially recognized as a DAO
        (Decentralized Autonomous Organization) in 2024, UC Crypto Soc stands as the
        University of Canterbury&apos;s exclusive society dedicated to blockchain and decentralized
        finance. As the title implies, we form a community of like-minded UC students passionate
            about financial sovereignty, decentralized ideology, investing, finance, freedom,
        and the future of money
        </p>
        <p className="pt-2 pb-3">
        Our primary goal is to promote crypto education, community building, adoption, and awareness
        on campus. In our brief history, we have hosted numerous events with industry leaders, garnered
        sponsorship from New Zealand&apos;s industry giants, and etched our name in history as the first NZ university DAO.
        </p>
        <p className="pt-3 pb-3">
        For those seeking to connect with decentralized finance enthusiasts at UC, your search ends with Crypto Soc.
        </p>
        <a href="https://forms.gle/vnDPxdGHwXDcVrcn6">
        <button className="btn-learn-more">Join Us!</button>
        </a>
        </div>
        <div className="col-lg-4 d-lg-flex d-none">
        <img src={images.about} alt="cryptoSocEvent" />
        </div>
    </div>
    </div>
);
};

export default About;
