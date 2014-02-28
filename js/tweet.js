jQuery(function(){
      jQuery('#tweets').tweetable({
        username: 'ngePopMie', 
        time: true,
        rotate: false,
        speed: 4000, 
        limit: 1,
        replies: true,
        position: 'append',
        failed: "Sorry ...",
        loading: "Load @ngePopMie feed...",
        html5: true,
        cacheInMilliseconds: 36000,
        onComplete:function($ul){
          $('time').timeago();
        }
      });
    });