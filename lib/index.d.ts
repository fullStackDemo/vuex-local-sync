import { LocalOptions } from './LocalOptions';
export declare class VueLocalSync<S> implements LocalOptions<S> {
    storage: Storage;
    reducer: (state: S) => Partial<S>;
    restoreState: (key: string, storage?: Storage) => Promise<S> | S;
    saveState: (key: string, state: {}, storage?: Storage) => Promise<void> | void;
}
