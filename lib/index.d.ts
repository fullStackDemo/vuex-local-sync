import { Payload, Plugin } from 'vuex';
import { LocalOptions } from './LocalOptions';
export declare class VueLocalSync<S> implements LocalOptions<S> {
    storage: Storage;
    reducer: (state: S) => Partial<S>;
    restoreState: (key: string, storage?: Storage) => Promise<S> | S;
    saveState: (key: string, state: {}, storage?: Storage) => Promise<void> | void;
    key: string;
    filter: (mutation: Payload) => boolean;
    plugin: Plugin<S>;
    constructor(options?: LocalOptions<S>);
    private subscriber;
}
