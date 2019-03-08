export interface LocalOptions<S> {
    storage?: Storage;
    key?: string;
    restoreState?: (key: string, storage?: Storage) => Promise<S> | S;
    saveState?: (key: string, state: {}, storage?: Storage) => Promise<void> | void;
    reducer: (State: S) => {};
}
