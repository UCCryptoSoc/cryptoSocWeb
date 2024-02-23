import React from 'react';
import { images } from '../../constants';
import './TempSponsor.css';

const TempSponsor = () => {
  return (
    <div className="section-padding">
<div className="row cta">
    <div className="col-lg-8 col-12">
<h3>Want to Sponsor Our Club?</h3>

<p className="pt-2 pb-4">
    Interested in helping power the most decentralized, crypto heavy club in New Zealand?
    Fuel our innovation by becoming a proud recognised sponsor of UC Crypto Soceity.
</p>
<a href="https://forms.gle/SXbGStxRy8hhM8BR8">
<buton className="btn-positivus">Sponsorship form </buton>
</a>
</div>
<div className="col-lg-4 d-lg-flex d-none">
<img src={images.thingshappen} alt="thingshappen" />
</div>
    </div>
    </div>
)
}

export default TempSponsor