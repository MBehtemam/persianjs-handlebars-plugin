Handlebars.registerHelper('arabicChar',function(str){
	return new Handlebars.SafeString(persianJs(str).arabicChar());
});
Handlebars.registerHelper('arabicNumber',function(number){
	return new Handlebars.SafeString(persianJs(number).arabicNumber());
});
Handlebars.registerHelper('englishNumber',function(number){
	return new Handlebars.SafeString(persianJs(number).englishNumber());
});
Handlebars.registerHelper('toPersian',function(str){
	return new Handlebars.SafeString(persianJs(str).englishNumber().arabicNumber().arabicChar());
});
