import React, {useState} from 'react'
import styles from '../../styles/CollapsiblePanel.module.css'

const CollapsiblePanel = (props:any) => {
    const [toggleOpen, setToggleOpen] = useState(false);

    const togglePanel = () => setToggleOpen(!toggleOpen);

    const openStyle = {
        height: '280px',
        transition: 'height 2s',
        overflow: 'hidden'
    }
    const closedStyle = {
        height: '0px',
        transition: 'height 2s',
        overflow: 'hidden'
    }

    return (
        <div>
            <button type="button" className={styles.itemButton} onClick={togglePanel} key={props.id}>{props.name}</button>
            <div style={toggleOpen? openStyle: closedStyle}>
            {toggleOpen &&
                <div className={styles.panel} style={{backgroundImage: `url("${props.imagePath}")`}}>
                    <div className={styles.vAlignPane}>
                        <div className={styles.hAlignPane}>
                            <div className={styles.innerPane}>
                                
                                {
                                    props.entryType==='education' && <div>
                                    <p>{props.title}</p>
                                    <p>{props.institution}</p></div>              
                                }
                                {
                                    props.entryType==='job' &&
                                    <div><p>{props.title}</p>
                                    </div>
                                }
                                <p>{props.location}</p>
                                <p>{props.startDate} - {props.endDate}</p>
                                <p>{props.description}</p>       
                                <ul className={styles.hList}>
                                    {props.skills.map((skill:string, index:number) =>(
                                        <li key={index} className={styles.skillItem}><button className={styles.skillItemButton}>{skill}</button></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            }
            </div>
            <hr className={styles.endLine}/>
        </div>
    )
}
export default CollapsiblePanel;