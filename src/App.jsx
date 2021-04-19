import React from 'react';
import Header from './Components/Header';
import Section from './Components/Section';
import data from '../socialMediaData.json'
import SocialMedia from './Components/SocialMedia';
import OverviewItem from './Components/OverviewItem';

const App = () => {
  console.log(data)
  return (
    <>
      <Header/>
      <main>
        <Section>
          {data.socialmedias.map(socialMedia =>(
            <SocialMedia {...socialMedia} key={socialMedia.id}/>
          ))}
        </Section>
        <Section>
          <h2 className="TodaysOverview__title">Overview - Today</h2>
          {data.todaysOverview.map(item =>(
            <OverviewItem {...item} key={item.id}/>
          ))}
        </Section>
      </main>
    </>
  )
}


export default App;
