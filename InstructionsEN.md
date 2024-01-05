1) Create a new branch on git, dont work on main/master

2) Start the Docker container, following the instructions in the README.md file.

3) You should use the original.json file and process it to achieve the result in transformed.json

    - When you encounter a period or semicolon after a word, you should create a new paragraph with the rest of the sentence.
    - If there are 2 paragraphs, the new paragraph that comes from the first paragraph should be placed between the first and second paragraphs, resulting in 3 paragraphs.
    - Each object in the array represents a paragraph with the following properties:
     ```
     NOTE: This JSON example is just a sample and is incomplete; refer to original.json to avoid confusion.
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
    - Each new paragraph should have the start property of the last item of the previous paragraph, and the end property should be the value of the end property of the last item of the current paragraph.

4) You should render the words property in paragraph format. In other words, you    should iterate through the words array, and concatenate each text with the next text to form a paragraph.

    [
        {
            end : 1,
            start : 0,
            "text": 'First paragraph for testing' // This property is not renderable
            words: [
                {"text": 'First', "start": 0, "end": 0.20},
                {"text": 'paragraph', "start": 0.20, "end": 0.40},
                {"text": 'for', "start": 0.40, "end": 0.50},
                {"text": 'testing', "start": 0.50, "end": 1}
            ]
        } 
    ]
    
    Expected rendering:

    <div>
    First paragraph for testing
    </div>