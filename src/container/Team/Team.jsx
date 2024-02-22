import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { Headings } from '../../components';
import { data } from '../../constants';
import './Team.css';

const Team = () => {
  return (
    <div className="section-padding">
      <Headings h3 title="Core Members" text="Meet the Core Contributors Driving Innovation at CryptoSoc DAO" />

      <div className="row">
        {data.Team.map(({ name, position, info, foto, linkedin }, index) => (
          <div className="col-lg-4 col-md-6 col-12" key={index}> {/* Added key prop */}
            <div className="card-team">
              <div className="card-team-header">
                <img src={foto} alt={name} />
                <p>
                  <span>{name}</span>
                  {position}
                </p>
                <a href={linkedin} alt={`Linkedin + ${name}`}><BsLinkedin /></a>
              </div>
              <p>{info}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="d-flex mt-2 justify-content-md-end justify-content-center">
        <button className="btn-positivus">Interested in being a core member?</button>
      </div>
    </div>
  );
};

export default Team;
