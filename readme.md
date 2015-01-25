CORPORA API
----------------

A lil node server for offering up the [Corpora](https://github.com/dariusk/corpora) data as sweet JSON API.

Currently running 'live' at https://corpora-api.herokuapp.com/

[Browse some JSON](http://coleww.github.io/corpora-api/)


### GET "/"

Returns the index of the API. Includes a `data` object that lists the available data sets.

    200, "Content-Type": "application/json"
    {
        "description":"an API for the corpora. to access a data, navigate to '/{key}/{value}', for example: '/animals/dinosaurs' or '/words/literature/shakespeare_words'",
        "data": {
            "animals": ["common","dinosaurs","dogs"],
            "archetypes":["artifact","character","event","setting"],
            "colors":["crayola","web_colors"],
            "corporations":["cars","djia","nasdaq","newspapers"],
            "foods":["beer_categories","beer_styles","fruits","menuItems","pizzaToppings","sandwiches","vegetables"],
            "games":["cluedo","jeopardy_questions","pokemon","scrabble","trivial_pursuit"],
            "geography":["canada_provinces_and_territories","countries","english_towns_cities","rivers","us_cities","venues"],
            "governments":["nsa_projects","us_mil_operations"],
            "humans":["authors","britishActors","firstNames","occupations","prefixes","richpeople","spanishFirstNames","spanishLastNames","spinalTapDrummers","suffixes","us_presidents","wrestlers"],
            "instructions":["laundry_care"],
            "objects":["objects"],
            "plants":["flowers"],
            "science":["elements","hail_size","planets","pregnancy","toxic_chemicals"],
            "technology":["computer_sciences","fireworks","guns_n_rifles","knots"],
            "words":["adjs","adverbs","common","nouns","prefix_root_suffix","proverbs","states_of_drunkenness","us_president_quotes","verbs"],
            "words/literature":["mr_men_little_miss","shakespeare_phrases","shakespeare_sonnets","shakespeare_words"],
            "words/word_clues":["clues_five","clues_four","clues_six"]}
        }
    }

### GET "/{folder}/{file}"
    200, "Content-Type": "application/json"
    {
        "data": // contents of corpora/data/{folder}/{file}.json

    }

    Returns `404 Not Found` if "/{folder}/{file}" does not exist in corpora data.


#### TODO

- how to auto-pull in changes to corpora?

#### DEVELOPMUNK
update the corpora
- cd corpora/ && git pull origin master && cd ..

to test stuff
- npm install
- node test.js

run the server
- node index.js

