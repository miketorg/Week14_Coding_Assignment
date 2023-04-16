import React, {Component} from 'react'
import Movie from '../components/Movie.js'
import ReviewForm from './ReviewForm.js'
import styles from '../styles/MoveList.module.css'


export default class MovieList extends Component {
    constructor () {
        super()
        

        this.movies = [
                {
                  id: 1,
                  img: 'https://media.comicbook.com/2017/10/iron-man-movie-poster-marvel-cinematic-universe-1038878.jpg',
                  title: 'Iron Man',
                  year: 2008,
                  info: 'A billionaire genius inventor, Tony Stark (Robert Downey Jr.), is conducting weapons tests overseas, but terrorists kidnap him to force him to build a devastating weapon. Instead, he builds an armored suit and upends his captors. Returning to America, Stark refines the suit and uses it to combat crime and terrorism.',
                  reviews: [],
                },
          
                {
                  id: 2,
                  img: 'https://flxt.tmsimg.com/assets/p176337_p_v8_am.jpg',
                  title: 'The Incredible Hulk',
                  year: 2008,
                  info: 'Scientist Bruce Banner (Edward Norton) desperately seeks a cure for the gamma radiation that contaminated his cells and turned him into The Hulk. Banner soon comes face-to-face with a new threat: a supremely powerful enemy known as The Abomination (Tim Roth).',
                  reviews: [],
                },
          
                {
                  id: 3,
                  img: 'https://m.media-amazon.com/images/M/MV5BNWFlMjllMmItODk4NS00YTE1LTg1YzktMDMyYmQzNzc5NzdlXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg',
                  title: 'Iron Man 2',
                  year: 2010,
                  info: 'With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands.',
                  reviews: [],
                },
          
                {
                  id: 4,
                  img: 'https://m.media-amazon.com/images/M/MV5BOGE4NzU1YTAtNzA3Mi00ZTA2LTg2YmYtMDJmMThiMjlkYjg2XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_.jpg',
                  title: 'Thor',
                  year: 2011,
                  info: "As the son of Odin (Anthony Hopkins), king of the Norse gods, Thor (Chris Hemsworth) will soon inherit the throne of Asgard from his aging father. However, on the day that he is to be crowned, Thor reacts with brutality when the gods' enemies, the Frost Giants, enter the palace in violation of their treaty. As punishment, Odin banishes Thor to Earth.",
                  reviews: [],
                },
          
                {
                  id: 5,
                  img: 'https://m.media-amazon.com/images/I/71W0PHrQpEL._AC_SL1007_.jpg',
                  title: 'Captain America',
                  year: 2011,
                  info: "It is 1941 and the world is in the throes of war. Steve Rogers (Chris Evans) wants to do his part and join America's armed forces, but the military rejects him because of his small stature. Finally, Steve gets his chance when he is accepted into an experimental program that turns him into a supersoldier called Captain America. Joining forces with Bucky Barnes (Sebastian Stan) and Peggy Carter (Hayley Atwell), Captain America leads the fight against the Nazi-backed HYDRA organization.",
                  reviews: [],
                },
            
        ]
    }
    
    render() {
        return (
            <div className={styles.movieListWrapper}>
                {this.movies.map((movie, index) => (
                    <div key={index}>
                        <Movie
                          id={movie.id}
                          img={movie.img}
                          title={movie.title}
                          year={movie.year}
                          info={movie.info}
                        /> 
                      <ReviewForm movie={movie.reviews} />
                      {/* <ReviewList movie={movie.reviews} />    */}
                    </div>
                ))} 
            </div> 
         )
    }
}