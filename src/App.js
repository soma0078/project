import React,{ useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import Layout from './layouts/Layout';
import NewRoomModal from './modals/NewRoomModal';
import EnterRoomModal from './modals/EnterRoomModal';
import ManualModal from './modals/ManualModal';
import RankingModal from './modals/RankingModal';
import './App.css';
//import {Routes, Route, Link} from "react-router-dom";
//import Home from "./pages/Home";


function App() {
  const [NewRoomModalOn, setNewRoomModalOn] = useState(false);
  const [EnterRoomModalOn, setEnterRoomModalOn] = useState(false);
  const [ManualModalOn, setManualModalOn] = useState(false);
  const [RankingModalOn, setRankingModalOn] = useState(false);
  return (
    <>
      <NewRoomModal show={NewRoomModalOn} onHide={() => setNewRoomModalOn(false)} />
      <EnterRoomModal show={EnterRoomModalOn} onHide={() => setEnterRoomModalOn(false)} />
      <ManualModal show={ManualModalOn} onHide={() => setManualModalOn(false)} />
      <RankingModal show={RankingModalOn} onHide={() => setRankingModalOn(false)} />
      <div className="App">
        <Layout>
          <Container>
            <div className="mainWrap">
              <h2>개굴작</h2>
              <ul className="mainList">
                <li><Button variant="primary" onClick={() => setNewRoomModalOn(true)}>방 생성</Button></li>
                <li><Button variant="info" onClick={() => setEnterRoomModalOn(true)}>방 참가</Button></li>
                <li><Button variant="danger" onClick={() => setManualModalOn(true)}>게임 설명</Button></li>
                <li><Button variant="warning" onClick={() => setRankingModalOn(true)}>랭킹보기</Button></li>
              </ul>
            </div>
          </Container>
        </Layout>
      </div>
    </>
  )
}

export default App;
