import React from 'react';
import {Circles, Audio, BallTriangle, Puff} from 'react-loader-spinner';

export const Loading = () => (
  <div className="flex justify-center items-center ">
    <Puff color="#00BFFF" height={500} width={80}/>
  </div>
);