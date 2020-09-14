import React, { useEffect, useState } from "react";

function TopSongs({topTwentySongs}){

    return(
        <>
            <h2>The top 20 most played songs</h2>
            <ol >
                {
                    topTwentySongs.map((value,index)=>{
                        return(
                            <li>
                                <div>
                                    <b>Name:</b> {value.song_name}<br/>  <b>Number of plays:</b> {value.number_of_plays}
                                </div>
                            </li>
                        )
                    })
                }
            </ol>
        </>
    )
}
export default TopSongs;