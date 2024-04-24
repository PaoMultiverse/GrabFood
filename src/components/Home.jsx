import React from "react";
import PromoInWhere from "./PromoInWhere";
import BackgroundHeader from "./BackgroundHeader";
import Category from "./Category";
import PopularQuestions from "./PopularQuestions";
import CarourelPromo from "./CarourelPromo";
function Home(){
    return(
        <>
            <div>
                <BackgroundHeader/>
                <PromoInWhere/>
                <CarourelPromo/>
                <Category/>
                <PopularQuestions/>
            </div>
            
        </>
    )
}

export default Home;