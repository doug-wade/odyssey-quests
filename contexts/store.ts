import { createContext } from '@tybalt/core';
import { reactive } from '@tybalt/reactive';
import { Exome } from 'exome';

import { subscribe } from 'exome';

function fromExome(exomeStore: Exome) {
    const store = reactive(exomeStore);

    subscribe(exomeStore, (value: unknown) => {
        store.value = value;
    });

    return store;
}

class MessageStore extends Exome {
    // Lets set up one property "count" with default value "0"
    public messages = [];
  
    // Now lets create action that will update "count" value
    public addMessage(msg: { level: string, message: string }) {
      this.messages.push(msg);
    }
}

class BreweryStore extends Exome {
    public breweries = {};

    public addBreweries(body) {
        console.log('body', body);
        this.breweries = body;
    }
}

export const store = createContext('store',
    {
        messages: fromExome(new MessageStore()),
        breweries: fromExome(new BreweryStore())
    }
);