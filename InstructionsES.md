1) Crear una nueva rama de git, no trabajar en main/master

2) Levantar el contendor de docker, seguir instrucciones de README.md file

3) Deberas usar el original.json file y procesarlo para lograr el resultado del transformed.json

    - Cuando encuentres un punto y aparte o punto y seguido después de una palabra, deberás crear un nuevo párrafo con el resto de la frase.
    - Si hay 2 parrafos, el nuevo parrafo que sale del primer parrafo debe ubicarse entre el primer y el segundo parrafo, quedando asi 3 parrafos.
    - Cada objeto del array representa un párrafo con las siguientes propiedades:
     ```
     NOTA: este json que muestro es solo un ejemplo y esta incompleto, revisar
     original.json para no confundirse
     [
        {
        "end": 4.87,
        "start": 0.05,
        "text": " Hey, everybody. Welcome to this A1 English",
        "words": [
            {
                "end": 0.59,
                "start": 0.05,
                "word": "Hey,"
            },
            {
                "end": 0.99,
                "start": 0.63,
                "word": "everybody,"
            },
            {
                "end": 1.59,
                "start": 1.37,
                "word": "welcome"
            },
            {
                "end": 1.83,
                "start": 1.59,
                "word": "to"
            },
            {
                "end": 2.13,
                "start": 1.83,
                "word": "this"
            },
            {
                "end": 2.75,
                "start": 2.13,
                "word": "A1"
            },
            {
                "end": 3.35,
                "start": 2.75,
                "word": "English"
            }
            
        ]
    }
     ]
     ```
    - Cada nuevo parrafo debe tener la propiedad start del ultimo item del parrafo anterior y la propiedad end debe ser el valor de la propiedad end del ultimo item del parrafo actual

4) Deberas renderizar la propiedad words en formato parrafo,
    es decir, debe recorrer el array words, y cada texto concatenarlo con el siguiente texto y asi formar un parrafo

    [
        {
        end : 1,
        start : 0,
        text: 'Primer parrafo de prueba' // esta propiedad no es renderizable
        words: [
            {text: 'Primer', start: 0, end: 0.20},
            {text: 'parrafo', start: 0.20, end: 0.40}
            {text: 'de', start: 0.40, end: 0.50}
            {text: 'prueba', start: 0.50, end: 1}
        ]
        } 
    ]
    
    renderizado esperado

    <div>
        Primer parrafo de prueba
    </div>