import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import {Card} from 'react-bootstrap';
import Carousel from 'react-elastic-carousel';
import axios from 'axios';

function TopPlaylists(){
    const [topTwentyPlaylists, setTopTwentyPlaylists] = useState([]);

    const getTopPlaylist = async () => {
        try{
            const playlists = await axios.get('/api/top_playlist');
            setTopTwentyPlaylists(playlists.data); 
        }catch(e){
            console.error(e.message);
        }
        
    } 
    useEffect(()=>{
        getTopPlaylist()
      },[])

      const breakPoints=[
        {width: 1 ,itemsToShow: 1},
        {width: 500 ,itemsToShow: 3},
        {width: 768 ,itemsToShow: 5},
        {width: 1200 ,itemsToShow: 7},
        {width: 1500 ,itemsToShow: 9}
      ]

    return(
        <>
            <h2>Top Playlists</h2>
            <div className="top">
            <Carousel breakPoints={breakPoints}>
                {
                    topTwentyPlaylists.map((value,index)=>{
                        return(
                            <Card style={{ width: '12rem', height:'12rem',margin:'5px',textAlign: 'center', padding:'5px' }}>
                                <Link to={`/playlist/${value.id}`}><Card.Img variant="top" src={value.cover_img} height="100px" width="180px" /></Link>
                                <Card.Title >{value.name}</Card.Title>
                                <Card.Text>{value.created_at.slice(0,10)} </Card.Text>
                            </Card>
                        )
                    })
                }
            </Carousel>
            </div>
        </>
    )
}
export default TopPlaylists;