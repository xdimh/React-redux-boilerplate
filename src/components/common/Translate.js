var Translate = {

  getWord: function(wordKey){
  	switch(AppStore.getLanguage()){
      case 'en':
        var languageObject = require('json!../../../languages/en.json'); 
        break;
      case 'de':
        var languageObject = require('json!../../../languages/de.json');
        break;
      case 'hn':
        var languageObject = require('json!../../../languages/hn.json');
        break;
      case 'ur':
        var languageObject = require('json!../../../languages/ur.json');
        break;
    }
    // var languageObject = require('json!../../../../languages/en.json');
    return languageObject[wordKey];
  }

};

export default Translate;