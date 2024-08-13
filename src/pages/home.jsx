import React from 'react';
import {
    AboutLayout,
    DonationLayout,
    EventLayout,
    FeaturesLayout,
    FooterLayout,
    HeaderLayout,
    HeroLayout,
    PartnerLayout,
    ServiceLayout,

} from '../layouts';

const Home = () => {




    return (
        <>
            <HeaderLayout />

            <main>
                <article>

                    <HeroLayout />

                    <FeaturesLayout />

                    <AboutLayout />

                    <ServiceLayout />

                    <DonationLayout />

                    <PartnerLayout />

                    <EventLayout />

                </article>
            </main>

            <FooterLayout />
        </>
    );
}

export default Home;
