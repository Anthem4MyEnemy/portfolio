import React from 'react'
import Award from "../../img/award.png"
import "./about.css";
const About = () => {
    return (
        <div className="about">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                         alt="" 
                         className="a-img" />
                </div>
            </div>

            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque iure dolore provident assumenda earum atque voluptatem, ipsam fuga eum! Mollitia consequuntur reprehenderit soluta quasi minus et ratione quis dolore beatae?
                </p>
                <p className="a-desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, rem totam non facilis sint repudiandae, dignissimos ipsa laboriosam facere, nihil molestiae minima rerum aperiam ab voluptates numquam veniam iusto magni!
                </p>
                <div className="a-award">
                    <img src={Award} alt="Image of an award" className="a-award-img" />
                    <div className="a-award-texts">
                        <h4 className="a-award-title">This is the title of the award</h4>
                        <p className="a-award-desc">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id laboriosam possimus sapiente cum, eum aspernatur alias dignissimos quam nam, voluptas nesciunt laudantium, dolorem consequatur excepturi. Distinctio voluptas quod fuga in.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About
