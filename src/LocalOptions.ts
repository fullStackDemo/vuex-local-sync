

export interface LocalOptions<S> {
  /**
   * window.storage default type
   */
  storage?: Storage
  /**
   * key to save to the state into the localStorage
   */
  key?: string
  /**
   * restoreState
   */
  restoreState?: (key: string, storage?: Storage) => Promise<S> | S;
  /**
   * saveState
   */
  saveState?: (key: string, state: {}, storage?: Storage) => Promise<void> | void
  /**
   * reducer
   */
  reducer: (State: S) => {}


}