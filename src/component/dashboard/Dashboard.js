import React , {useState} from 'react'
import classes from './Dashboard.module.css';
import Mountain from '../../assert/mountain.png';
import Hiker from '../../assert/hiker.png';
import Tent from '../../assert/tent.png';
import OrangeHiker from '../../assert/orangeHiker.png'
import Mountain2 from '../../assert/mountain2.png';
import Submit from '../submit/Submit'

const Dashboard = () => {
    const [ show , setShow ] = useState(false);
    const showSidebar = () => {
        setShow(prev => !prev)
        if(!show){
            document.getElementById("mySidenav").style.width = "250px";
            document.getElementById("main").style.width = "calc(100% - 250px)";;
            document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
        }else{
            document.getElementById("mySidenav").style.width = "0";
            document.getElementById("main").style.width= "100%";
            document.body.style.backgroundColor = "white";
        }

    }
    return(
        <div className={classes.container}>
            <div id="mySidenav"  className={classes.sidebar}>
                <ul>
                    <li>
                        <span>Home</span>
                    </li>
                    <li>
                        <span>About us</span>
                    </li>
                    <li>
                        <span>Supporter</span>
                    </li>
                </ul>
            </div>
            <div id="main" className={classes.content}>
                <div style={{ backgroundImage: `url(${Mountain})` , backgroundSize : "cover"}}  className={classes.mountain}>
                    <span onClick={showSidebar}>&#9776;</span>
                    <div className={classes.cardHoliday}>
                        <div className={classes.cardBody}>
                            <div className={classes.cardTitle}>
                                <h4>The Telegraph / 5 January 2017 • 9:41AM</h4>
                            </div>
                            <div className={classes.cardText}>
                                <p>15 mountain holidays</p>
                            </div>
                            <p style={{textAlign: "right" , fontWeight : "bold" }}>Going on a mountain trip</p>
                            <div className={classes.LearnMore}>
                                <p>Learn more</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.searching}>
                    <div className={classes.left}>
                        <img src={Hiker} alt="hiker"  />
                    </div>
                    <div className={classes.right}>
                        <h1>SEARCHING FOR THE WORLD'S MOST REMOTE VILLAGE</h1>
                        <p>
                            “Phu is just around that bend,” our mountain guide shouts out from 50 metres behind us, taking another swig from his flask. We knowingly raise our eyebrows in sync and continue trekking the steep incline, not hopeful the guide’s seventh guess will be lucky. We’re nine hours into day three of our search for one of the most remote places in the world, a village so isolated that the rest of Nepal wasn’t aware of its existence until the Seventies.
                        </p>
                        <div className={classes.ReadMore}>
                                <p>Read more</p>
                            </div>
                    </div>
                </div>
                <div className={classes.tent} style={{ backgroundImage: `url(${Tent})`}} >
                    <div  className={classes.tentDiv}>
                        <div className={classes.tentTitle}>
                            <h1>GREAT OUTDOOR ACTIVITIES IN COLORADO: READERS’ TIPS</h1>
                        </div>
                    </div>
                    <div className={classes.p}>
                        <p>
                            Just over eight miles one way from the Monarch Lake Trailhead, near Granby, the walk to Mirror Lake boasts abundant wildlife (moose sightings are common), miles of fishable trout stream, cold-water swimming holes (for the brave or foolhardy), and superb scenery throughout. It’s possible as a long day hike, but best enjoyed with an overnight camp at Mirror, or nearby Crater Lake. Camping Permits ($5) are available from the USDA Forest Service. A Non-resident fishing permit ($21 for 5 days) can be purchased online from Colorado Parks and Wildlife.
                        </p>
                    </div>
                    <div className={classes.LearnMoreTent}>
                        <p>Learn more</p>
                    </div>

                    <div className={classes.photographer}>
                        <p>
                            Camping near Crater Lake at the base of Lone Eagle Peak, Indian<br/> Peaks Wilderness. Photograph: Alamy
                        </p>
                    </div>
                </div>
                <div className={classes.travel}>
                    <div className={classes.travelTitle}>
                        <h1>EVERYONE LOVES TO TRAVEL</h1>
                    </div>
                    <div className={classes.groupBox}>
                        <div className={classes.box}>
                            <h2>57</h2>
                            <p>ACTIVE TOURS</p>
                        </div>
                        <div className={classes.box}>
                            <h2>1000</h2>
                            <p>HAPPY CLIENTS</p>
                        </div>
                        <div className={classes.box}>
                            <h2>57</h2>
                            <p>DESTINATIONS</p>
                        </div>
                        <div className={classes.box}>
                            <h2>12</h2>
                            <p>YEARS OF WORK</p>
                        </div>
                    </div>

                    <div className={classes.travelGrid}>
                        <div className={classes.travelLeft}>
                            <div>
                                <h1>
                                    UELI STECK: THE <br/> “SWISS MACHINE” <br/> SETS NEW CLIMBING <br/> RECORD GOAL
                                </h1>
                                <p>
                                    While any extreme sport athlete may currently  <br/> focus on summer destinations for any extreme <br/>  sport  performance, Ueli Steck, also  commonly known as<br/>  the “Swiss Machine”, a famous speed   mountain climber, <br/> is heading up  to the mountains, planning to  <br/> scale all 82 European Alps of over <br/> 4,000 metres, all to be achieved  in just 80 days.
                                </p>
                                <div className={classes.readMoree}>
                                    <p>read more</p>
                                </div>
                                
                            </div>
                        </div>

                        <div className={classes.travelRight}>
                            <div className={classes.imgTravel}>
                                <img className={classes.imgMountain} src={Mountain2} alt="mountain" />
                                <img className={classes.imgHiker} src={OrangeHiker} alt="hiker" />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <Submit />
                </div>
            </div>
        </div>
    );
}

export default Dashboard
