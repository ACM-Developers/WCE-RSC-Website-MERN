import React from 'react'

export const SocialLinks = () => {
  return (
    <div className="col-md-3">
      <div className="footer-widget social-widget">
        <h4>Follow Us<span className="head-line"></span></h4>
        <ul className="social-icons">
          <li>
            <a className="facebook" href="https://www.facebook.com/wceacm" target="_blank"><i className="fa fa-facebook"></i></a>
          </li>
          <li>
            <a className="twitter" href="https://twitter.com/wce_acm" target="_blank"><i className="fa fa-twitter"></i></a>
          </li>
          
          <li>
            <a className="linkdin" href="https://www.linkedin.com/company/wce-acm-student-chapter/mycompany/" target="_blank"><i className="fa fa-linkedin"></i></a>
          </li>
          <li>
            <a className="instgram" href="https://www.instagram.com/wce_acm/" target="_blank"><i className="fa fa-instagram"></i></a>
          </li>
        </ul>
      </div>
    </div>
  )
}
