import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
import uuidv4 from "uuid";
import { config } from "react-spring";
import "./style.scss"

let slides = [
  {
    key: uuidv4(),
    content: <img src={process.env.PUBLIC_URL+"/assets/images/clicky.png"} alt="1" />,
    title:"Clicky Game",
    summary: "This is a game where you have to try not to click the same picture twice in the same game while making it through every picture. They do get shuffled as you click to make it have a challange.",
    linktoRepo:"https://github.com/gagedorl/clicky",
    linktoDeployed:"https://gagedorl.github.io/clicky"
  },
  {
    key: uuidv4(),
    content: <img src={process.env.PUBLIC_URL+"/assets/images/chemconnect.png"} alt="2" />,
    title:"Chem Connect",
    summary: "Chem Connect was a project I did or my chemistry class. I had to have a vaguely chemistry themed social media and this was the result",
    linktoRepo:"https://github.com/gagedorl/chemconnnect",
    linktoDeployed:"https://chemconnect.herokuapp.com"
  },
  {
    key: uuidv4(),
    content: <img src={process.env.PUBLIC_URL+"/assets/images/burger.png"} alt="3" />,
    title:"Burger-Vore",
    summary: "In \"Burger-Vore\" you can add burgers and click a button to say you have devoured them. The challenge of this was that it was made with handlebars which can be interesting to work with.",
    linktoRepo:"https://github.com/gagedorl/chemconnnect",
    linktoDeployed:"https://chemconnect.herokuapp.com"
  },
  {
    key: uuidv4(),
    content: <img src={process.env.PUBLIC_URL+"/assets/images/friend_finder.png"} alt="4" />,
    title:"Friend Finder",
    summary: "In friend finder, you fill out a survey and it matches you with whoever had the closest answers to you in order to find out who you rbest friend would be.",
    linktoRepo:"https://github.com/gagedorl/friendfinder",
    linktoDeployed:"https://gages-friendfinder.herokuapp.com/"
  },
  {
    key: uuidv4(),
    content: <img src={process.env.PUBLIC_URL+"/assets/images/fudge-it-budget.png"} alt="5" />,
    title:"Fudge-it Budget",
    summary: "Fudge it Budget was the first  project of the class. It was a very basic Budgeting tool for people who need to learn to budget their money.",
    linktoRepo:"https://github.com/gagedorl/fudge-it-budget",
    linktoDeployed:"https://gagedorl.github.io/project1"
  },
  {
    key: uuidv4(),
    content: <img src={process.env.PUBLIC_URL+"/assets/images/giphything.png"} alt="6" />,
    title:"Giphy Thing",
    summary:"For \"Giphy thing\" you are able to  click a button to show giphy gifs of whatever you click on and you can even add your own buttons.",
    linktoRepo:"https://github.com/gagedorl/giphything",
    linktoDeployed:"https://gagedorl.github.io/giphything"
  },
  {
    key: uuidv4(),
    content: <img src={process.env.PUBLIC_URL+"/assets/images/Hangman-Again.png"} alt="7" />,
    title:"Hangman (Again)",
    summary:"This is a node command line version of hangman. You run it in the console and try to guess the word that it has. All the words are technologies that were used in the project.",
    linktoRepo:"https://github.com/gagedorl/hangman-again"
  },
  {
    key: uuidv4(),
    content: <img src={process.env.PUBLIC_URL+"/assets/images/liri.png"} alt="8" />,
    title:"LIRI",
    summary:"Liri was a project meant to allow the user to try 1 of 4 arguments(movie this, concert this, spotify this song, do what it says) and would do something based on what the argument was.",
    linktoRepo:"https://github.com/GageDorl/LIRI"
  },
  {
      key:uuidv4(),
      content: <img src={process.env.PUBLIC_URL+"/assets/images/RPS.png"} alt="9"/>,
      title:"RPS Multiplayer",
      summary:"This is a very simple (and buggy) \"multiplayer\" version of rock paper scissors. There are bugs with it bug it tells you when its player one's turn and they go, and then when it's player two's turn and they go and then it says who won.",
      linktoRepo:"https://github.com/gagedorl/RPS-Multiplayer",
      linktoDeployed:"https://gagedorl.github.io/RPS-Multiplayer"
  },
  {
    key:uuidv4(),
    content: <img src={process.env.PUBLIC_URL+"/assets/images/trivia.png"} alt="10"/>,
    title:"Trivia Games",
    summary:"This Trivia Game is a very short quiz of true but relatively surprising trivia questions to show off delayed functions.",
    linktoRepo:"https://github.com/GageDorl/triviagame",
    linktoDeployed:"https://gagedorl.github.io/triviaGame"
  },
  {
    key:uuidv4(),
    content: <img src={process.env.PUBLIC_URL+"/assets/images/unit-4.png"} alt="11"/>,
    title:"Unit-4",
    summary:"This was a very simple and kind of confusing rpg game. Choose a character and try to kill the others.",
    linktoRepo:"https://github.com/GageDorl/unit-4-Game",
    linktoDeployed:"https://gagedorl.github.io/unit-4-Game"
  },
  {
    key:uuidv4(),
    content: <img src={process.env.PUBLIC_URL+"/assets/images/word_guess.png"} alt="12"/>,
    title:"Word Guess Game",
    summary:"Word Guess Game is basically just hangman, I happened to theme it towards minecraft because I was playing a lot of minecraft around then.",
    linktoRepo:"https://github.com/GageDorl/Word-Guess-Game",
    linktoDeployed:"https://gagedorl.github.io/Word-Guess-Game"
  },
 {
    key:uuidv4(),
    content:<img src={process.env.PUBLIC_URL+"/assets/images/highschool.png"} alt="13" />,
    title:"My Highschool Website",
    summary:"My very first website (techincally like my third because my first two got blokced, but they were just early versions of this one). This is what started me wanting to make websites for a career. I used frames to make it because that is what we were taught in my web master class, now I know how that is seen as old bad practise but it was pretty useful for what I was doing.",
    linktoDeployed:"http://gagegames.dorlandoelectrical.com/gagegames"
 }
];
let orThing = " |  ";
export default class Example extends Component {
  state = {
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: true,
    config: config.gentle
  };
  componentDidMount=()=>{
      this.setState({goToSlide:Math.floor(Math.random()*slides.length)});
  }

