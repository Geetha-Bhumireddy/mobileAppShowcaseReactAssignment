import React from 'react';
import Header from '../Header';
import Showcase from '../Showcase';
import EngagingSection from '../EngagingSection';
import BusinessAppSection from '../BusinessAppSection';
import ProfileMakeSection from '../ProfileMakeSection';
import DesignPartnerSection from '../DesignPartnerSection';
import AppScreenshotSection from '../AppScreenshotSection';
import ReviewsSection from '../ReviewsSection';

const Home = () => {
    return (
        <div>
          <Header />
          <Showcase />
          <EngagingSection />
          <BusinessAppSection />
          <ProfileMakeSection />
          <DesignPartnerSection />
          <AppScreenshotSection />
          <ReviewsSection />
        </div>
      );
}

export default Home