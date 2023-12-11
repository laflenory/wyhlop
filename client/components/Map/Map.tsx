'use client';

import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

const YandexMap = () => {
  return (
    <YMaps>
      <Map
        className='h-full w-full'
        defaultOptions={{
          copyrightUaVisible: false,
          copyrightLogoVisible: false,
          copyrightProvidersVisible: false,
        }}
        defaultState={{ center: [53.656997, 23.802965], zoom: 16 }}
      >
        <Placemark defaultGeometry={[53.656997, 23.802965]} />
      </Map>
    </YMaps>
  );
};

export default YandexMap;
