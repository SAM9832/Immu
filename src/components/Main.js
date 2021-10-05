import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
            PGPM - IBS Business School, Kolkata IBS 2018 6.71* B. Com
            (Accountancy & Finance) - St. Xavier’s College, Kolkata 2015 51%
            Class XII - National High School, Kolkata WBBHSE 2011 85% Class X -
            St. Anthony’s High School WBBSE 2009 69%
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
            1. Paapri Cloud Technologies - Oracle NetSuite ERP Sales Consultant
            - Cold Calling - B2B sales - Client Acquisition 1. OZEOL.COM (AE
            OVERSEAS) - Leather Shoes, Bags, Belts purchasing from Indian
            Manufacturers. - Rigorous negotiation - Bulk Purchasing - Export to
            France so that the products can be sold at 308 discounted stores. 2.
            COFFEE DAY BEVERAGES (Coffee Day Global Ltd.) - Business Development
            - Base Management - Retention of existing clients - Distributor
            Management
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            I have been in sports since my childhood. Played basketball and
            fared pretty well too. I have done my graduation from St. Xavier’s
            College in Accountancy and Finance and my PGPM from Icfai Business
            School in Marketing and Operations Research. Basically, I am a
            go-getter with a zeal to learn. I am fairly good at professional
            communication. Currently a snooker enthusiast and have dreams of
            playing at a professional level.
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Email</label>
              <input
                type="text"
                name="name"
                disabled="disabled"
                value="mdiansari10@gmail.com"
                id="name"
              />
            </div>
            <div className="field half">
              <label htmlFor="email">Phone No</label>
              <input
                type="text"
                name="email"
                value="+919903557277"
                disabled="disabled"
                id="email"
              />
            </div>

            <div className="field">
              <label htmlFor="message">Address</label>
              <textarea
                disabled="disabled"
                name="message"
                id="message"
                rows="4"
              >
                34, Collin Street Kolkata - 700016
              </textarea>
            </div>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://www.linkedin.com/in/md-imran-ansari-7a798113b/"
                className="icon fa-linkedin"
              >
                <span className="label">Linked In</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
