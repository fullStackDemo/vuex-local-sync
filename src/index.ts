
import { Mutation, MutationPayload, Payload, Plugin, Store } from 'vuex';

import { LocalOptions } from './LocalOptions';

import { merge } from './utils'
// console.log(Store.prototype);

export class VueLocalSync<S> implements LocalOptions<S> {
  public storage: Storage;
  public reducer: (state: S) => Partial<S>;
  public restoreState: (key: string, storage?: Storage) => Promise<S> | S;
  public saveState: (key: string, state: {}, storage?: Storage) => Promise<void> | void;
  public key: string;
  public filter: (mutation: Payload) => boolean
  /**
   * the plugin can be used in vuex;
   */
  public plugin: Plugin<S>;

  /**
   * constructor
   */

  public constructor(options?: LocalOptions<S>) {

    this.key = options.key || 'vuex';

    this.storage = options.storage || window.localStorage;

    this.reducer = options.reducer != null ? options.reducer : ((state: S) => state);

    this.restoreState = options.restoreState != null ? options.restoreState : ((key: string, storage: Storage) => {
      const value = (storage).getItem(key);
      if (typeof value == 'string') {
        return JSON.parse(value) || {};
      } else {
        return (value || {})
      }
    });

    this.saveState = options.saveState != null ? options.saveState : ((key: string, state: {}, storage: Storage) => {
      (storage).setItem(key, JSON.stringify(state));
    });

    // this.filter = options.filter || (Mutation => true);

    this.plugin = (store: Store<S>) => {
      const savedState = this.restoreState(this.key, this.storage) as S;

      store.replaceState(merge(store.state, savedState || {}));

      store.subscribe(() => {
        this.saveState(this.key, store.state);
      });

    }
  }
  /**
   * subscribe
   * @private
   * @memberof VueLocalSync
   */
  private subscriber = (store: Store<S>) => (handler: (mutation: MutationPayload, state: S) => any) => store.subscribe(handler)
};




