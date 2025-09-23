# CSS Flexbox Child Properties Tutorial

## Introduction
इस tutorial में हम CSS Flexbox के child properties सीखेंगे। ये properties individual flex items को control करती हैं। हर step में छोटे examples के साथ practical learning करेंगे।

---

## Step 1: Basic Flex Container Setup

सबसे पहले basic flex container बनाते हैं:

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        .container {
            display: flex;
            border: 2px solid black;
            height: 200px;
            width: 500px;
            background-color: #f0f0f0;
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

**Test करें:** Items अपने content के according width लेंगे।

**Explanation:** Default flex behavior में सभी items अपनी natural width रखते हैं।

---

## Step 2: Flex-Basis - Basic

Flex-basis property को test करते हैं:

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        .container {
            display: flex;
            border: 2px solid black;
            height: 200px;
            width: 500px;
            background-color: #f0f0f0;
        }
        .item {
            background-color: lightblue;
            padding: 20px;
            margin: 5px;
            border: 1px solid blue;
            flex-basis: 100px;
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

**Test करें:** सभी items की width 100px हो जाएगी।

**Explanation:** `flex-basis` item की initial main size (width) set करता है। यह width property को override कर देता है।

---

## Step 3: Flex-Basis - Different Values

अलग-अलग items को different flex-basis दें:

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        .container {
            display: flex;
            border: 2px solid black;
            height: 200px;
            width: 500px;
            background-color: #f0f0f0;
        }
        .item {
            background-color: lightgreen;
            padding: 20px;
            margin: 5px;
            border: 1px solid green;
        }
        .item1 { flex-basis: 50px; }
        .item2 { flex-basis: 150px; }
        .item3 { flex-basis: 100px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="item item1">Item 1</div>
        <div class="item item2">Item 2</div>
        <div class="item item3">Item 3</div>
    </div>
</body>
</html>
```

**Test करें:** Items अलग-अलग widths लेंगे।

**Explanation:** Individual items को अलग-अलग flex-basis values दे सकते हैं।

---

## Step 4: Flex-Grow - Basic

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        .container {
            display: flex;
            border: 2px solid black;
            height: 200px;
            width: 500px;
            background-color: #f0f0f0;
        }
        .item {
            background-color: lightcoral;
            padding: 20px;
            margin: 5px;
            border: 1px solid red;
            flex-grow: 1;
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

**Test करें:** सभी items equal width लेकर पूरी container fill करेंगे।

**Explanation:** `flex-grow: 1` सभी items को equally grow करता है। Available space को equally distribute करता है।

---

## Step 5: Flex-Grow - Different Values

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        .container {
            display: flex;
            border: 2px solid black;
            height: 200px;
            width: 500px;
            background-color: #f0f0f0;
        }
        .item {
            background-color: lightyellow;
            padding: 20px;
            margin: 5px;
            border: 1px solid orange;
        }
        .item1 { flex-grow: 1; }
        .item2 { flex-grow: 2; }
        .item3 { flex-grow: 1; }
    </style>
</head>
<body>
    <div class="container">
        <div class="item item1">Grow 1</div>
        <div class="item item2">Grow 2</div>
        <div class="item item3">Grow 1</div>
    </div>
</body>
</html>
```

**Test करें:** Middle item (grow: 2) दूसरों से double width लेगा।

**Explanation:** `flex-grow` values का ratio के according space distribute होता है। यहाँ 1:2:1 ratio में।

---

## Step 6: Flex-Shrink - Basic

Container width कम करके shrink test करते हैं:

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        .container {
            display: flex;
            border: 2px solid black;
            height: 200px;
            width: 300px;
            background-color: #f0f0f0;
        }
        .item {
            background-color: lightpink;
            padding: 20px;
            margin: 5px;
            border: 1px solid purple;
            flex-basis: 150px;
            flex-shrink: 1;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="item">Shrink 1</div>
        <div class="item">Shrink 1</div>
        <div class="item">Shrink 1</div>
    </div>
</body>
</html>
```

**Test करें:** Items अपने flex-basis से छोटे हो जाएंगे।

**Explanation:** `flex-shrink: 1` items को equally shrink करता है जब space कम होती है।

---

## Step 7: Flex-Shrink - Different Values

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        .container {
            display: flex;
            border: 2px solid black;
            height: 200px;
            width: 300px;
            background-color: #f0f0f0;
        }
        .item {
            background-color: lightcyan;
            padding: 20px;
            margin: 5px;
            border: 1px solid teal;
            flex-basis: 150px;
        }
        .item1 { flex-shrink: 1; }
        .item2 { flex-shrink: 0; }
        .item3 { flex-shrink: 2; }
    </style>
</head>
<body>
    <div class="container">
        <div class="item item1">Shrink 1</div>
        <div class="item item2">No Shrink</div>
        <div class="item item3">Shrink 2</div>
    </div>
</body>
</html>
```

**Test करें:** Middle item अपना size maintain करेगा, अन्य shrink होंगे।

**Explanation:** `flex-shrink: 0` item को shrink नहीं होने देता। `flex-shrink: 2` double rate से shrink करता है।

---

## Step 8: Order Property - Basic

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        .container {
            display: flex;
            border: 2px solid black;
            height: 200px;
            width: 500px;
            background-color: #f0f0f0;
        }
        .item {
            background-color: lightblue;
            padding: 20px;
            margin: 5px;
            border: 1px solid blue;
        }
        .item1 { order: 3; }
        .item2 { order: 1; }
        .item3 { order: 2; }
    </style>
</head>
<body>
    <div class="container">
        <div class="item item1">Item 1</div>
        <div class="item item2">Item 2</div>
        <div class="item item3">Item 3</div>
    </div>
</body>
</html>
```

**Test करें:** Items का order change हो जाएगा: Item 2, Item 3, Item 1।

**Explanation:** `order` property items के visual order को change करती है। Lower values पहले आते हैं।

---

## Step 9: Order - Negative Values

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        .container {
            display: flex;
            border: 2px solid black;
            height: 200px;
            width: 500px;
            background-color: #f0f0f0;
        }
        .item {
            background-color: lightgreen;
            padding: 20px;
            margin: 5px;
            border: 1px solid green;
        }
        .item2 { order: -1; }
        .item4 { order: 1; }
    </style>
</head>
<body>
    <div class="container">
        <div class="item">Item 1</div>
        <div class="item item2">Item 2</div>
        <div class="item">Item 3</div>
        <div class="item item4">Item 4</div>
    </div>
</body>
</html>
```

**Test करें:** Item 2 सबसे पहले, Item 4 सबसे अंत में दिखेगा।

**Explanation:** Negative order values items को beginning में ले जाती हैं। Default order value 0 है।

---

## Step 10: Align-Self - Center

Individual item की alignment change करते हैं:

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        .container {
            display: flex;
            border: 2px solid black;
            height: 200px;
            width: 500px;
            background-color: #f0f0f0;
        }
        .item {
            background-color: lightcoral;
            padding: 20px;
            margin: 5px;
            border: 1px solid red;
        }
        .item2 {
            align-self: center;
            background-color: gold;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="item">Item 1</div>
        <div class="item item2">Center</div>
        <div class="item">Item 3</div>
    </div>
</body>
</html>
```

**Test करें:** Middle item vertically center में align होगा।

**Explanation:** `align-self: center` individual item को cross axis पर center align करता है।

---

## Step 11: Align-Self - Flex-Start

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        .container {
            display: flex;
            align-items: center;
            border: 2px solid black;
            height: 200px;
            width: 500px;
            background-color: #f0f0f0;
        }
        .item {
            background-color: lightblue;
            padding: 20px;
            margin: 5px;
            border: 1px solid blue;
        }
        .item2 {
            align-self: flex-start;
            background-color: lightgreen;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="item">Item 1</div>
        <div class="item item2">Top</div>
        <div class="item">Item 3</div>
    </div>
</body>
</html>
```

**Test করें:** Middle item top में align होगा जबकि बाकी center में रहेंगे।

**Explanation:** `align-self` parent के `align-items` को override कर देता है।

---

## Step 12: Align-Self - Flex-End

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        .container {
            display: flex;
            align-items: flex-start;
            border: 2px solid black;
            height: 200px;
            width: 500px;
            background-color: #f0f0f0;
        }
        .item {
            background-color: lightyellow;
            padding: 20px;
            margin: 5px;
            border: 1px solid orange;
        }
        .item3 {
            align-self: flex-end;
            background-color: lightpink;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="item">Item 1</div>
        <div class="item">Item 2</div>
        <div class="item item3">Bottom</div>
    </div>
</body>
</html>
```

**Test करें:** Last item bottom में align होगा।

**Explanation:** `align-self: flex-end` item को cross axis के end में align करता है।

---

## Step 13: Align-Self - Stretch

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        .container {
            display: flex;
            align-items: center;
            border: 2px solid black;
            height: 200px;
            width: 500px;
            background-color: #f0f0f0;
        }
        .item {
            background-color: lightcyan;
            padding: 20px;
            margin: 5px;
            border: 1px solid teal;
        }
        .item2 {
            align-self: stretch;
            background-color: lavender;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="item">Item 1</div>
        <div class="item item2">Stretch</div>
        <div class="item">Item 3</div>
    </div>
</body>
</html>
```

**Test करें:** Middle item full container height ले लेगा।

**Explanation:** `align-self: stretch` item को cross axis में full size तक stretch करता है।

---

## Step 14: Align-Self - Baseline

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        .container {
            display: flex;
            align-items: center;
            border: 2px solid black;
            height: 200px;
            width: 500px;
            background-color: #f0f0f0;
        }
        .item {
            background-color: lightgreen;
            padding: 20px;
            margin: 5px;
            border: 1px solid green;
        }
        .item1 { font-size: 12px; }
        .item2 { 
            font-size: 24px;
            align-self: baseline;
            background-color: gold;
        }
        .item3 { font-size: 18px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="item item1">Small Text</div>
        <div class="item item2">Large Text</div>
        <div class="item item3">Medium Text</div>
    </div>
</body>
</html>
```

**Test करें:** सभी items की text baseline align होगी।

**Explanation:** `align-self: baseline` item को text baseline के according align करता है।

---

## Step 15: Flex Shorthand Property

Flex shorthand का use करते हैं:

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        .container {
            display: flex;
            border: 2px solid black;
            height: 200px;
            width: 500px;
            background-color: #f0f0f0;
        }
        .item {
            background-color: lightblue;
            padding: 20px;
            margin: 5px;
            border: 1px solid blue;
        }
        .item1 { flex: 1; }
        .item2 { flex: 2; }
        .item3 { flex: 1; }
    </style>
</head>
<body>
    <div class="container">
        <div class="item item1">Flex 1</div>
        <div class="item item2">Flex 2</div>
        <div class="item item3">Flex 1</div>
    </div>
</body>
</html>
```

**Test करें:** Items 1:2:1 ratio में space ลेंगे।

**Explanation:** `flex: 1` shorthand है `flex: 1 1 0` के लिए (grow: 1, shrink: 1, basis: 0)।

---

## Step 16: Flex Shorthand - Complete

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        .container {
            display: flex;
            border: 2px solid black;
            height: 200px;
            width: 400px;
            background-color: #f0f0f0;
        }
        .item {
            background-color: lightcoral;
            padding: 20px;
            margin: 5px;
            border: 1px solid red;
        }
        .item1 { flex: 1 0 50px; }
        .item2 { flex: 2 1 100px; }
        .item3 { flex: 1 2 75px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="item item1">1 0 50px</div>
        <div class="item item2">2 1 100px</div>
        <div class="item item3">1 2 75px</div>
    </div>
</body>
</html>
```

**Test करें:** Items अलग-अलग grow, shrink, और basis values के साथ behave करेंगे।

**Explanation:** `flex: grow shrink basis` complete shorthand syntax है।

---

## Step 17: Real-World Example - Responsive Card Layout

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        .card-container {
            display: flex;
            gap: 20px;
            padding: 20px;
            background-color: #f5f5f5;
        }
        
        .card {
            background-color: white;
            border-radius: 10px;
            padding: 20px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            border: 1px solid #ddd;
        }
        
        .featured-card {
            flex: 2;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            order: -1;
        }
        
        .regular-card {
            flex: 1;
        }
        
        .small-card {
            flex: 0 0 150px;
            align-self: flex-start;
        }
    </style>
</head>
<body>
    <div class="card-container">
        <div class="card regular-card">
            <h3>Regular Card</h3>
            <p>यह एक normal card है।</p>
        </div>
        
        <div class="card featured-card">
            <h3>Featured Card</h3>
            <p>यह featured card है जो double space लेता है और first position में आता है।</p>
        </div>
        
        <div class="card small-card">
            <h3>Small</h3>
            <p>Fixed width card।</p>
        </div>
        
        <div class="card regular-card">
            <h3>Another Card</h3>
            <p>एक और regular card।</p>
        </div>
    </div>
</body>
</html>
```

**Test करें:** Featured card सबसे पहले और double width में दिखेगा।

---

## Step 18: Real-World Example - Dashboard Layout

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        .dashboard {
            display: flex;
            min-height: 100vh;
            margin: 0;
            font-family: Arial, sans-serif;
        }
        
        .sidebar {
            flex: 0 0 250px;
            background-color: #2c3e50;
            color: white;
            padding: 20px;
        }
        
        .main-content {
            flex: 1;
            display: flex;
            flex-direction: column;
        }
        
        .header {
            flex: 0 0 60px;
            background-color: #34495e;
            color: white;
            display: flex;
            align-items: center;
            padding: 0 20px;
        }
        
        .content-area {
            flex: 1;
            display: flex;
            gap: 20px;
            padding: 20px;
        }
        
        .main-section {
            flex: 2;
            background-color: white;
            border-radius: 8px;
            padding: 20px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        
        .side-panel {
            flex: 1;
            background-color: #ecf0f1;
            border-radius: 8px;
            padding: 20px;
            align-self: flex-start;
        }
        
        body { margin: 0; }
    </style>
</head>
<body>
    <div class="dashboard">
        <aside class="sidebar">
            <h3>Dashboard</h3>
            <nav>
                <p>• Home</p>
                <p>• Analytics</p>
                <p>• Settings</p>
            </nav>
        </aside>
        
        <div class="main-content">
            <header class="header">
                <h2>Dashboard Header</h2>
            </header>
            
            <div class="content-area">
                <main class="main-section">
                    <h3>Main Content</h3>
                    <p>यह main content area है जो maximum space लेता है।</p>
                </main>
                
                <aside class="side-panel">
                    <h4>Side Panel</h4>
                    <p>यह side panel है।</p>
                </aside>
            </div>
        </div>
    </div>
</body>
</html>
```

**Test करें:** Complete dashboard layout दिखेगा।

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
            margin: 30px 0;
            padding: 25px;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        
        h1, h2, h3 {
            color: #333;
            margin-bottom: 15px;
        }
        
        h2 {
            border-bottom: 3px solid #007bff;
            padding-bottom: 8px;
        }
        
        /* Flex Basis Demos */
        .basis-demo {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }
        
        .basis-container {
            display: flex;
            border: 2px solid #333;
            height: 100px;
            background-color: #f8f9fa;
            padding: 10px;
        }
        
        .basis-item {
            background-color: #007bff;
            color: white;
            padding: 15px;
            margin: 5px;
            border-radius: 5px;
            text-align: center;
        }
        
        .basis-1 { flex-basis: 50px; }
        .basis-2 { flex-basis: 150px; }
        .basis-3 { flex-basis: 100px; }
        
        /* Flex Grow Demos */
        .grow-demo {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }
        
        .grow-container {
            display: flex;
            border: 2px solid #28a745;
            height: 100px;
            background-color: #f8fff8;
            padding: 10px;
        }
        
        .grow-item {
            background-color: #28a745;
            color: white;
            padding: 15px;
            margin: 5px;
            border-radius: 5px;
            text-align: center;
        }
        
        .grow-1 { flex-grow: 1; }
        .grow-2 { flex-grow: 2; }
        .grow-3 { flex-grow: 3; }
        
        /* Flex Shrink Demos */
        .shrink-demo {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }
        
        .shrink-container {
            display: flex;
            border: 2px solid #dc3545;
            height: 100px;
            width: 300px;
            background-color: #fff8f8;
            padding: 10px;
        }
        
        .shrink-item {
            background-color: #dc3545;
            color: white;
            padding: 15px;
            margin: 5px;
            border-radius: 5px;
            text-align: center;
            flex-basis: 150px;
        }
        
        .shrink-0 { flex-shrink: 0; }
        .shrink-1 { flex-shrink: 1; }
        .shrink-2 { flex-shrink: 2; }
        
        /* Order Demos */
        .order-demo {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }
        
        .order-container {
            display: flex;
            border: 2px solid #6f42c1;
            height: 100px;
            background-color: #f8f6ff;
            padding: 10px;
        }
        
        .order-item {
            background-color: #6f42c1;
            color: white;
            padding: 15px;
            margin: 5px;
            border-radius: 5px;
            text-align: center;
            flex: 1;
        }
        
        .order-3 { order: 3; }
        .order-1 { order: 1; }
        .order-2 { order: 2; }
        .order-minus { order: -1; }
        
        /* Align Self Demos */
        .align-self-demo {
            display: flex;
            gap: 20px;
            flex-wrap: wrap;
        }
        
        .align-self-container {
            display: flex;
            border: 2px solid #fd7e14;
            height: 150px;
            width: 200px;
            background-color: #fff8f5;
            padding: 10px;
        }
        
        .align-self-item {
            background-color: #fd7e14;
            color: white;
            padding: 10px;
            margin: 5px;
            border-radius: 5px;
            text-align: center;
            flex: 1;
        }
        
        .as-stretch { align-self: stretch; }
        .as-center { align-self: center; }
        .as-start { align-self: flex-start; }
        .as-end { align-self: flex-end; }
        .as-baseline { align-self: baseline; }
        
        /* Demo Labels */
        .demo-label {
            background-color: #495057;
            color: white;
            padding: 8px 12px;
            border-radius: 5px;
            font-size: 14px;
            font-weight: bold;
            margin-bottom: 10px;
            display: inline-block;
        }
        
        /* Practical Examples */
        .card-layout {
            display: flex;
            gap: 20px;
            padding: 20px;
            background-color: #f8f9fa;
            border-radius: 10px;
            margin: 20px 0;
        }
        
        .demo-card {
            background-color: white;
            border-radius: 8px;
            padding: 20px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            border: 1px solid #dee2e6;
        }
        
        .featured-demo {
            flex: 2;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            order: -1;
        }
        
        .regular-demo {
            flex: 1;
        }
        
        .small-demo {
            flex: 0 0 150px;
            align-self: flex-start;
        }
        
        .dashboard-demo {
            display: flex;
            min-height: 300px;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            margin: 20px 0;
        }
        
        .sidebar-demo {
            flex: 0 0 200px;
            background-color: #2c3e50;
            color: white;
            padding: 20px;
        }
        
        .content-demo {
            flex: 1;
            display: flex;
            flex-direction: column;
        }
        
        .header-demo {
            flex: 0 0 50px;
            background-color: #34495e;
            color: white;
            display: flex;
            align-items: center;
            padding: 0 20px;
        }
        
        .main-demo {
            flex: 1;
            display: flex;
            gap: 15px;
            padding: 20px;
            background-color: #ecf0f1;
        }
        
        .content-main {
            flex: 2;
            background-color: white;
            border-radius: 5px;
            padding: 15px;
        }
        
        .content-side {
            flex: 1;
            background-color: #d5dbdb;
            border-radius: 5px;
            padding: 15px;
            align-self: flex-start;
        }
        
        /* Interactive Elements */
        .flex-shorthand {
            display: flex;
            gap: 10px;
            border: 2px solid #17a2b8;
            padding: 15px;
            background-color: #f0f9ff;
            border-radius: 8px;
            margin: 15px 0;
        }
        
        .flex-item {
            background-color: #17a2b8;
            color: white;
            padding: 15px;
            border-radius: 5px;
            text-align: center;
        }
        
        .flex-1-0-50 { flex: 1 0 50px; }
        .flex-2-1-100 { flex: 2 1 100px; }
        .flex-1-2-75 { flex: 1 2 75px; }
        
        /* Comparison Table */
        .property-table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
            background-color: white;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        
        .property-table th,
        .property-table td {
            border: 1px solid #dee2e6;
            padding: 12px;
            text-align: left;
        }
        
        .property-table th {
            background-color: #f8f9fa;
            font-weight: bold;
            color: #495057;
        }
        
        .property-table tr:nth-child(even) {
            background-color: #f8f9fa;
        }
        
        /* Responsive Design */
        @media (max-width: 768px) {
            .align-self-demo,
            .card-layout,
            .main-demo {
                flex-direction: column;
            }
            
            .dashboard-demo {
                flex-direction: column;
                min-height: auto;
            }
            
            .sidebar-demo {
                flex: 0 0 auto;
            }
        }
    </style>
</head>
<body>
    <h1 style="text-align: center; color: #007bff; margin-bottom: 30px;">CSS Flexbox Child Properties</h1>
    
    <!-- Flex Basis Section -->
    <div class="section">
        <h2>1. Flex-Basis Property</h2>
        <p><strong>Purpose:</strong> Item की initial main size (width) set करता है।</p>
        
        <div class="basis-demo">
            <div>
                <div class="demo-label">Different Flex-Basis Values</div>
                <div class="basis-container">
                    <div class="basis-item basis-1">50px</div>
                    <div class="basis-item basis-2">150px</div>
                    <div class="basis-item basis-3">100px</div>
                </div>
            </div>
            
            <div>
                <div class="demo-label">Auto Flex-Basis</div>
                <div class="basis-container">
                    <div class="basis-item" style="flex-basis: auto;">Auto Width</div>
                    <div class="basis-item" style="flex-basis: auto;">Different Content Length</div>
                    <div class="basis-item" style="flex-basis: auto;">Short</div>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Flex Grow Section -->
    <div class="section">
        <h2>2. Flex-Grow Property</h2>
        <p><strong>Purpose:</strong> Available space को items में distribute करता है।</p>
        
        <div class="grow-demo">
            <div>
                <div class="demo-label">Equal Grow (All flex-grow: 1)</div>
                <div class="grow-container">
                    <div class="grow-item grow-1">Grow 1</div>
                    <div class="grow-item grow-1">Grow 1</div>
                    <div class="grow-item grow-1">Grow 1</div>
                </div>
            </div>
            
            <div>
                <div class="demo-label">Different Grow Values</div>
                <div class="grow-container">
                    <div class="grow-item grow-1">Grow 1</div>
                    <div class="grow-item grow-2">Grow 2</div>
                    <div class="grow-item grow-3">Grow 3</div>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Flex Shrink Section -->
    <div class="section">
        <h2>3. Flex-Shrink Property</h2>
        <p><strong>Purpose:</strong> Space कम होने पर items कैसे shrink होंगे।</p>
        
        <div class="shrink-demo">
            <div>
                <div class="demo-label">No Shrink vs Normal Shrink</div>
                <div class="shrink-container">
                    <div class="shrink-item shrink-0">No Shrink</div>
                    <div class="shrink-item shrink-1">Shrink 1</div>
                    <div class="shrink-item shrink-1">Shrink 1</div>
                </div>
            </div>
            
            <div>
                <div class="demo-label">Different Shrink Values</div>
                <div class="shrink-container">
                    <div class="shrink-item shrink-1">Shrink 1</div>
                    <div class="shrink-item shrink-2">Shrink 2</div>
                    <div class="shrink-item shrink-1">Shrink 1</div>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Order Section -->
    <div class="section">
        <h2>4. Order Property</h2>
        <p><strong>Purpose:</strong> Items का visual order change करता है।</p>
        
        <div class="order-demo">
            <div>
                <div class="demo-label">Reordered Items (HTML: 1,2,3 → Display: 2,3,1)</div>
                <div class="order-container">
                    <div class="order-item order-3">Item 1 (order: 3)</div>
                    <div class="order-item order-1">Item 2 (order: 1)</div>
                    <div class="order-item order-2">Item 3 (order: 2)</div>
                </div>
            </div>
            
            <div>
                <div class="demo-label">Negative Order</div>
                <div class="order-container">
                    <div class="order-item">Item 1</div>
                    <div class="order-item order-minus">Item 2 (order: -1)</div>
                    <div class="order-item">Item 3</div>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Align Self Section -->
    <div class="section">
        <h2>5. Align-Self Property</h2>
        <p><strong>Purpose:</strong> Individual item की cross axis alignment control करता है।</p>
        
        <div class="align-self-demo">
            <div>
                <div class="demo-label">Stretch</div>
                <div class="align-self-container">
                    <div class="align-self-item as-stretch">Stretch</div>
                </div>
            </div>
            
            <div>
                <div class="demo-label">Center</div>
                <div class="align-self-container">
                    <div class="align-self-item as-center">Center</div>
                </div>
            </div>
            
            <div>
                <div class="demo-label">Flex-Start</div>
                <div class="align-self-container">
                    <div class="align-self-item as-start">Start</div>
                </div>
            </div>
            
            <div>
                <div class="demo-label">Flex-End</div>
                <div class="align-self-container">
                    <div class="align-self-item as-end">End</div>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Flex Shorthand Section -->
    <div class="section">
        <h2>6. Flex Shorthand Property</h2>
        <p><strong>Syntax:</strong> <code>flex: grow shrink basis</code></p>
        
        <div>
            <div class="demo-label">Complete Flex Shorthand</div>
            <div class="flex-shorthand">
                <div class="flex-item flex-1-0-50">flex: 1 0 50px</div>
                <div class="flex-item flex-2-1-100">flex: 2 1 100px</div>
                <div class="flex-item flex-1-2-75">flex: 1 2 75px</div>
            </div>
        </div>
        
        <div>
            <div class="demo-label">Common Flex Values</div>
            <div class="flex-shorthand">
                <div class="flex-item" style="flex: 1;">flex: 1</div>
                <div class="flex-item" style="flex: auto;">flex: auto</div>
                <div class="flex-item" style="flex: none;">flex: none</div>
            </div>
        </div>
    </div>
    
    <!-- Practical Examples Section -->
    <div class="section">
        <h2>7. Practical Examples</h2>
        
        <h3>Responsive Card Layout</h3>
        <div class="card-layout">
            <div class="demo-card regular-demo">
                <h4>Regular Card</h4>
                <p>Normal flexible card।</p>
            </div>
            
            <div class="demo-card featured-demo">
                <h4>Featured Card</h4>
                <p>यह featured card है जो double space लेता है और first position में आता है (order: -1)।</p>
            </div>
            
            <div class="demo-card small-demo">
                <h4>Fixed Width</h4>
                <p>150px fixed width card।</p>
            </div>
            
            <div class="demo-card regular-demo">
                <h4>Another Card</h4>
                <p>एक और flexible card।</p>
            </div>
        </div>
        
        <h3>Dashboard Layout</h3>
        <div class="dashboard-demo">
            <aside class="sidebar-demo">
                <h4>Sidebar</h4>
                <p>Fixed width sidebar (flex: 0 0 200px)</p>
            </aside>
            
            <div class="content-demo">
                <header class="header-demo">
                    <h4>Header (flex: 0 0 50px)</h4>
                </header>
                
                <div class="main-demo">
                    <main class="content-main">
                        <h4>Main Content</h4>
                        <p>Flexible main area (flex: 2)</p>
                    </main>
                    
                    <aside class="content-side">
                        <h4>Side Panel</h4>
                        <p>Side content (flex: 1)</p>
                    </aside>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Properties Summary Table -->
    <div class="section">
        <h2>8. Properties Summary</h2>
        <table class="property-table">
            <thead>
                <tr>
                    <th>Property</th>
                    <th>Purpose</th>
                    <th>Default Value</th>
                    <th>Common Values</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>flex-basis</strong></td>
                    <td>Initial main size set करता है</td>
                    <td>auto</td>
                    <td>auto, 0, 100px, 50%</td>
                </tr>
                <tr>
                    <td><strong>flex-grow</strong></td>
                    <td>Available space को distribute करता है</td>
                    <td>0</td>
                    <td>0, 1, 2, 3</td>
                </tr>
                <tr>
                    <td><strong>flex-shrink</strong></td>
                    <td>Space कम होने पर shrinking control करता है</td>
                    <td>1</td>
                    <td>0, 1, 2</td>
                </tr>
                <tr>
                    <td><strong>order</strong></td>
                    <td>Visual order change करता है</td>
                    <td>0</td>
                    <td>-1, 0, 1, 2</td>
                </tr>
                <tr>
                    <td><strong>align-self</strong></td>
                    <td>Individual cross axis alignment</td>
                    <td>auto</td>
                    <td>stretch, center, flex-start, flex-end</td>
                </tr>
                <tr>
                    <td><strong>flex</strong></td>
                    <td>Shorthand for grow, shrink, basis</td>
                    <td>0 1 auto</td>
                    <td>1, auto, none, 1 0 50px</td>
                </tr>
            </tbody>
        </table>
        
        <div style="background-color: #e7f3ff; padding: 20px; border-radius: 10px; margin-top: 20px; border-left: 4px solid #007bff;">
            <h3>Key Points:</h3>
            <ul style="margin-left: 20px; line-height: 2;">
                <li><strong>flex-grow</strong> extra space को distribute करता है</li>
                <li><strong>flex-shrink</strong> space कम होने पर items को shrink करता है</li>
                <li><strong>flex-basis</strong> starting size set करता है</li>
                <li><strong>order</strong> HTML structure change किए बिना visual order change करता है</li>
                <li><strong>align-self</strong> parent के align-items को override करता है</li>
                <li><strong>flex: 1</strong> सबसे common shorthand है equal distribution के लिए</li>
            </ul>
        </div>
    </div>
</body>
</html>
```

## Summary

### **1. Flex-Basis**
- Item की initial main size (width) set करता है
- Width property को override करता है
- Values: `auto`, `0`, `100px`, `50%`, etc.

### **2. Flex-Grow**
- Available extra space को items में distribute करता है
- Default: `0` (no growing)
- Ratio के according space allocation (1:2:1 means equal:double:equal)

### **3. Flex-Shrink**
- Space कम होने पर items कैसे shrink होंगे
- Default: `1` (normal shrinking)
- `0` means no shrinking, higher values = more shrinking

### **4. Order**
- Items का visual order change करता है
- Default: `0`
- Lower values पहले आते हैं, negative values allowed
- HTML structure change किए बिना reordering

### **5. Align-Self**
- Individual item की cross axis alignment
- Parent के `align-items` को override करता है
- Values: `stretch`, `center`, `flex-start`, `flex-end`, `baseline`

### **6. Flex Shorthand**
- **Syntax:** `flex: grow shrink basis`
- **Common patterns:**
  - `flex: 1` = `flex: 1 1 0%` (equal distribution)
  - `flex: auto` = `flex: 1 1 auto` (grow based on content)
  - `flex: none` = `flex: 0 0 auto` (no flexibility)

### **7. Best Practices**
1. **Equal distribution** के लिए `flex: 1` use करें
2. **Fixed width** के लिए `flex: 0 0 width` use करें
3. **Content-based sizing** के लिए `flex: auto` use करें
4. **Visual reordering** के लिए `order` property use करें
5. **Individual alignment** के लिए `align-self` use करें

यह tutorial आपको flexbox child properties की complete mastery देता है!