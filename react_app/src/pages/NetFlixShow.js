import Row from "../components/Row/Row"; 
import Banner from "../components/Banner/Banner";
import api from "../api/api";
import Nav from "../components/Nav/Nav";
import axios from 'axios';
import React, { useState, useEffect } from 'react';

const getRecommendedMovies = async () => {
  try {
        const response = await axios.get('http://localhost:8000/usermovies/', { withCredentials: true });
        console.log(response);
        return response;
        // navigate('/homepage'); 
    if (response.ok) {
      console.log('Preferences submitted successfully!');
    } else {
      console.error('Failed to submit preferences');
    }
  } catch (error) {
    console.error('Error submitting preferences:', error);
  }
};

const NetFlixShow = () => {
  // State to store the recommended movies
  const [recommendedMovies, setRecommendedMovies] = useState([]);

  // Fetch recommended movies right after the component mounts
  useEffect(() => {
    const fetchRecommendedMovies = async () => {
      try {
        const response = await getRecommendedMovies();
        // Assuming the response data is the array of recommended movies
        // Adjust the below line based on the actual structure of your response
        setRecommendedMovies(response.data);
      } catch (error) {
        console.error('Error fetching recommended movies:', error);
      }
    };

    fetchRecommendedMovies();
  }, []); // The empty array ensures this effect runs only once after the initial render

  return (
    <div>
      <Nav />
      <Banner />
      
      {/* Conditionally render the Row for recommended movies if we have any */}
      {recommendedMovies.length > 0 && (
        <Row title="Recommended Movies" fetchUrl={recommendedMovies} isLargeRow />
      )}

      <Row title="Movies that you may also enjoy" fetchUrl={api.fetchNetflixOriginals} isLargeRow />
      <Row title="Trending Now" fetchUrl={api.fetchTrending} />
      <Row title="Top Rated" fetchUrl={api.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={api.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={api.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={api.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={api.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={api.fetchDocumentaries} />
    </div>
  );
};

export default NetFlixShow;
  