  changeSlideUp = ()=>{
      this.setState({
          goToSlide:this.state.goToSlide===slides.length-1?0:this.state.goToSlide+1
      })
  }
  changeSlideDown= ()=>{
    this.setState({
        goToSlide:this.state.goToSlide? this.state.goToSlide-1:slides.length-1
    })
}

  render() {
    return (
        <div>
        <div onClick={()=>this.changeSlideDown()} className="arrow arrow--left lefty"><span></span></div>
        <div onClick={()=>this.changeSlideUp()} className="arrow arrow--right righty"><span></span></div>
      <div style={{ width: "80%",height:window.innerHeight>window.innerWidth?"200px":"500px", margin: "0 auto" }} className="behind">
        <Carousel
          slides={slides}
          goToSlide={this.state.goToSlide}
        />
        
       
      </div>
      <div className="summary" style={{margin:"75px auto"}}>
            <div style={{maxWidth:"80%", margin:"10px auto", textAlign:"justify"}}> <h3>{slides[this.state.goToSlide].title}</h3>{slides[this.state.goToSlide].summary}<br />{(slides[this.state.goToSlide].linktoRepo?(<a href={slides[this.state.goToSlide].linktoRepo}>Link to Repo</a>):"")}{(slides[this.state.goToSlide].linktoDeployed&&slides[this.state.goToSlide].linktoRepo?orThing:"")}{(slides[this.state.goToSlide].linktoDeployed?(<a href={slides[this.state.goToSlide].linktoDeployed}>Link to Deployed</a>):"")}</div>
        </div>
      </div>
    );
  }
}
