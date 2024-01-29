// import react
import React, {useState} from "react"

// import for navigating pages
import { useNavigate } from 'react-router-dom';

// import css file
import './CourseEntry.css';

// import image
import myImage from './images/Anatomy_Course_Image.jpg'

// define the course entry component
export default function CourseEntry() {

    // define state to manage course code
    const [courseCode, setCourseCode] = useState(""); 
    // define navigation 
    const navigate = useNavigate();

    // update the course code state when input changes
    const handleInputChange = (event) => {
        setCourseCode(event.target.value);
      };

    // submit the course code
    const handleSubmit = (event) => {
        event.preventDefault();
        if(courseCode.toUpperCase() === "BIO201")
        {
            console.log("Course code is correct", courseCode)
            navigate('/MainMenu');
        }
        else
        {
            window.alert("Incorrect course code.")
        }
      };

    // render the CourseEntry component to the screen
    return (
      <div> 
      <div className="Box"> 
        <div>
          <img src={myImage} alt="" className="responsive" />
        </div>
        <div className="course-entry">
          <form onSubmit={handleSubmit}>
            <label>
              <input className="code-input"
                type="text"
                value={courseCode}
                onChange={handleInputChange}
                placeholder="Please enter course code"
              />
            </label>
            <button className='login-button' type="submit" onClick ={handleSubmit}>Login</button>
          </form>
        </div>
      </div>
    </div>
      );
}
