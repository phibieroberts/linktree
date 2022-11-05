import React from "react";
import phoebe from "./phoebe.jpeg";
import icon from "./Icon.svg";
import slack from "./slack.svg";
import github from "./github.svg";
import "./profile.css";
import {Link} from "react-router-dom"
import Footer from "./Footer";

function Profile() {
  return (
    <div>
      <div className="share">
        <img src={icon} alt="share" id="icon" />
      </div>

      <section id="profile">
        <img src={phoebe} alt="phoebe" id="profile__img" />
        <p id="twitter">Phoebe__Roberts__</p>
        <p id="slack">Phoebe__roberts</p>
      </section>

      <section id="links_section">
        <a
          href="https://twitter.com/Phoebe_Roberts_?t=-YiCm3z_OTq1_CjMsrNTcg&s=09"
          id="btn__zuri"
          class="link"
        >
          <span id="subtext">
            Kindly check out my twitter account and follow me.
          </span>
          Twitter
        </a>
        <a href="https://training.zuri.team/" id="btn__zuri" class="link">
          <span id="subtext">Meet and connect with the Zuri family</span>
          Zuri Team
        </a>
        <a href="http://books.zuri.team/" id="books" class="link">
          <span id="subtext">
            You can find interesting tech related books here
          </span>
          Zuri Books
        </a>
        <a
          href="https://books.zuri.team/python-for-beginners?ref_id=Zoe"
          id="book__python"
          class="link"
        >
          {" "}
          <span id="subtext">
            New to Python? check out this begginer friendly python books
          </span>
          Python Books
        </a>

        <a href="https://background.zuri.team/" id="pitch" class="link">
          <span id="subtext">
            Put your coding knowledge to test by networking with other coders
          </span>
          Background Check for Coders
        </a>

        <a href="https://training.zuri.team/" id="book__design" class="link">
          <span id="subtext">Here are some amazing design books for you</span>
          Design Books
        </a>
        <Link to={"/contact"}>
        <a href="https://training.zuri.team/" id="contact" class="link">Contact
          <span id="subtext">Contact me</span>
        </a>
        </Link>
      </section>
      <div id="socials">
        <img src={slack} alt="" />
        <img src={github} alt="" />
      </div>
<Footer />
    </div>
  );
}

export default Profile;
