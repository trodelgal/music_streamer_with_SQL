import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Main from './Main';
import SingleSong from './single/SingleSong';
import SingleArtist from './single/SingleArtist';
import SinglePlaylist from './single/SinglePlaylist';
import SingleAlbum from './single/SingleAlbum';
import SimpleModal from "./Modal";
import Header from './Header';

function MyRouter() {
 return (
 <Router>
    <Header />
    <Switch>
        <Route exact path="/">
            <Main />
        ‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫ </Route>
        <Route exact path="/song/:id">
            <SingleSong />
        ‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫ </Route>
        <Route exact path="/artist/:id">
            <SingleArtist />
        ‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫ </Route>
        <Route exact path="/playlist/:id">
            <SinglePlaylist />
        ‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫ </Route>
        <Route exact path="/album/:id">
            <SingleAlbum />
        ‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫‫ </Route>
    </Switch>
    <SimpleModal/>
 </Router>
 );
}
export default MyRouter;
