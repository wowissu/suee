// ScrollTop
Object.defineProperty(window, 'scrollTop', {
  enumerable: false,
  configurable: false,
  get: () => {
    var docEl = document.documentElement;
    return (window.pageYOffset || docEl.scrollTop) - (docEl.clientTop || 0);
  }
});

// CustomEvent For IE support
(function () {
  if ( typeof window.CustomEvent === "function" ) return false; //If not IE

  function CustomEvent ( event, params ) {
    params = params || { bubbles: false, cancelable: false, detail: undefined };
    var evt = document.createEvent( 'CustomEvent' );
    evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail );
    return evt;
   }

  CustomEvent.prototype = window.Event.prototype;

  window.CustomEvent = CustomEvent;
})();

export default {}