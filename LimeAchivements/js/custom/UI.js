var UI = {
    activeUserId : 0,
   
    setPageFromUrl: function() {
        var id = commons.getQuerystring('id',false);
        var expose = commons.getQuerystring('expose',false);
        if(expose && id){
            this.setAchievementExpose(id);
        }
        else{    
            if(id){
                this.setProfilePageFromId(id);
            }else{
                this.setStartPage();
            }
        }
    },
    setAchievementExpose: function(id) {
        console.log('EXPOSE: '+id);

        this.changeView('expose',function(){
           
        }); 
    },
    setProfilePageFromId: function(id) {
        console.log('ACTIVE USER: '+id);
        if(id == 0){
            this.setStartPage();
        }else{
            this.activeUserId = id;

            this.changeView('profile',function(){
            UI.renderUsers(achivements.getUsers(false));
            UI.renderAchievementCategories(achivements.getAchievementCategories(false));
            UI.renderUserAchievements(achivements.getUserAchievements(id));
            $("#userselect").val(id);
            $("#username").text(commons.findObjectInArrayByProperty(achivements.users, 'id', id).name);
            }); 
        }
    },
    setStartPage: function() {
       this.changeView('overview',function(){
            UI.renderUsers(achivements.getUsers(false));
            UI.renderLeader(achivements.getHighScores(true)[0]);
            UI.renderLatestAchievements(achivements.getLatestAchivements(true));
            UI.renderHighScore(achivements.getHighScores(true));
       }); 
    },
    changeView: function(name,func){
        if(name == 'expose'){
            $('#wrapper').load("./view/"+name+".html",func);
        }else{
            $('#content').load("./view/"+name+".html",func);
        }
    },
    renderUsers: function(users) {
        console.log('RENDER: Users');
        $('#userselect').children().remove().end().append('<option selected value="0">Översikt</option>');
        $.each(users, function(key, value) { 
            $('#userselect').append($('<option>', {value : value.id}).text(value.name)); 
        });
    },
    renderUserAchievements: function(achivements) {
        console.log('RENDER: User achievements');

        $.each(achivements, function(key, value) { 
            $('#cat_'+value.category).append($('<div></div>', {"class" : "achievementBadge"}).text(value.title)); 
        });
    },
    renderAchievementCategories: function(categories) {
        console.log('RENDER: Achivement categories');
        
        $('#categoryContainer').children().remove().end();

        $.each(categories, function(key, value) { 
            $('#categoryContainer').append($('<h1></h1>', {id : "header_"+value.name}).text(value.name)); 
            $('#categoryContainer').append($('<div></div>', {id : "cat_"+value.name}).text(""));
        });
    },
    renderLatestAchievements: function(achivements) {
        console.log('RENDER: LatestAchievements');

        var iNbrOfItemsInSet = 4;
        $.each(achivements, function(key, value) { 
            var iSet = ((Math.ceil((key+1)/iNbrOfItemsInSet)));
            $('#latestAchievementItems_set'+iSet)
                .append($('<div></div>', {"class" : "achievementBadgeSquare"})
                .append($('<br></br>', {"class" : "clear"}))
                .append($('<span></span>', {"class" : "title"}).text(value.title))); 
        });
    },
    renderLeader: function(leader) {
        console.log('RENDER: Leader');
        console.log(leader);
        
        $('#leaderName').text(leader.name);
        $('#leaderPoints').text(leader.points);
    },
    renderHighScore: function(users) {
        console.log('RENDER: High score');
        
        $.each(users, function(key, value) { 
            $('#highscore').append($('<tr></tr>', {"class" : ""}).append($('<td>'+(key+1)+'</td>', {"class" : ""})).append($('<td></td>', {"class" : ""}).text(value.name)).append($('<td></td>', {"class" : ""}).text(value.points))); 
 
        });
    }
}