(function(localisation, $, undefined) {
    //Private Property 
    var defaultTranslationFile = "";
    var translationData = 0;
    var defaultLanguage = "";


    
    localisation.InitAndRunTranslation = function() {
        loadTranslationFile(defaultTranslationFile);
    };

    // Sets the default language
    localisation.SetLanguage = function(lang) {
        defaultLanguage = lang;
    };

    // Sets the translation file url 
    localisation.SetTranslationFile = function(file) {
        defaultTranslationFile = file;
    };

    // Private function: gets the translation in language: language for keyword: word.
    function getTranslation(language, word) {
        return translationData[language][word];
    };

    // Private funcion: loads the translation json file from the server and applies the default translation
    function loadTranslationFile(file) {
        $.getJSON(file, function (data) {
            translationData = data;
            //get the default browser language and translate the page
            var userLang = navigator.language || navigator.userLanguage;
            var lang = userLang.substr(0, 2);
            if (translationData[lang] == 0) {
                localisation.RunTranslation(defaultLanguage);
            } else {
                localisation.RunTranslation(lang);
            }

        });
    };

    //Translate the page to a specific language
    localisation.RunTranslation = function(language) {
        $("[data-translate-key]").each(function () {
            var elem = $(this);
            var word = elem.attr("data-translate-key");
            elem.html(getTranslation(language, word));
        });
    };

    localisation.initialize = function(translationFile, defLang) {
        defLang = defLang || "en";
        localisation.SetLanguage(defLang);
        localisation.SetTranslationFile(translationFile);
        localisation.InitAndRunTranslation();

        $("[data-translate-language]").click(function () {
            localisation.RunTranslation($(this).attr("data-translate-language"));
        });
    }

}(window.localisation = window.localisation || {}, jQuery));


