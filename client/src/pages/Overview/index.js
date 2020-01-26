import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import "./style.css";

function NoMatch() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
           <h1>About Gage</h1><img src={"../images/profilepic.jpg"} alt="Just a shot of myself" id="ProfPic"/>
           <p>My name is Gage D'Orlando and I am 18 years old, and looking to get a job in Web Development.</p>
           <p>I have been making website since around mid to late 2018. I started off taking a Web Master class in my highschool and they happened to really crack down on blocking the gaming websites at the same time.
               I was pretty frustrated with this because I usually finished my work pretty fast and wanted to have something fun to do while I waited for whatever was coming next. Because of this I took it upon myself to make a new good gaming site for highschools.
           </p>
           <p>I ended up really enjoying making websites and the fact that it was one of the first times I really felt a challenge with work that I was doing. Whenever I finished any work in class I would get right back to adding some new feature to my site. It wasn't the easiest thing to code because I had to do it all on a school chromebook so I didn't have any software but essentially a glossy version of notepad. Never the less I kept at it and even though I havent worked on that site much since I graduated, it now has almost 1000 users a day on weekdays.
           </p>
           <p>Anyways, because I enjoyed coding that site so much I decided to look into making a job out of it. I realised I couldn't learn everything I wanted to on my own so I found the Coding Bootcamp at University of Richmond. It was a little expensive so i didn't exactly expect to be able to do it but my grandmother said she thought it was really worth it and funded it for me.</p>
           <p>Now I've learned many different technologies such as</p>
           <ul>
               <li>HTML (Of Course)</li>
               <li>CSS (Again, Duh)</li>
               <li>Javascript</li>
               <li>jQuery</li>
               <li>Node JS</li>
               <li>mySQL</li>
               <li>MondoDB</li>
               <li>Java (From AP Comp Sci Class)</li>
               <li>React JS (Which this is)</li>
           </ul>
           <p>And some other thing likes different APIs I've worked with and technologies I forgot to mention</p>
           
        </Col>  
      </Row>
    </Container>
  );
}

export default NoMatch;
