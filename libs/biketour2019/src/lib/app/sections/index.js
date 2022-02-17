import React from 'react';
import { LentolGarden } from '@nbkparks/lentol-garden';
import { JavaStGarden } from '@nbkparks/java-st-garden';
import { RedShedGarden } from '@nbkparks/red-shed-garden';
import { ScholesStChildrensGarden } from '@nbkparks/scholes-st-childrens-garden';
import { SunshineCommunityGarden } from '@nbkparks/sunshine-community-garden';
import { KeapFourth } from '@nbkparks/keap-fourth';
import { ElPuente } from '@nbkparks/el-puente';
import { BerryStreetGarden } from '@nbkparks/berry-street-garden';

export default () => (
  <div className="text">
    <JavaStGarden />
    <LentolGarden />
    <RedShedGarden />
    <ScholesStChildrensGarden />
    <SunshineCommunityGarden />
    <KeapFourth />
    <ElPuente />
    <BerryStreetGarden />
  </div>
);
