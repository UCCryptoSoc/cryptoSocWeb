// DAOInfo.jsx

import React from 'react';
import { images } from '../../constants';
import './DAOInfo.css';

const DAOInfo = () => {
  return (
    <div className="section-padding">
      <div className="row dao-info">
        <div className="col-lg-8 col-12">
          <h3>The History of our DAO (Decentralized Autonomous Organization)</h3>

          <p className="pt-2 pb-4">
            In January 2024, the UC Crypto Society made history by becoming the
            first New Zealand university club to become a decentralized autonomous
            organization (DAO), reaching executive team wide consensus to use the
            Ethereum blockchain as the heart of our governance, fund management and
            decision making. By doing so, Crypto Soc has broken ground by becoming the
            first flat, truly democratic, opensource New Zealand university society,
            standing true to our values of transparency and decentralization.
          </p>
          <p className="pb-4">
            At UC Crypto, every key decision is proposed and voted for on-chain, in a
            fair, open and transparent manner, eliminating the concept of a hierarchal
            governance structure and replacing it with a system which places the power in
            the hands of all members in a fair, open way.
          </p>
          <a href="https://www.investopedia.com/tech/what-dao/">
          <button className="btn-learn-more">Learn More About DOA&apos;s here</button>
          </a>
        </div>
        <div className="col-lg-4 d-lg-flex d-none">
          <img src={images.daostructure} alt="daoImage" />
        </div>
      </div>
    </div>
  );
};

export default DAOInfo;
