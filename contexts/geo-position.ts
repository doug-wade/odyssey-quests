import { createContext } from '@tybalt/core';
import { reactive } from '@tybalt/reactive';

import { store } from './store';

export const geoPosition = createContext('geoPosition', {
    getCurrentPosition() {
        const position = reactive(null);
        const successCallback = (response: GeolocationPosition) => {
            position.value = response;
        };
        const errorCallback = (error: GeolocationPositionError) => {
            store.addMessage({ 
                message: `Attempt to get current position failed with error: ${error.message}.`,
                level: 'error',
            });
            position.value = null;
        };
              
        navigator.geolocation.getCurrentPosition(successCallback, errorCallback); 

        return position;
    },
    watchPosition() {
        const position = reactive(null);
        const successCallback = (response: GeolocationPosition) => {
            position.value = response;
        };

        const errorCallback = (error: GeolocationPositionError) => {
            store.addMessage({ 
                message: `Attempt to watch position failed with error: ${error.message}.`,
                level: 'error',
            });
            position.value = null;
        };
              
        navigator.geolocation.watchPosition(successCallback, errorCallback);

        return position;
    }
});