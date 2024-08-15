import React, { useState } from 'react';

function WrapperSection() {
  const [people, setPeople] = useState(2);
  const [date, setDate] = useState('17-02-2020');
  const [time, setTime] = useState('10:00am');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to a server or perform validation)

    // Show the popup with the form data
    setShowPopup(true);
  };

  return (
    <section className="wrapper">
      <div className="group-7">
        <div className="container container-8">
          <div className="row">
            <div className="col-xs-12">
              <div className="col-data-wrapper-3" id="contact">
                <div className="main-title">Book here</div>
                <form onSubmit={handleSubmit}>
                  <div className="row row-15 auto-clear match-height-bootstrap-row">
                    <div className="col-md-4 col-xs-12">
                      <div className="how-many-people">
                        <p className="title-30">How many people?</p>
                        <div className="row-4-2 clearfix">
                          <p className="subtitle-3">
                            <input
                              type="number"
                              value={people}
                              onChange={(e) => setPeople(e.target.value)}
                              style={{ padding: '8px', background: 'transparent', border: '1px solid #ccc' }}
                            />
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-xs-12">
                      <div className="when-is-your-date">
                        <p className="title-29">When is your date?</p>
                        <div className="row-2-2 clearfix">
                          <p className="subtitle-2">
                            <input
                              type="date"
                              value={date}
                              onChange={(e) => setDate(e.target.value)}
                              style={{ padding: '8px', background: 'transparent', border: '1px solid #ccc' }}
                            />
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-xs-12">
                      <div className="time">
                        <p className="title-28">Time</p>
                        <div className="row-16 clearfix">
                          <p className="subtitle">
                            <input
                              type="text"
                              value={time}
                              onChange={(e) => setTime(e.target.value)}
                              style={{ padding: '8px', background: 'transparent', border: '1px solid #ccc' }}
                            />
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row auto-clear match-height-bootstrap-row">
                    <div className="col-md-4 col-xs-12">
                      <div className="name">
                        <p className="title-33">Name</p>
                        <div className="row-3-2 clearfix">
                          <p className="subtitle-6">
                            <input
                              type="text"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              style={{ padding: '8px', background: 'transparent', border: '1px solid #ccc' }}
                            />
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-xs-12">
                      <div className="email">
                        <p className="title-32">Email</p>
                        <div className="rectangle-2-holder">
                          <div className="subtitle-5">
                            <input
                              type="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              style={{ padding: '8px', background: 'transparent', border: '1px solid #ccc' }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-xs-12">
                      <div className="phone">
                        <p className="title-31">Phone</p>
                        <div className="rectangle-holder-4">
                          <div className="subtitle-4">
                            <input
                              type="tel"
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                              style={{ padding: '8px', background: 'transparent', border: '1px solid #ccc' }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="submit">
                    <button type="submit">SUBMIT</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showPopup && (
  <div className="popup">
    <div className="popup-content">
      <h2>Form Data:</h2>
      <p>People: {people}</p>
      <p>Date: {date}</p>
      <p>Time: {time}</p>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <button onClick={() => setShowPopup(false)}>Close</button>
    </div>
  </div>
)}

    </section>
  );
}

export default WrapperSection;
