var me = {
	name : "Dant",
	last_name : "Benjamin",
	birthday : "31-03-1979",
	github : "bingoooo",
	occupation : "Developpeur Moine Bouddhiste",
	getFullName : function(){
		return this.name + " " + this.last_name;
	},
	getOccupation : function(){
		return this.occupation;
	},
	setOccupation : function(newOccupation){
		this.occupation = newOccupation;
	},
	setName : function(newName){
		this.name = newName;
		console.log('Nouveau nom : ' + this.name);
	},
	setLastName : function(newLastName){
		this.last_name = newLastName;
	},
	getField : function(field){
		if (this[field] === undefined) {
			return 'no such field';
		} else {
			return this[field];
		}
	},
	setField : function(field, value){
		for (var item in this){
			if (item == field){
				return this[item] = value;
			}
		}
		return 'no such value';
	},
	getGithub : function(){
		return 'https://github.com/' + this.github;
	},
	setGithub : function(newGithub){
		this.github = newGithub;
	},
	getInfos : function(){
		var tab = ["Hi my name is "];
		tab.push(this.name, this.last_name + '\n',
			'I am born the', this.birthday + ',',
			'I am a ', this.occupation + '\n',
			'Get my work from github : ', this.getGithub() + '\n');
		return tab;
	}
}
console.log(me.github);
console.log(me.getGithub());
console.log(me.getInfos());