(function(window, document){
  'use strict';

  function canTrack(){
    return typeof window.gtag === 'function';
  }

  function fireEvent(name, params){
    if(!canTrack()) return;
    window.gtag('event', name, params || {});
  }

  function fireAdsConversion(sendTo, params){
    if(!canTrack() || !sendTo) return;
    window.gtag('event', 'conversion', Object.assign({ send_to: sendTo }, params || {}));
  }

  function getConfig(){
    return window.RL_GOOGLE_ADS_SEND_TO || {};
  }

  var tracking = {
    trackLeadSubmit: function(source){
      fireEvent('generate_lead', {
        event_category: 'lead',
        event_label: source,
        value: 1
      });
      fireAdsConversion(getConfig().leadSubmit, {
        event_callback: function(){},
        value: 1
      });
    },
    trackTestimonialSubmit: function(source){
      fireEvent('submit_testimonial', {
        event_category: 'engagement',
        event_label: source,
        value: 1
      });
      fireAdsConversion(getConfig().testimonialSubmit, {
        event_callback: function(){},
        value: 1
      });
    },
    trackWhatsAppClick: function(source){
      fireEvent('contact', {
        event_category: 'contact',
        event_label: source || 'whatsapp_click',
        method: 'whatsapp'
      });
      fireAdsConversion(getConfig().whatsappClick, {});
    },
    trackPhoneClick: function(source){
      fireEvent('contact', {
        event_category: 'contact',
        event_label: source || 'phone_click',
        method: 'phone'
      });
      fireAdsConversion(getConfig().phoneClick, {});
    }
  };

  document.addEventListener('click', function(event){
    var link = event.target.closest('a[href]');
    if(!link) return;

    var href = link.getAttribute('href') || '';
    var label = (link.textContent || '').trim() || href;

    if(href.indexOf('wa.me/') !== -1 || href.indexOf('whatsapp') !== -1){
      tracking.trackWhatsAppClick(label);
    }

    if(href.indexOf('tel:') === 0){
      tracking.trackPhoneClick(label);
    }
  });

  window.RLTracking = tracking;
})(window, document);
