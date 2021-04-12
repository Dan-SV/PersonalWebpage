import React from 'react'
import styles from '../../styles/CareerPage.module.css'
import CollapsiblePanel from './CollapsiblePanel'
import career from '../../data/career.json'
import education from '../../data/education.json'

export default function CareerPage() {
    return (
        <div className={styles.background} style={{backgroundImage: 'url("/img/rgbtech.jpeg")'}}>
            <div className={styles.page}>
                <h2>Work History</h2>
                <div className={styles.panelHeader}>
                {
                    career.map((jobs) =>
                    <CollapsiblePanel key={jobs.id} name={jobs.subject} imagePath={jobs.image} entryType="job"
                        startDate={jobs.startDate} endDate={jobs.endDate}
                        title={jobs.position} location={jobs.location} 
                        description={jobs.description} skills={jobs.skills}/>)
                }
                </div>
                <h2>Education</h2>
                <div className="education">
                {
                    education.map((cred) =>
                    <CollapsiblePanel key={cred.id} name={cred.credential} imagePath={cred.image} entryType="education" institution={cred.institution}
                        startDate={cred.startDate} endDate={cred.gradDate} title={cred.detail} location={cred.location} 
                        skills={cred.skills} />
                    )
                }
                </div>
                <p className={styles.contactText}>For more details, contact <a className={styles.link} href="mailto: info@dswebpro.com">info@dswebpro.com</a> for a full resume.</p>
                <br/>
            </div>
        </div>
    )
}
