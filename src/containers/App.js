import React, { useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import{setSearchField,requestRobots} from '../actions'


function App() {

    useEffect(() => {
        onRequestRobots()
    },[]) 

    const dispatch = useDispatch() 

    const { searchField } = useSelector((state) => state.searchRobots)

    const { robots, isPending } = useSelector((state) => state.requestRobots)

    const onSearchChange = (event) => {
        dispatch(setSearchField(event.target.value))
      }

      const onRequestRobots = () => {
        dispatch(requestRobots())
      }

        const filteredRobot = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        });
        return isPending ?
        <h1>Loading...</h1> :
            (
            <div className="tc">
                <h1 className="f1">RoboFriends</h1>
                <SearchBox searchChange={onSearchChange} />
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobot} />
                    </ErrorBoundry>
                </Scroll>
            </div>
                );
    }

export default App;