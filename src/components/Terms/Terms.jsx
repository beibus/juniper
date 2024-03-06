import React from 'react'
import "./Terms.css"
import lock from "../../assets/lock.png"

const Terms = () => {
  return (
    <div className="terms">
      <div className="terms-scrollable-container">
        <img className="lock" src={lock} alt="lock" />
        <h3 className="text-headings">Terms Of Service</h3>
        <p className="text-paragraph">
        Welcome to Juniper, the app that lets you check the weather with innovative software and an easy to use interface. 
        By using our app, you agree to these terms of service. Please read them carefully.
        </p>
        <h3 className="text-headings">License</h3>
        <p className="text-paragraph">
        We grant you a limited, non-exclusive, non-transferable, and revocable license to use our app for your personal, non-commercial use only. 
        You may not copy, modify, distribute, sell, or lease any part of our app or its content, nor may you reverse engineer or attempt to extract the source code of our app, unless you have our written permission.
        </p>
        <h3 className="text-headings">Privacy</h3>
        <p className="text-paragraph">We respect your privacy and are committed to protecting it. Our privacy policy explains how we collect, use, and share your personal information when you use our app. By using our app, you consent to our privacy policy.</p>
        <h3 className="text-headings">Content</h3>
        <p className="text-paragraph">You are responsible for any content that you upload, post, or share on or through our app, such as photos, videos, comments, or ratings. You must have the right to use such content and not violate any laws or rights of others. You grant us a worldwide, royalty-free, and non-exclusive license to use, store, display, and distribute your content on or through our app for the purposes of providing and improving our services.
        </p>
        <h3 className="text-headings">Terms Of Service</h3>
        <p className="text-paragraph">
        Welcome to Juniper, the app that lets you check the weather with innovative software and an easy to use interface. By using our app, you agree to these terms of service. Please read them carefully.
        </p>
        <h3 className="text-headings">License</h3>
        <p className="text-paragraph">
        We grant you a limited, non-exclusive, non-transferable, and revocable license to use our app for your personal, non-commercial use only. You may not copy, modify, distribute, sell, or lease any part of our app or its content, nor may you reverse engineer or attempt to extract the source code of our app, unless you have our written permission.
        </p>
        <h3 className="text-headings">Privacy</h3>
        <p className="text-paragraph">We respect your privacy and are committed to protecting it. Our privacy policy explains how we collect, use, and share your personal information when you use our app. By using our app, you consent to our privacy policy.</p>
        <h3 className="text-headings">Content</h3>
        <p className="text-paragraph">You are responsible for any content that you upload, post, or share on or through our app, such as photos, videos, comments, or ratings. You must have the right to use such content and not violate any laws or rights of others. You grant us a worldwide, royalty-free, and non-exclusive license to use, store, display, and distribute your content on or through our app for the purposes of providing and improving our services.
        </p>
      </div>

    </div>
  )
}

export default Terms