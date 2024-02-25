
import React from 'react';
import { images } from '../../constants';
import './Crypto.css';

const Crypto = () => {
return (
    <div className="section-padding">
    <div className="row dao-info">
        <div className="col-lg-8 col-12">
        <h3>What Even is Crypto?</h3>

        <p className="pt-1 pb-3">
        Born too late to explore the seas, born too early to explore the stars, 
        born just in time to witness the rise of the cryptocurrency revolution.
        </p>
        <p className="pt-2 pb-3">
        Cryptocurrencies like Bitcoin (BTC), Ethereum (ETH), and Monero (XRM) are a 
        new, revolutionary form of open-source money; decentralized digital currency 
        and payment systems being used by hundreds of millions of people to enhance their
        financial sovereignty, autonomy, and privacy.
        </p>
        <p className="pt-3 pb-3">
        Cryptocurrencies are powered by blockchain technology, distributed, decentralized 
        ledgers that record, validate, and execute public transactions in a censorship-resistant, 
        tamper-proof way without the requirement for central banks, governments, middlemen, or 
        singular weak points in the network.
        </p>
        <p className="pt-4 pb-3">
        Launched in early 2009, Bitcoin (BTC) was the first decentralized crypto created - built to provide
        the world with an electronic peer-to-peer cash system that can operate on its own without the need
        for a bank, state, or central organization. Today, Bitcoin still dominates the crypto revolution.
        </p>
        <p className="pt-5 pb-3">
        In the following years, Bitcoin&apos;s open-source code has resulted in the creation of tens of thousands of
        new decentralized financial projects, igniting a global hotpot of open-source innovation, privacy, and
        autonomy-centric digital infrastructure development, and billions of dollars in value creation.
        </p>
        <p className="pt-6 pb-3">
        To explore deeper down the crypto rabbit hole, join the cryptocurrency.org.nz guide website.
        </p>
        <a href="https://www.cryptocurrency.org.nz/">
        <button className="btn-learn-more">Learn More About Crypto here</button>
        </a>
        </div>
        <div className="col-lg-4 d-lg-flex d-none">
        <img src={images.crypto} alt="daoImage" />
        </div>
    </div>
    </div>
);
};

export default Crypto;
