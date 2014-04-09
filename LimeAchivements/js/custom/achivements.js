var achivements = {
    users: null,
    achievementCategories: null,
    leader: null,
    latestAchievements: null,
    highScores: null,
    
    getUsers: function(bReload) {
        if(this.users == null || bReload == true){

            console.log('LOAD: Users ');
            
            var xml = '<?xml version="1.0" encoding="utf-8"?><data><row name="John" id="1" /><row name="Kalle" id="2" /></data>';
            this.users = $.xml2json(xml,true).row
        }
        return this.users;
    },
    getLeader: function(bReload) {
        if(this.leader == null || bReload == true){
            console.log('LOAD: Leader');
             
            var xml = '<?xml version="1.0" encoding="utf-8"?><data><row name="John" id="1" points="15695" /></data>';
            this.leader = $.xml2json(xml,true).row[0];
        }
        return this.leader;
    },
    getLatestAchivements: function(bReload) {
         if(this.latestAchievements == null || bReload == true){
            console.log('LOAD: latestAchievements');
            
            var xml = '<?xml version="1.0" encoding="utf-8"?><data><row title="Rubrik 1" description="text" points="150" level="2" category="Sälj"/><row title="Rubrik 2" description="text" points="150" level="2" category="Sälj"/><row title="Rubrik 3" description="text" points="150" level="2" category="Sälj"/><row title="Rubrik 4" description="text" points="150" level="2" category="Sälj"/><row title="Rubrik" description="text" points="150" level="2" category="Sälj"/><row title="Rubrik" description="text" points="150" level="2" category="Sälj"/><row title="Rubrik" description="text" points="150" level="2" category="Sälj"/><row title="Rubrik" description="text" points="150" level="2" category="Sälj"/><row title="Rubrik" description="text" points="150" level="2" category="Sälj"/><row title="Rubrik" description="text" points="150" level="2" category="Sälj"/><row title="Rubrik" description="text" points="150" level="2" category="Konsult"/></data>';
            this.latestAchievements = $.xml2json(xml,true).row
        }
        return this.latestAchievements;
    },
    getHighScores: function(bReload) {
        if(this.highScores == null || bReload == true){
            var xml = '<?xml version="1.0" encoding="utf-8"?><data><row name="John" id="1" points="15695" /><row name="Kalle" id="1" points="4564" /><row name="Erik" id="1" points="123" /></data>';
            this.highScores = $.xml2json(xml,true).row;
            
            console.log('LOAD: highScores');
        }
        return this.highScores;
    },
    getUserAchievements: function(userId) {
        console.log('LOAD: User achievements');
        var xml = "";
        if(userId == 1){xml = '<?xml version="1.0" encoding="utf-8"?><data><row title="Rubrik" description="text" points="150" level="2" category="Sälj"/><row title="Rubrik" description="text" points="150" level="2" category="Sälj"/><row title="Rubrik" description="text" points="150" level="2" category="Konsult"/></data>';}
        else{xml = '<?xml version="1.0" encoding="utf-8"?><data><row title="Rubrik" description="text" points="150" level="2" category="Sälj"/><row title="Rubrik" description="text" points="150" level="2" category="Konsult"/><row title="Rubrik" description="text" points="150" level="2" category="Konsult"/></data>';};
        
        return $.xml2json(xml,true).row;
    },
    getAchievementCategories: function(bReload) {
        if(this.achievementCategories == null || bReload == true){
            console.log('LOAD: Achievement categories');
            
            var xml = '<?xml version="1.0" encoding="utf-8"?><data><row name="Sälj"/><row name="Konsult"/></data>';
            this.achievementCategories = $.xml2json(xml,true).row
        }
        return this.achievementCategories;
    }
}