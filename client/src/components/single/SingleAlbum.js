import { useParams } from "react-router-dom";
import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import { FileMusic } from "react-bootstrap-icons";
import network from '../../service/network';
import { changeSideSongs, changeFromId } from '../../redux/Actions';
import { useDispatch } from "react-redux";
import {albumPageShowed} from '../../service/AnalyticsManager';

function SingleAlbum() {
  const [albumDetails, setAlbumDetails] = useState([]);
  const dispatch = useDispatch();
  let { id } = useParams();

  const getAlbumDetails = async () => {
    try {
      const album = await network.get(`/api/albums/${id}/songs`);
      setAlbumDetails(album.data);
      dispatch(changeSideSongs(album.data))
      dispatch(changeFromId(id))
    } catch (e) {
      console.error(e.message);
    }
  };

  useEffect(() => {
    getAlbumDetails();
  }, []);

  useEffect(()=>{
    if(albumDetails[0]){
        albumPageShowed(albumDetails[0].name)
    }
},[albumDetails])

  return (
      <>
      {albumDetails[0]&&
    <div className="single">
      <h1>{albumDetails[0].name}</h1>
      <img src={albumDetails[0].coverImg} alt="album" />
      <div>{albumDetails[0].Artist.artistName}</div>
      <div>{albumDetails[0].createdAt.slice(0, 10)}</div>
      <h2>Songs</h2>
      <ListGroup style={{ width: "150vh" }} className="my-2">
        {albumDetails[0].Songs.map((value, index) => {
          return (
            <Link key={index} to={`/songs/${value.id}?albums=${value.albumId}`}>
              <ListGroup.Item>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>
                    <FileMusic style={{ color: "white" }} />
                  </div>
                  <div> {value.title}</div>
                  <div>{value.length}</div>
                </div>
              </ListGroup.Item>
            </Link>
          );
        })}
      </ListGroup>
    </div>
      }
    </>
  );
}

export default SingleAlbum;
