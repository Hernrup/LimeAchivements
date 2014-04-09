var commons = {
    getQuerystring: function(key, default_) {
         if (default_==null) default_=""; 
            key = key.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
            var regex = new RegExp("[\\?&]"+key+"=([^&#]*)");
            var qs = regex.exec(window.location.href);
            if(qs == null)
                return default_;
            else
                return qs[1];
    },
    findObjectInArrayByProperty: function(array,property,value){
        var results =  $.grep(array, function(n, i){

             var found = false
             $.each(n, function(k, v) { 
                if(k == property && v == value){
                    found = true;
                }
            });

            return found;
        })
        return results[0];
    }
}