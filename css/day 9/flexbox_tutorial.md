# CSS Flexbox Tutorial - Parent Properties

## Introduction
इस tutorial में हम CSS Flexbox के parent properties सीखेंगे। Flexbox modern layout system है जो responsive design बनाने में बहुत helpful है। हर step में छोटे examples के साथ practical learning करेंगे।

---

## Step 1: Basic HTML Structure Setup

सबसे पहले basic HTML structure बनाते हैं:

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        .container {
            border: 2px solid black;
            padding: 10px;
            margin: 20px;
        }
        .item {
            background-color: lightblue;
            padding: 20px;
            margin: 5px;
            border: 1px solid blue;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="item">Item 1</div>
        <div class="item">Item 2</div>
        <div class="item">Item 3</div>
    </div>
</body>
</html>
```

**Test करें:** Items vertical में normal flow में दिखेंगे।

**Explanation:** यह normal block layout है। Items एक के नीचे एक दिख रहे हैं।

---

## Step 2: Display Flex - Basic

अब container को flex बनाते हैं:

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        .container {
            display: flex;
            border: 2px solid black;
            padding: 10px;
            margin: 20px;
        }
        .item {
            background-color: lightblue;
            padding: 20px;
            margin: 5px;
            border: 1px solid blue;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="item">Item 1</div>
        <div class="item">Item 2</div>
        <div class="item">Item 3</div>
    </div>
</body>
</html>
```

**Test करें:** Items horizontal में एक line में दिखेंगे।

**Explanation:** `display: flex` container को flex container बनाता है। Default में items horizontal (row) में arrange होते हैं।

---

## Step 3: Flex Direction - Row (Default)

Flex direction को explicitly specify करते हैं:

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        .container {
            display: flex;
            flex-direction: row;
            border: 2px solid black;
            padding: 10px;
            margin: 20px;
        }
        .item {
            background-color: lightblue;
            padding: 20px;
            margin: 5px;
            border: 1px solid blue;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="item">Item 1</div>
        <div class="item">Item 2</div>
        <div class="item">Item 3</div>
    </div>
</body>
</html>
```

**Test करें:** Items left से right में दिखेंगे।

**Explanation:** `flex-direction: row` default value है। Items main axis (horizontal) पर left to right arrange होते हैं।

---

## Step 4: Flex Direction - Row Reverse

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        .container {
            display: flex;
            flex-direction: row-reverse;
            border: 2px solid black;
            padding: 10px;
            margin: 20px;
        }
        .item {
            background-color: lightgreen;
            padding: 20px;
            margin: 5px;
            border: 1px solid green;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="item">Item 1</div>
        <div class="item">Item 2</div>
        <div class="item">Item 3</div>
    </div>
</body>
</html>
```

**Test करें:** Items right से left में दिखेंगे (Item 3, Item 2, Item 1)।

**Explanation:** `row-reverse` items को horizontal में रखता है लेकिन order reverse कर देता है।

---

## Step 5: Flex Direction - Column

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        .container {
            display: flex;
            flex-direction: column;
            border: 2px solid black;
            padding: 10px;
            margin: 20px;
        }
        .item {
            background-color: lightcoral;
            padding: 20px;
            margin: 5px;
            border: 1px solid red;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="item">Item 1</div>
        <div class="item">Item 2</div>
        <div class="item">Item 3</div>
    </div>
</body>
</html>
```

**Test करें:** Items vertical में top से bottom दिखेंगे।

**Explanation:** `flex-direction: column` main axis को vertical बना देता है। Items ऊपर से नीचे arrange होते हैं।

---

## Step 6: Flex Direction - Column Reverse

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        .container {
            display: flex;
            flex-direction: column-reverse;
            border: 2px solid black;
            padding: 10px;
            margin: 20px;
            height: 200px;
        }
        .item {
            background-color: lightyellow;
            padding: 20px;
            margin: 5px;
            border: 1px solid orange;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="item">Item 1</div>
        <div class="item">Item 2</div>
        <div class="item">Item 3</div>
    </div>
</body>
</html>
```

**Test करें:** Items bottom से top में दिखेंगे (Item 3, Item 2, Item 1)।

**Explanation:** `column-reverse` vertical arrangement में order reverse कर देता है।

---

## Step 7: Flex Wrap - Nowrap (Default)

अब flex wrap property test करते हैं। पहले more items add करें:

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        .container {
            display: flex;
            flex-wrap: nowrap;
            border: 2px solid black;
            padding: 10px;
            margin: 20px;
            width: 300px;
        }
        .item {
            background-color: lightblue;
            padding: 20px;
            margin: 5px;
            border: 1px solid blue;
            width: 100px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="item">Item 1</div>
        <div class="item">Item 2</div>
        <div class="item">Item 3</div>
        <div class="item">Item 4</div>
    </div>
</body>
</html>
```

**Test करें:** सभी items एक ही line में squeeze हो जाएंगे।

**Explanation:** `flex-wrap: nowrap` default है। Items container से बाहर जाने के बजाय shrink हो जाते हैं।

---

## Step 8: Flex Wrap - Wrap

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        .container {
            display: flex;
            flex-wrap: wrap;
            border: 2px solid black;
            padding: 10px;
            margin: 20px;
            width: 300px;
        }
        .item {
            background-color: lightgreen;
            padding: 20px;
            margin: 5px;
            border: 1px solid green;
            width: 100px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="item">Item 1</div>
        <div class="item">Item 2</div>
        <div class="item">Item 3</div>
        <div class="item">Item 4</div>
        <div class="item">Item 5</div>
    </div>
</body>
</html>
```

**Test करें:** Items multiple lines में wrap हो जाएंगे।

**Explanation:** `flex-wrap: wrap` items को next line पर move कर देता है जब space नहीं होती।

---

## Step 9: Flex Wrap - Wrap Reverse

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        .container {
            display: flex;
            flex-wrap: wrap-reverse;
            border: 2px solid black;
            padding: 10px;
            margin: 20px;
            width: 300px;
        }
        .item {
            background-color: lightcoral;
            padding: 20px;
            margin: 5px;
            border: 1px solid red;
            width: 100px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="item">Item 1</div>
        <div class="item">Item 2</div>
        <div class="item">Item 3</div>
        <div class="item">Item 4</div>
        <div class="item">Item 5</div>
    </div>
</body>
</html>
```

**Test करें:** Items wrap होंगे लेकिन lines का order reverse होगा।

**Explanation:** `wrap-reverse` items को wrap करता है लेकिन cross axis की direction reverse कर देता है।

---

## Step 10: Flex Flow - Row Wrap

Flex flow shorthand property का use करते हैं:

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        .container {
            display: flex;
            flex-flow: row wrap;
            border: 2px solid black;
            padding: 10px;
            margin: 20px;
            width: 250px;
        }
        .item {
            background-color: lightyellow;
            padding: 15px;
            margin: 5px;
            border: 1px solid orange;
            width: 80px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="item">A</div>
        <div class="item">B</div>
        <div class="item">C</div>
        <div class="item">D</div>
        <div class="item">E</div>
    </div>
</body>
</html>
```

**Test करें:** Items horizontal में wrap होंगे।

**Explanation:** `flex-flow: row wrap` एक shorthand है `flex-direction: row` और `flex-wrap: wrap` के लिए।

---

## Step 11: Flex Flow - Column Wrap

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        .container {
            display: flex;
            flex-flow: column wrap;
            border: 2px solid black;
            padding: 10px;
            margin: 20px;
            height: 200px;
            width: 300px;
        }
        .item {
            background-color: lightpink;
            padding: 15px;
            margin: 5px;
            border: 1px solid purple;
            height: 40px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="item">Item 1</div>
        <div class="item">Item 2</div>
        <div class="item">Item 3</div>
        <div class="item">Item 4</div>
        <div class="item">Item 5</div>
    </div>
</body>
</html>
```

**Test करें:** Items vertical में arrange होंगे और columns में wrap होंगे।

**Explanation:** `flex-flow: column wrap` vertical direction में items को arrange करता है और जरूरत पड़ने पर next column में wrap करता है।

---

## Step 12: Flex Flow - Row-Reverse Wrap-Reverse

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        .container {
            display: flex;
            flex-flow: row-reverse wrap-reverse;
            border: 2px solid black;
            padding: 10px;
            margin: 20px;
            width: 250px;
        }
        .item {
            background-color: lightcyan;
            padding: 15px;
            margin: 5px;
            border: 1px solid teal;
            width: 70px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="item">1</div>
        <div class="item">2</div>
        <div class="item">3</div>
        <div class="item">4</div>
        <div class="item">5</div>
        <div class="item">6</div>
    </div>
</body>
</html>
```

**Test करें:** Items right to left और bottom to top में arrange होंगे।

**Explanation:** Complex flex-flow combination जो दोनों directions को reverse करता है।

---

## Step 13: Comparison Example - All Directions

सभी flex-direction values को एक साथ compare करते हैं:

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        .comparison {
            display: flex;
            gap: 20px;
            flex-wrap: wrap;
        }
        
        .container {
            display: flex;
            border: 2px solid black;
            padding: 10px;
            margin: 10px;
            width: 200px;
            height: 150px;
        }
        
        .row { flex-direction: row; }
        .row-reverse { flex-direction: row-reverse; }
        .column { flex-direction: column; }
        .column-reverse { flex-direction: column-reverse; }
        
        .item {
            background-color: lightblue;
            padding: 10px;
            margin: 2px;
            border: 1px solid blue;
            font-size: 12px;
        }
        
        h4 {
            text-align: center;
            margin: 0 0 10px 0;
        }
    </style>
</head>
<body>
    <div class="comparison">
        <div>
            <h4>Row</h4>
            <div class="container row">
                <div class="item">1</div>
                <div class="item">2</div>
                <div class="item">3</div>
            </div>
        </div>
        
        <div>
            <h4>Row Reverse</h4>
            <div class="container row-reverse">
                <div class="item">1</div>
                <div class="item">2</div>
                <div class="item">3</div>
            </div>
        </div>
        
        <div>
            <h4>Column</h4>
            <div class="container column">
                <div class="item">1</div>
                <div class="item">2</div>
                <div class="item">3</div>
            </div>
        </div>
        
        <div>
            <h4>Column Reverse</h4>
            <div class="container column-reverse">
                <div class="item">1</div>
                <div class="item">2</div>
                <div class="item">3</div>
            </div>
        </div>
    </div>
</body>
</html>
```

**Test करें:** चारों directions का clear comparison दिखेगा।

---

## Step 14: Comparison Example - All Wrap Values

सभी flex-wrap values को compare करते हैं:

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        .wrap-comparison {
            display: flex;
            gap: 20px;
            flex-wrap: wrap;
        }
        
        .container {
            display: flex;
            border: 2px solid black;
            padding: 10px;
            width: 150px;
            height: 100px;
        }
        
        .nowrap { flex-wrap: nowrap; }
        .wrap { flex-wrap: wrap; }
        .wrap-reverse { flex-wrap: wrap-reverse; }
        
        .item {
            background-color: lightgreen;
            padding: 10px;
            margin: 2px;
            border: 1px solid green;
            width: 40px;
            font-size: 12px;
        }
        
        h4 {
            text-align: center;
            margin: 0 0 10px 0;
        }
    </style>
</head>
<body>
    <div class="wrap-comparison">
        <div>
            <h4>No Wrap</h4>
            <div class="container nowrap">
                <div class="item">1</div>
                <div class="item">2</div>
                <div class="item">3</div>
                <div class="item">4</div>
            </div>
        </div>
        
        <div>
            <h4>Wrap</h4>
            <div class="container wrap">
                <div class="item">1</div>
                <div class="item">2</div>
                <div class="item">3</div>
                <div class="item">4</div>
            </div>
        </div>
        
        <div>
            <h4>Wrap Reverse</h4>
            <div class="container wrap-reverse">
                <div class="item">1</div>
                <div class="item">2</div>
                <div class="item">3</div>
                <div class="item">4</div>
            </div>
        </div>
    </div>
</body>
</html>
```

**Test करें:** सभी wrap behaviors का clear difference दिखेगा।

---

## Step 15: Real-World Example - Navigation Bar

Practical example के रूप में navigation bar बनाते हैं:

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        .navbar {
            display: flex;
            flex-flow: row wrap;
            background-color: #333;
            padding: 0;
            margin: 0;
            list-style: none;
        }
        
        .nav-item {
            background-color: #333;
            margin: 0;
            border: none;
        }
        
        .nav-item a {
            display: block;
            color: white;
            padding: 15px 20px;
            text-decoration: none;
            border-right: 1px solid #555;
        }
        
        .nav-item:hover {
            background-color: #555;
        }
    </style>
</head>
<body>
    <ul class="navbar">
        <li class="nav-item"><a href="#">Home</a></li>
        <li class="nav-item"><a href="#">About</a></li>
        <li class="nav-item"><a href="#">Services</a></li>
        <li class="nav-item"><a href="#">Contact</a></li>
        <li class="nav-item"><a href="#">Blog</a></li>
    </ul>
</body>
</html>
```

**Test करें:** Professional navigation bar दिखेगा जो responsive है।

---

## Step 16: Real-World Example - Card Layout

Card layout बनाते हैं:

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        .card-container {
            display: flex;
            flex-flow: row wrap;
            gap: 20px;
            padding: 20px;
        }
        
        .card {
            background-color: white;
            border: 1px solid #ddd;
            border-radius: 8px;
            padding: 20px;
            width: 200px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        
        .card h3 {
            margin: 0 0 10px 0;
            color: #333;
        }
        
        .card p {
            color: #666;
            line-height: 1.5;
        }
    </style>
</head>
<body>
    <div class="card-container">
        <div class="card">
            <h3>Card 1</h3>
            <p>यह पहला card है flexible layout के साथ।</p>
        </div>
        
        <div class="card">
            <h3>Card 2</h3>
            <p>यह दूसरा card है responsive design के साथ।</p>
        </div>
        
        <div class="card">
            <h3>Card 3</h3>
            <p>यह तीसरा card है modern layout के साथ।</p>
        </div>
        
        <div class="card">
            <h3>Card 4</h3>
            <p>यह चौथा card है flexbox के साथ।</p>
        </div>
    </div>
</body>
</html>
```

**Test करें:** Cards responsive grid layout में arrange होंगे।

---

## Complete Reference Code

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            padding: 20px;
            background-color: #f4f4f4;
        }
        
        .section {
            background-color: white;
            margin: 20px 0;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        
        h1, h2 {
            color: #333;
            margin-bottom: 15px;
        }
        
        h2 {
            border-bottom: 2px solid #007bff;
            padding-bottom: 5px;
        }
        
        /* Flex Direction Examples */
        .direction-demo {
            display: flex;
            gap: 15px;
            flex-wrap: wrap;
            margin-top: 15px;
        }
        
        .direction-container {
            display: flex;
            border: 2px solid #333;
            padding: 10px;
            width: 180px;
            height: 120px;
            background-color: #f8f9fa;
        }
        
        .row-demo { flex-direction: row; }
        .row-reverse-demo { flex-direction: row-reverse; }
        .column-demo { flex-direction: column; }
        .column-reverse-demo { flex-direction: column-reverse; }
        
        .direction-item {
            background-color: #007bff;
            color: white;
            padding: 8px;
            margin: 2px;
            border-radius: 4px;
            font-size: 12px;
            text-align: center;
            min-width: 30px;
        }
        
        /* Wrap Examples */
        .wrap-demo {
            display: flex;
            gap: 15px;
            flex-wrap: wrap;
            margin-top: 15px;
        }
        
        .wrap-container {
            display: flex;
            border: 2px solid #28a745;
            padding: 10px;
            width: 160px;
            height: 100px;
            background-color: #f8fff8;
        }
        
        .nowrap-demo { flex-wrap: nowrap; }
        .wrap-demo-container { flex-wrap: wrap; }
        .wrap-reverse-demo { flex-wrap: wrap-reverse; }
        
        .wrap-item {
            background-color: #28a745;
            color: white;
            padding: 8px;
            margin: 2px;
            border-radius: 4px;
            font-size: 11px;
            width: 35px;
            text-align: center;
        }
        
        /* Flex Flow Examples */
        .flow-demo {
            display: flex;
            gap: 15px;
            flex-wrap: wrap;
            margin-top: 15px;
        }
        
        .flow-container {
            display: flex;
            border: 2px solid #dc3545;
            padding: 10px;
            background-color: #fff8f8;
        }
        
        .flow-1 {
            flex-flow: row wrap;
            width: 140px;
            height: 80px;
        }
        
        .flow-2 {
            flex-flow: column wrap;
            width: 140px;
            height: 80px;
        }
        
        .flow-3 {
            flex-flow: row-reverse wrap-reverse;
            width: 140px;
            height: 80px;
        }
        
        .flow-item {
            background-color: #dc3545;
            color: white;
            padding: 6px;
            margin: 2px;
            border-radius: 3px;
            font-size: 10px;
            min-width: 25px;
            text-align: center;
        }
        
        /* Practical Examples */
        .navbar {
            display: flex;
            flex-flow: row wrap;
            background-color: #343a40;
            list-style: none;
            margin: 15px 0;
            border-radius: 5px;
            overflow: hidden;
        }
        
        .nav-item {
            flex: 1;
        }
        
        .nav-item a {
            display: block;
            color: white;
            padding: 15px;
            text-decoration: none;
            text-align: center;
            transition: background-color 0.3s ease;
        }
        
        .nav-item:hover a {
            background-color: #495057;
        }
        
        .card-grid {
            display: flex;
            flex-flow: row wrap;
            gap: 20px;
            margin-top: 15px;
        }
        
        .card {
            background-color: white;
            border: 1px solid #dee2e6;
            border-radius: 8px;
            padding: 20px;
            width: 250px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            transition: transform 0.2s ease;
        }
        
        .card:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }
        
        .card h3 {
            color: #495057;
            margin-bottom: 10px;
        }
        
        .card p {
            color: #6c757d;
            font-size: 14px;
        }
        
        /* Responsive Design */
        .responsive-container {
            display: flex;
            flex-flow: row wrap;
            gap: 10px;
            padding: 15px;
            background-color: #e9ecef;
            border-radius: 5px;
        }
        
        .responsive-item {
            background-color: #6f42c1;
            color: white;
            padding: 15px;
            border-radius: 5px;
            text-align: center;
            min-width: 100px;
            flex: 1;
        }
        
        /* Code Example Styling */
        .code-label {
            background-color: #495057;
            color: white;
            padding: 5px 10px;
            border-radius: 4px 4px 0 0;
            font-size: 12px;
            font-weight: bold;
            margin: 10px 0 0 0;
        }
        
        .demo-box {
            border: 2px dashed #6c757d;
            padding: 10px;
            border-radius: 0 0 4px 4px;
            margin-bottom: 15px;
        }
    </style>
</head>
<body>
    <h1 style="text-align: center; color: #007bff;">CSS Flexbox Tutorial - Parent Properties</h1>
    
    <!-- Display Flex -->
    <div class="section">
        <h2>1. Display: Flex</h2>
        <p><strong>Explanation:</strong> <code>display: flex</code> container को flex container बनाता है और children को flex items बना देता है।</p>
        
        <div class="code-label">Normal Block Layout</div>
        <div class="demo-box">
            <div style="border: 2px solid black; padding: 10px;">
                <div style="background-color: lightblue; padding: 10px; margin: 5px; border: 1px solid blue;">Item 1</div>
                <div style="background-color: lightblue; padding: 10px; margin: 5px; border: 1px solid blue;">Item 2</div>
                <div style="background-color: lightblue; padding: 10px; margin: 5px; border: 1px solid blue;">Item 3</div>
            </div>
        </div>
        
        <div class="code-label">Flex Layout</div>
        <div class="demo-box">
            <div style="display: flex; border: 2px solid black; padding: 10px;">
                <div style="background-color: lightgreen; padding: 10px; margin: 5px; border: 1px solid green;">Item 1</div>
                <div style="background-color: lightgreen; padding: 10px; margin: 5px; border: 1px solid green;">Item 2</div>
                <div style="background-color: lightgreen; padding: 10px; margin: 5px; border: 1px solid green;">Item 3</div>
            </div>
        </div>
    </div>
    
    <!-- Flex Direction -->
    <div class="section">
        <h2>2. Flex-Direction</h2>
        <p><strong>Explanation:</strong> यह property flex items की direction control करती है।</p>
        
        <div class="direction-demo">
            <div>
                <div class="code-label">Row (Default)</div>
                <div class="direction-container row-demo">
                    <div class="direction-item">1</div>
                    <div class="direction-item">2</div>
                    <div class="direction-item">3</div>
                </div>
            </div>
            
            <div>
                <div class="code-label">Row-Reverse</div>
                <div class="direction-container row-reverse-demo">
                    <div class="direction-item">1</div>
                    <div class="direction-item">2</div>
                    <div class="direction-item">3</div>
                </div>
            </div>
            
            <div>
                <div class="code-label">Column</div>
                <div class="direction-container column-demo">
                    <div class="direction-item">1</div>
                    <div class="direction-item">2</div>
                    <div class="direction-item">3</div>
                </div>
            </div>
            
            <div>
                <div class="code-label">Column-Reverse</div>
                <div class="direction-container column-reverse-demo">
                    <div class="direction-item">1</div>
                    <div class="direction-item">2</div>
                    <div class="direction-item">3</div>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Flex Wrap -->
    <div class="section">
        <h2>3. Flex-Wrap</h2>
        <p><strong>Explanation:</strong> यह property control करती है कि flex items wrap होंगे या नहीं।</p>
        
        <div class="wrap-demo">
            <div>
                <div class="code-label">No-Wrap (Default)</div>
                <div class="wrap-container nowrap-demo">
                    <div class="wrap-item">1</div>
                    <div class="wrap-item">2</div>
                    <div class="wrap-item">3</div>
                    <div class="wrap-item">4</div>
                    <div class="wrap-item">5</div>
                </div>
            </div>
            
            <div>
                <div class="code-label">Wrap</div>
                <div class="wrap-container wrap-demo-container">
                    <div class="wrap-item">1</div>
                    <div class="wrap-item">2</div>
                    <div class="wrap-item">3</div>
                    <div class="wrap-item">4</div>
                    <div class="wrap-item">5</div>
                </div>
            </div>
            
            <div>
                <div class="code-label">Wrap-Reverse</div>
                <div class="wrap-container wrap-reverse-demo">
                    <div class="wrap-item">1</div>
                    <div class="wrap-item">2</div>
                    <div class="wrap-item">3</div>
                    <div class="wrap-item">4</div>
                    <div class="wrap-item">5</div>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Flex Flow -->
    <div class="section">
        <h2>4. Flex-Flow (Shorthand)</h2>
        <p><strong>Explanation:</strong> यह <code>flex-direction</code> और <code>flex-wrap</code> का shorthand property है।</p>
        
        <div class="flow-demo">
            <div>
                <div class="code-label">Row Wrap</div>
                <div class="flow-container flow-1">
                    <div class="flow-item">1</div>
                    <div class="flow-item">2</div>
                    <div class="flow-item">3</div>
                    <div class="flow-item">4</div>
                    <div class="flow-item">5</div>
                    <div class="flow-item">6</div>
                </div>
            </div>
            
            <div>
                <div class="code-label">Column Wrap</div>
                <div class="flow-container flow-2">
                    <div class="flow-item">1</div>
                    <div class="flow-item">2</div>
                    <div class="flow-item">3</div>
                    <div class="flow-item">4</div>
                    <div class="flow-item">5</div>
                    <div class="flow-item">6</div>
                </div>
            </div>
            
            <div>
                <div class="code-label">Row-Rev Wrap-Rev</div>
                <div class="flow-container flow-3">
                    <div class="flow-item">1</div>
                    <div class="flow-item">2</div>
                    <div class="flow-item">3</div>
                    <div class="flow-item">4</div>
                    <div class="flow-item">5</div>
                    <div class="flow-item">6</div>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Practical Examples -->
    <div class="section">
        <h2>5. Practical Examples</h2>
        
        <h3>Navigation Bar (Flex Row Wrap)</h3>
        <ul class="navbar">
            <li class="nav-item"><a href="#">Home</a></li>
            <li class="nav-item"><a href="#">About</a></li>
            <li class="nav-item"><a href="#">Services</a></li>
            <li class="nav-item"><a href="#">Portfolio</a></li>
            <li class="nav-item"><a href="#">Contact</a></li>
        </ul>
        
        <h3>Card Grid Layout (Flex Row Wrap)</h3>
        <div class="card-grid">
            <div class="card">
                <h3>Web Development</h3>
                <p>Modern websites और web applications बनाने की service। Responsive design के साथ।</p>
            </div>
            
            <div class="card">
                <h3>Mobile Apps</h3>
                <p>iOS और Android के लिए native mobile applications। User-friendly interface के साथ।</p>
            </div>
            
            <div class="card">
                <h3>UI/UX Design</h3>
                <p>Beautiful और functional user interfaces design करना। User experience को enhance करना।</p>
            </div>
            
            <div class="card">
                <h3>Digital Marketing</h3>
                <p>Online presence बढ़ाना और brand awareness create करना। SEO और social media के साथ।</p>
            </div>
        </div>
        
        <h3>Responsive Container</h3>
        <div class="responsive-container">
            <div class="responsive-item">Item 1</div>
            <div class="responsive-item">Item 2</div>
            <div class="responsive-item">Item 3</div>
            <div class="responsive-item">Item 4</div>
        </div>
    </div>
    
    <!-- Summary -->
    <div class="section">
        <h2>6. Summary</h2>
        <div style="background-color: #e7f3ff; padding: 15px; border-radius: 5px; border-left: 4px solid #007bff;">
            <h3>Flex Parent Properties:</h3>
            <ul style="margin-left: 20px; margin-top: 10px;">
                <li><strong>display: flex</strong> - Container को flex बनाता है</li>
                <li><strong>flex-direction</strong> - Items की direction (row, row-reverse, column, column-reverse)</li>
                <li><strong>flex-wrap</strong> - Items wrap होंगे या नहीं (nowrap, wrap, wrap-reverse)</li>
                <li><strong>flex-flow</strong> - Direction और wrap का shorthand</li>
            </ul>
            
            <h3 style="margin-top: 15px;">Best Practices:</h3>
            <ul style="margin-left: 20px; margin-top: 10px;">
                <li>Responsive layouts के लिए flex-wrap use करें</li>
                <li>Navigation bars के लिए row direction perfect है</li>
                <li>Sidebars के लिए column direction use करें</li>
                <li>Complex layouts के लिए flex-flow shorthand convenient है</li>
            </ul>
        </div>
    </div>
</body>
</html>
```

## Summary

### **1. Display: Flex**
- Container को flex container बनाता है
- Children automatically flex items बन जाते हैं
- Default में horizontal (row) layout मिलता है

### **2. Flex-Direction**
- **row** - Left to right (default)
- **row-reverse** - Right to left  
- **column** - Top to bottom
- **column-reverse** - Bottom to top

### **3. Flex-Wrap**
- **nowrap** - सभी items एक line में (default)
- **wrap** - Items next line पर wrap होते हैं
- **wrap-reverse** - Wrap होते हैं लेकिन reverse order में

### **4. Flex-Flow (Shorthand)**
- `flex-direction` और `flex-wrap` का combination
- `flex-flow: row wrap` - Common pattern
- `flex-flow: column nowrap` - Vertical no-wrap layout

### **5. Common Use Cases**
- **Navigation bars** - `flex-flow: row wrap`
- **Card layouts** - `flex-flow: row wrap`  
- **Sidebar layouts** - `flex-direction: column`
- **Responsive grids** - `flex-flow: row wrap`

### **6. Best Practices**
1. **Responsive design** के लिए wrap का use करें
2. **Mobile-first** approach अपनाएं
3. **Gap property** का use करें spacing के लिए
4. **Flex-flow shorthand** prefer करें

यह tutorial आपको flexbox के parent properties की complete understanding देता है!