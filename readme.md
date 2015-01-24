CORPORA API
----------------

A simple API for serving up the [Corpora](https://github.com/dariusk/corpora)

running at https://corpora-api.herokuapp.com/


### GET "/"

Returns the index of the API. Includes a `data` object that lists the available data sets.

    200, "Content-Type": "application/json"
    {
        "description":"an API for the corpora",
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
            "words":["adjs","adverbs","common","literature","nouns","prefix_root_suffix","proverbs","states_of_drunkenness","us_president_quotes","verbs","word_clues"]
        }
    }

### GET "/{folder}/{file}"
    200, "Content-Type": "application/json"
    {
        "data": {
            // contents of corpora/data/{folder}/{file}.json
        }
    }

return `404 Not Found` if "/{folder}/{file}" does not exist in corpora data.



TODO:
    make an example app that consumes the API
    CORS?
    handle sub-sub-sub-directories arbitrarily