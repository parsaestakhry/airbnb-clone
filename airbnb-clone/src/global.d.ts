import * as daterangepicker from 'daterangepicker';

declare module 'jquery' {
  interface JQuery<TElement = HTMLElement> {
    daterangepicker: typeof daterangepicker;
  }
}
