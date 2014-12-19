jquery-localisation
===================

A simple javascript/jquery library to translate your website

Steps to use the library
=========================

1) Import the JQuery library using a script tag in the head of your html page. If you use the google cdn it would look like this:

'''html
	<script src="HTTP://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
'''

2) Import the jquery-localisation script:

'''html
	<script src="scripts/jquery-localisation.js"></script>
'''

3) Initialize jquery-localisation by adding the following script to your html:

'''html
	<script>
        $(document).ready(function () {
            localisation.initialize("translation_config/translation.json", "en");
        });
    </script>
'''

The initialize function has two parameters.
 - The first parameter refers to the file that contains the translations.
 - The second parameter is optional and defines the default language to be used. By default the library detects the browser language and uses this one. If you did not provide the translations for the language the browser is using the site is translated to the default language.
 
4) Add the right attributes to the html tags which have to be translated. The library uses two attributes:

 - data-translate-key="key_used_in_the_translation_file"
 - data-translate-language="some_language"
 
Add the data-translate-key="key_used_in_the_translation_file" to the html tags that have to be translated. Provide a value associated with the key for each language. These key value pairs are defined in the translation file.
Add the data-translate-language="some_language" attribute to an element that will be used to translate the site. For example if you add the data-translate-language="en" attribute to a button the site will be translated into English when the button is clicked.

5) Add the translations into the translation file. This is a json file, in this file you have a list of key value pairs for each language. The keys for each language are identical, the values provide the translation for that language.

For example:

'''json
{
    "en": {
        "home": "Home",
        "about": "About us",
        "contact": "Contact",
        "dutch": "Dutch",
        "english":  "English"
    },
    "nl": {
        "home": "Home",
        "about": "Over ons",
        "contact": "Contact",
        "dutch": "Nederlands",
        "english": "Engels"
    }
}
'''
	

