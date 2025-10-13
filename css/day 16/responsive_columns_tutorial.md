# Responsive Column Layouts Tutorial

## Introduction
इस tutorial में हम सीखेंगे कि different devices के लिए responsive column layouts कैसे बनाएं। हम CSS Grid और Flexbox का use करके columns को automatically adjust करेंगे।

---

## Step 1: Basic HTML Structure Setup

सबसे पहले basic HTML structure बनाते हैं:

```html
<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Responsive Columns</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: Arial, sans-serif;
            padding: 20px;
            background-color: #f4f4f4;
        }
        
        .column {
            background-color: #007bff;
            color: white;
            padding: 20px;
            margin: 10px;
            border-radius: 8px;
            text-align: center;
        }
    </style>
</head>
<body>
    <h1>Responsive Column Layout</h1>
    <div class="container">
        <div class="column">Column 1</div>
        <div class="column">Column 2</div>
        <div class="column">Column 3</div>
        <div class="column">Column 4</div>
    </div>
</body>
</html>
```

**Test करें:** Columns vertical stack में दिखेंगे।

**Explanation:** Basic structure बनाया है columns के साथ। अभी तक कोई responsive behavior नहीं है।

---

## Step 2: Mobile First - Single Column (XS)

Mobile के लिए single column layout बनाते हैं:

```html
<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mobile First Columns</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: Arial, sans-serif;
            padding: 20px;
            background-color: #f4f4f4;
        }
        
        .container {
            display: grid;
            gap: 15px;
            grid-template-columns: 1fr;
        }
        
        .column {
            background-color: #007bff;
            color: white;
            padding: 20px;
            border-radius: 8px;
            text-align: center;
        }
    </style>
</head>
<body>
    <h1>Mobile: 1 Column</h1>
    <div class="container">
        <div class="column">Column 1</div>
        <div class="column">Column 2</div>
        <div class="column">Column 3</div>
        <div class="column">Column 4</div>
    </div>
</body>
</html>
```

**Test करें:** Mobile में 1 column दिखेगा।

**Explanation:** `grid-template-columns: 1fr` से single column layout बनता है। यह mobile-first approach है।

---

## Step 3: Add SM Breakpoint - 2 Columns

Mobile landscape के लिए 2 columns add करते हैं:

```html
<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SM Breakpoint</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: Arial, sans-serif;
            padding: 20px;
            background-color: #f4f4f4;
        }
        
        .info {
            background-color: #fff;
            padding: 15px;
            border-radius: 8px;
            margin-bottom: 20px;
            text-align: center;
        }
        
        .container {
            display: grid;
            gap: 15px;
            grid-template-columns: 1fr;
        }
        
        .column {
            background-color: #007bff;
            color: white;
            padding: 20px;
            border-radius: 8px;
            text-align: center;
        }
        
        /* XS: Mobile Portrait (Default - 1 column) */
        .info::before {
            content: "📱 XS: 1 Column (0-575px)";
            font-weight: bold;
        }
        
        /* SM: Mobile Landscape (576px+) - 2 columns */
        @media (min-width: 576px) {
            .container {
                grid-template-columns: repeat(2, 1fr);
            }
            .info::before {
                content: "📱 SM: 2 Columns (576px+)";
            }
        }
    </style>
</head>
<body>
    <div class="info"></div>
    <div class="container">
        <div class="column">Column 1</div>
        <div class="column">Column 2</div>
        <div class="column">Column 3</div>
        <div class="column">Column 4</div>
    </div>
</body>
</html>
```

**Test करें:** 576px से बड़ी screen पर 2 columns दिखेंगे।

**Explanation:** `@media (min-width: 576px)` से 576px या बड़ी screens के लिए 2 columns set होते हैं।

---

## Step 4: Add MD Breakpoint - 3 Columns

Tablet के लिए 3 columns add करते हैं:

```html
<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MD Breakpoint</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: Arial, sans-serif;
            padding: 20px;
            background-color: #f4f4f4;
        }
        
        .info {
            background-color: #fff;
            padding: 15px;
            border-radius: 8px;
            margin-bottom: 20px;
            text-align: center;
            font-weight: bold;
        }
        
        .container {
            display: grid;
            gap: 15px;
            grid-template-columns: 1fr;
        }
        
        .column {
            background-color: #28a745;
            color: white;
            padding: 20px;
            border-radius: 8px;
            text-align: center;
        }
        
        /* XS: 1 column */
        .info::before {
            content: "📱 XS: 1 Column";
        }
        
        /* SM: 2 columns */
        @media (min-width: 576px) {
            .container {
                grid-template-columns: repeat(2, 1fr);
            }
            .info::before {
                content: "📱 SM: 2 Columns";
            }
        }
        
        /* MD: 3 columns */
        @media (min-width: 768px) {
            .container {
                grid-template-columns: repeat(3, 1fr);
            }
            .info::before {
                content: "📱 MD: 3 Columns";
            }
        }
    </style>
</head>
<body>
    <div class="info"></div>
    <div class="container">
        <div class="column">Column 1</div>
        <div class="column">Column 2</div>
        <div class="column">Column 3</div>
        <div class="column">Column 4</div>
        <div class="column">Column 5</div>
        <div class="column">Column 6</div>
    </div>
</body>
</html>
```

**Test करें:** 768px से बड़ी screen पर 3 columns दिखेंगे।

**Explanation:** `@media (min-width: 768px)` tablet और बड़ी screens के लिए 3 columns set करता है।

---

## Step 5: Add LG & XL Breakpoints - 4 & 6 Columns

Desktop के लिए 4 और 6 columns add करते हैं:

```html
<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LG & XL Breakpoints</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: Arial, sans-serif;
            padding: 20px;
            background-color: #f4f4f4;
        }
        
        .info {
            background-color: #fff;
            padding: 15px;
            border-radius: 8px;
            margin-bottom: 20px;
            text-align: center;
            font-weight: bold;
            font-size: 18px;
        }
        
        .container {
            display: grid;
            gap: 15px;
            grid-template-columns: 1fr;
        }
        
        .column {
            background-color: #dc3545;
            color: white;
            padding: 20px;
            border-radius: 8px;
            text-align: center;
            font-weight: bold;
        }
        
        /* XS: 1 column */
        .info::before {
            content: "📱 XS: 1 Column";
        }
        
        /* SM: 2 columns */
        @media (min-width: 576px) {
            .container {
                grid-template-columns: repeat(2, 1fr);
            }
            .info::before {
                content: "📱 SM: 2 Columns";
            }
        }
        
        /* MD: 3 columns */
        @media (min-width: 768px) {
            .container {
                grid-template-columns: repeat(3, 1fr);
            }
            .info::before {
                content: "📱 MD: 3 Columns";
            }
        }
        
        /* LG: 4 columns */
        @media (min-width: 992px) {
            .container {
                grid-template-columns: repeat(4, 1fr);
            }
            .info::before {
                content: "💻 LG: 4 Columns";
            }
        }
        
        /* XL: 6 columns */
        @media (min-width: 1200px) {
            .container {
                grid-template-columns: repeat(6, 1fr);
            }
            .info::before {
                content: "💻 XL: 6 Columns";
            }
        }
    </style>
</head>
<body>
    <div class="info"></div>
    <div class="container">
        <div class="column">1</div>
        <div class="column">2</div>
        <div class="column">3</div>
        <div class="column">4</div>
        <div class="column">5</div>
        <div class="column">6</div>
        <div class="column">7</div>
        <div class="column">8</div>
        <div class="column">9</div>
        <div class="column">10</div>
        <div class="column">11</div>
        <div class="column">12</div>
    </div>
</body>
</html>
```

**Test करें:** Desktop पर 4-6 columns दिखेंगे।

**Explanation:** LG (992px) पर 4 columns और XL (1200px) पर 6 columns होते हैं।

---

## Step 6: Using Max-Width - Desktop First Approach

Desktop-first approach के साथ max-width का use करते हैं:

```html
<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Desktop First</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: Arial, sans-serif;
            padding: 20px;
            background-color: #e9ecef;
        }
        
        .info {
            background-color: #fff;
            padding: 15px;
            border-radius: 8px;
            margin-bottom: 20px;
            text-align: center;
            font-weight: bold;
        }
        
        /* Desktop First: Start with 4 columns */
        .container {
            display: grid;
            gap: 15px;
            grid-template-columns: repeat(4, 1fr);
        }
        
        .column {
            background-color: #6f42c1;
            color: white;
            padding: 20px;
            border-radius: 8px;
            text-align: center;
        }
        
        .info::before {
            content: "💻 Desktop: 4 Columns";
        }
        
        /* LG and down: 3 columns */
        @media (max-width: 1199.98px) {
            .container {
                grid-template-columns: repeat(3, 1fr);
            }
            .info::before {
                content: "💻 LG: 3 Columns";
            }
        }
        
        /* MD and down: 2 columns */
        @media (max-width: 991.98px) {
            .container {
                grid-template-columns: repeat(2, 1fr);
            }
            .info::before {
                content: "📱 MD: 2 Columns";
            }
        }
        
        /* SM and down: 1 column */
        @media (max-width: 767.98px) {
            .container {
                grid-template-columns: 1fr;
            }
            .info::before {
                content: "📱 Mobile: 1 Column";
            }
        }
    </style>
</head>
<body>
    <div class="info"></div>
    <div class="container">
        <div class="column">Column 1</div>
        <div class="column">Column 2</div>
        <div class="column">Column 3</div>
        <div class="column">Column 4</div>
        <div class="column">Column 5</div>
        <div class="column">Column 6</div>
        <div class="column">Column 7</div>
        <div class="column">Column 8</div>
    </div>
</body>
</html>
```

**Test करें:** Desktop से start करके mobile तक columns reduce होंगे।

**Explanation:** Desktop-first approach में `max-width` का use करते हैं। Desktop से mobile तक columns कम होते जाते हैं।

---

## Step 7: Specific Range - Min & Max Width Together

Specific range के लिए min और max width together use करते हैं:

```html
<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Specific Range</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: Arial, sans-serif;
            padding: 20px;
            background-color: #f8f9fa;
        }
        
        .info {
            background-color: #fff;
            padding: 15px;
            border-radius: 8px;
            margin-bottom: 20px;
            text-align: center;
            font-weight: bold;
        }
        
        .container {
            display: grid;
            gap: 15px;
            grid-template-columns: 1fr;
        }
        
        .column {
            background-color: #20c997;
            color: white;
            padding: 20px;
            border-radius: 8px;
            text-align: center;
        }
        
        /* XS: 0-575px - 1 column */
        @media (max-width: 575.98px) {
            .container {
                grid-template-columns: 1fr;
            }
            .info::before {
                content: "📱 XS (0-575px): 1 Column";
            }
        }
        
        /* SM: 576-767px - 2 columns */
        @media (min-width: 576px) and (max-width: 767.98px) {
            .container {
                grid-template-columns: repeat(2, 1fr);
            }
            .info::before {
                content: "📱 SM (576-767px): 2 Columns";
            }
        }
        
        /* MD: 768-991px - 3 columns */
        @media (min-width: 768px) and (max-width: 991.98px) {
            .container {
                grid-template-columns: repeat(3, 1fr);
            }
            .info::before {
                content: "📱 MD (768-991px): 3 Columns";
            }
        }
        
        /* LG: 992-1199px - 4 columns */
        @media (min-width: 992px) and (max-width: 1199.98px) {
            .container {
                grid-template-columns: repeat(4, 1fr);
            }
            .info::before {
                content: "💻 LG (992-1199px): 4 Columns";
            }
        }
        
        /* XL: 1200px+ - 5 columns */
        @media (min-width: 1200px) {
            .container {
                grid-template-columns: repeat(5, 1fr);
            }
            .info::before {
                content: "💻 XL (1200px+): 5 Columns";
            }
        }
    </style>
</head>
<body>
    <div class="info"></div>
    <div class="container">
        <div class="column">1</div>
        <div class="column">2</div>
        <div class="column">3</div>
        <div class="column">4</div>
        <div class="column">5</div>
        <div class="column">6</div>
        <div class="column">7</div>
        <div class="column">8</div>
        <div class="column">9</div>
        <div class="column">10</div>
    </div>
</body>
</html>
```

**Test करें:** हर specific range में exact columns दिखेंगे।

**Explanation:** `min-width` और `max-width` दोनों use करके specific ranges के लिए exact columns set कर सकते हैं।

---

## Step 8: Flexbox Approach - Responsive Columns

Flexbox के साथ responsive columns बनाते हैं:

```html
<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flexbox Columns</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: Arial, sans-serif;
            padding: 20px;
            background-color: #f4f4f4;
        }
        
        .container {
            display: flex;
            flex-wrap: wrap;
            gap: 15px;
        }
        
        .column {
            background-color: #fd7e14;
            color: white;
            padding: 20px;
            border-radius: 8px;
            text-align: center;
            flex: 1 1 100%;
        }
        
        /* SM: 2 columns */
        @media (min-width: 576px) {
            .column {
                flex: 1 1 calc(50% - 10px);
            }
        }
        
        /* MD: 3 columns */
        @media (min-width: 768px) {
            .column {
                flex: 1 1 calc(33.333% - 10px);
            }
        }
        
        /* LG: 4 columns */
        @media (min-width: 992px) {
            .column {
                flex: 1 1 calc(25% - 12px);
            }
        }
        
        /* XL: 6 columns */
        @media (min-width: 1200px) {
            .column {
                flex: 1 1 calc(16.666% - 13px);
            }
        }
    </style>
</head>
<body>
    <h2>Flexbox Responsive Columns</h2>
    <div class="container">
        <div class="column">Column 1</div>
        <div class="column">Column 2</div>
        <div class="column">Column 3</div>
        <div class="column">Column 4</div>
        <div class="column">Column 5</div>
        <div class="column">Column 6</div>
        <div class="column">Column 7</div>
        <div class="column">Column 8</div>
        <div class="column">Column 9</div>
        <div class="column">Column 10</div>
        <div class="column">Column 11</div>
        <div class="column">Column 12</div>
    </div>
</body>
</html>
```

**Test करें:** Flexbox के साथ columns responsive होंगे।

**Explanation:** Flexbox `flex-basis` के साथ percentage calculations से responsive columns बनते हैं।

---

## Step 9: Card Layout - Real World Example

Real-world card layout example बनाते हैं:

```html
<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Responsive Card Layout</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: Arial, sans-serif;
            padding: 20px;
            background-color: #e9ecef;
        }
        
        .container {
            display: grid;
            gap: 20px;
            grid-template-columns: 1fr;
            max-width: 1400px;
            margin: 0 auto;
        }
        
        .card {
            background-color: white;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            transition: transform 0.3s ease;
        }
        
        .card:hover {
            transform: translateY(-5px);
        }
        
        .card-image {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            height: 200px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 48px;
        }
        
        .card-content {
            padding: 20px;
        }
        
        .card-title {
            font-size: 20px;
            margin-bottom: 10px;
            color: #333;
        }
        
        .card-text {
            color: #666;
            line-height: 1.6;
        }
        
        /* SM: 2 columns */
        @media (min-width: 576px) {
            .container {
                grid-template-columns: repeat(2, 1fr);
            }
        }
        
        /* MD: 3 columns */
        @media (min-width: 768px) {
            .container {
                grid-template-columns: repeat(3, 1fr);
            }
        }
        
        /* LG: 4 columns */
        @media (min-width: 992px) {
            .container {
                grid-template-columns: repeat(4, 1fr);
            }
        }
    </style>
</head>
<body>
    <h1 style="text-align: center; margin-bottom: 30px;">Responsive Card Layout</h1>
    
    <div class="container">
        <div class="card">
            <div class="card-image">📱</div>
            <div class="card-content">
                <h3 class="card-title">Mobile Design</h3>
                <p class="card-text">Perfect responsive design for mobile devices.</p>
            </div>
        </div>
        
        <div class="card">
            <div class="card-image">💻</div>
            <div class="card-content">
                <h3 class="card-title">Desktop Ready</h3>
                <p class="card-text">Optimized for desktop and laptop screens.</p>
            </div>
        </div>
        
        <div class="card">
            <div class="card-image">⚡</div>
            <div class="card-content">
                <h3 class="card-title">Fast Loading</h3>
                <p class="card-text">Lightning fast performance on all devices.</p>
            </div>
        </div>
        
        <div class="card">
            <div class="card-image">🎨</div>
            <div class="card-content">
                <h3 class="card-title">Modern Design</h3>
                <p class="card-text">Beautiful and contemporary interface.</p>
            </div>
        </div>
        
        <div class="card">
            <div class="card-image">🔒</div>
            <div class="card-content">
                <h3 class="card-title">Secure</h3>
                <p class="card-text">Built with security best practices.</p>
            </div>
        </div>
        
        <div class="card">
            <div class="card-image">🌐</div>
            <div class="card-content">
                <h3 class="card-title">Cross Browser</h3>
                <p class="card-text">Works on all modern browsers.</p>
            </div>
        </div>
        
        <div class="card">
            <div class="card-image">📊</div>
            <div class="card-content">
                <h3 class="card-title">Analytics</h3>
                <p class="card-text">Detailed analytics and insights.</p>
            </div>
        </div>
        
        <div class="card">
            <div class="card-image">🚀</div>
            <div class="card-content">
                <h3 class="card-title">Performance</h3>
                <p class="card-text">Optimized for best performance.</p>
            </div>
        </div>
    </div>
</body>
</html>
```

**Test करें:** Cards responsive grid में arrange होंगे।

---

## Step 10: Product Grid - E-commerce Layout

E-commerce product grid बनाते हैं:

```html
<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Product Grid</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: Arial, sans-serif;
            padding: 20px;
            background-color: #f8f9fa;
        }
        
        .product-grid {
            display: grid;
            gap: 20px;
            grid-template-columns: 1fr;
        }
        
        .product {
            background-color: white;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        
        .product-image {
            background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
            height: 200px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 48px;
        }
        
        .product-info {
            padding: 15px;
        }
        
        .product-name {
            font-size: 18px;
            font-weight: bold;
            color: #333;
            margin-bottom: 8px;
        }
        
        .product-price {
            font-size: 20px;
            color: #28a745;
            font-weight: bold;
        }
        
        /* XS: Mobile Portrait - 1 column */
        @media (max-width: 575.98px) {
            .product-grid {
                grid-template-columns: 1fr;
            }
        }
        
        /* SM: Mobile Landscape - 2 columns */
        @media (min-width: 576px) and (max-width: 767.98px) {
            .product-grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }
        
        /* MD: Tablet - 3 columns */
        @media (min-width: 768px) and (max-width: 991.98px) {
            .product-grid {
                grid-template-columns: repeat(3, 1fr);
            }
        }
        
        /* LG: Desktop - 4 columns */
        @media (min-width: 992px) and (max-width: 1199.98px) {
            .product-grid {
                grid-template-columns: repeat(4, 1fr);
            }
        }
        
        /* XL: Large Desktop - 5 columns */
        @media (min-width: 1200px) {
            .product-grid {
                grid-template-columns: repeat(5, 1fr);
            }
        }
    </style>
</head>
<body>
    <h1 style="text-align: center; margin-bottom: 30px;">Product Grid</h1>
    
    <div class="product-grid">
        <div class="product">
            <div class="product-image">👕</div>
            <div class="product-info">
                <div class="product-name">T-Shirt</div>
                <div class="product-price">₹499</div>
            </div>
        </div>
        
        <div class="product">
            <div class="product-image">👟</div>
            <div class="product-info">
                <div class="product-name">Shoes</div>
                <div class="product-price">₹1,999</div>
            </div>
        </div>
        
        <div class="product">
            <div class="product-image">🎒</div>
            <div class="product-info">
                <div class="product-name">Backpack</div>
                <div class="product-price">₹1,299</div>
            </div>
        </div>
        
        <div class="product">
            <div class="product-image">⌚</div>
            <div class="product-info">
                <div class="product-name">Watch</div>
                <div class="product-price">₹2,999</div>
            </div>
        </div>
        
        <div class="product">
            <div class="product-image">🎧</div>
            <div class="product-info">
                <div class="product-name">Headphones</div>
                <div class="product-price">₹3,499</div>
            </div>
        </div>
        
        <div class="product">
            <div class="product-image">📱</div>
            <div class="product-info">
                <div class="product-name">Phone</div>
                <div class="product-price">₹15,999</div>
            </div>
        </div>
        
        <div class="product">
            <div class="product-image">💻</div>
            <div class="product-info">
                <div class="product-name">Laptop</div>
                <div class="product-price">₹45,999</div>
            </div>
        </div>
        
        <div class="product">
            <div class="product-image">📷</div>
            <div class="product-info">
                <div class="product-name">Camera</div>
                <div class="product-price">₹35,999</div>
            </div>
        </div>
        
        <div class="product">
            <div class="product-image">🎮</div>
            <div class="product-info">
                <div class="product-name">Gaming Console</div>
                <div class="product-price">₹29,999</div>
            </div>
        </div>
        
        <div class="product">
            <div class="product-image">🖱️</div>
            <div class="product-info">
                <div class="product-name">Mouse</div>
                <div class="product-price">₹899</div>
            </div>
        </div>
    </div>
</body>
</html>
```

**Test करें:** Products responsive grid में show होंगे।

---

## Complete Reference Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Complete Responsive Columns Guide</title>
    <style>
        /* ========== Reset & Base Styles ========== */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f8f9fa;
        }
        
        .section {
            padding: 60px 20px;
            max-width: 1400px;
            margin: 0 auto;
        }
        
        .section-title {
            text-align: center;
            font-size: 32px;
            margin-bottom: 15px;
            color: #2c3e50;
        }
        
        .section-desc {
            text-align: center;
            color: #666;
            margin-bottom: 40px;
            font-size: 18px;
        }
        
        /* ========== Device Info Badge ========== */
        .device-info {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 20px;
            border-radius: 15px;
            text-align: center;
            font-weight: bold;
            font-size: 20px;
            margin-bottom: 40px;
            box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
        }
        
        /* ========== Example 1: Mobile First Grid ========== */
        .grid-mobile-first {
            display: grid;
            gap: 20px;
            grid-template-columns: 1fr;
        }
        
        .grid-item {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 30px;
            border-radius: 12px;
            text-align: center;
            font-weight: bold;
            font-size: 18px;
            transition: transform 0.3s ease;
        }
        
        .grid-item:hover {
            transform: translateY(-5px);
        }
        
        /* SM: 576px+ */
        @media (min-width: 576px) {
            .grid-mobile-first {
                grid-template-columns: repeat(2, 1fr);
            }
            .device-info::before {
                content: "📱 SM: 2 Columns (576px+) | ";
            }
        }
        
        /* MD: 768px+ */
        @media (min-width: 768px) {
            .grid-mobile-first {
                grid-template-columns: repeat(3, 1fr);
            }
            .device-info::before {
                content: "📱 MD: 3 Columns (768px+) | ";
            }
        }
        
        /* LG: 992px+ */
        @media (min-width: 992px) {
            .grid-mobile-first {
                grid-template-columns: repeat(4, 1fr);
            }
            .device-info::before {
                content: "💻 LG: 4 Columns (992px+) | ";
            }
        }
        
        /* XL: 1200px+ */
        @media (min-width: 1200px) {
            .grid-mobile-first {
                grid-template-columns: repeat(6, 1fr);
            }
            .device-info::before {
                content: "💻 XL: 6 Columns (1200px+) | ";
            }
        }
        
        /* XS: Default */
        @media (max-width: 575.98px) {
            .device-info::before {
                content: "📱 XS: 1 Column (0-575px) | ";
            }
        }
        
        /* ========== Example 2: Desktop First Grid ========== */
        .grid-desktop-first {
            display: grid;
            gap: 20px;
            grid-template-columns: repeat(4, 1fr);
        }
        
        .grid-item-2 {
            background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
            color: white;
            padding: 30px;
            border-radius: 12px;
            text-align: center;
            font-weight: bold;
            font-size: 18px;
        }
        
        @media (max-width: 1199.98px) {
            .grid-desktop-first {
                grid-template-columns: repeat(3, 1fr);
            }
        }
        
        @media (max-width: 991.98px) {
            .grid-desktop-first {
                grid-template-columns: repeat(2, 1fr);
            }
        }
        
        @media (max-width: 767.98px) {
            .grid-desktop-first {
                grid-template-columns: 1fr;
            }
        }
        
        /* ========== Example 3: Specific Range Grid ========== */
        .grid-specific {
            display: grid;
            gap: 20px;
        }
        
        .grid-item-3 {
            background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
            color: white;
            padding: 30px;
            border-radius: 12px;
            text-align: center;
            font-weight: bold;
            font-size: 18px;
        }
        
        /* XS: 0-575px */
        @media (max-width: 575.98px) {
            .grid-specific {
                grid-template-columns: 1fr;
            }
        }
        
        /* SM: 576-767px */
        @media (min-width: 576px) and (max-width: 767.98px) {
            .grid-specific {
                grid-template-columns: repeat(2, 1fr);
            }
        }
        
        /* MD: 768-991px */
        @media (min-width: 768px) and (max-width: 991.98px) {
            .grid-specific {
                grid-template-columns: repeat(3, 1fr);
            }
        }
        
        /* LG: 992-1199px */
        @media (min-width: 992px) and (max-width: 1199.98px) {
            .grid-specific {
                grid-template-columns: repeat(4, 1fr);
            }
        }
        
        /* XL: 1200px+ */
        @media (min-width: 1200px) {
            .grid-specific {
                grid-template-columns: repeat(5, 1fr);
            }
        }
        
        /* ========== Example 4: Flexbox Approach ========== */
        .flex-container {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
        }
        
        .flex-item {
            background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
            color: white;
            padding: 30px;
            border-radius: 12px;
            text-align: center;
            font-weight: bold;
            font-size: 18px;
            flex: 1 1 100%;
        }
        
        @media (min-width: 576px) {
            .flex-item {
                flex: 1 1 calc(50% - 10px);
            }
        }
        
        @media (min-width: 768px) {
            .flex-item {
                flex: 1 1 calc(33.333% - 14px);
            }
        }
        
        @media (min-width: 992px) {
            .flex-item {
                flex: 1 1 calc(25% - 15px);
            }
        }
        
        @media (min-width: 1200px) {
            .flex-item {
                flex: 1 1 calc(16.666% - 17px);
            }
        }
        
        /* ========== Example 5: Card Layout ========== */
        .card-grid {
            display: grid;
            gap: 25px;
            grid-template-columns: 1fr;
        }
        
        .card {
            background-color: white;
            border-radius: 15px;
            overflow: hidden;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
            transition: all 0.3s ease;
        }
        
        .card:hover {
            transform: translateY(-8px);
            box-shadow: 0 8px 25px rgba(0,0,0,0.15);
        }
        
        .card-image {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            height: 200px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 48px;
        }
        
        .card-content {
            padding: 25px;
        }
        
        .card-title {
            font-size: 22px;
            margin-bottom: 12px;
            color: #2c3e50;
            font-weight: bold;
        }
        
        .card-text {
            color: #666;
            line-height: 1.8;
            font-size: 15px;
        }
        
        .card-button {
            display: inline-block;
            margin-top: 15px;
            padding: 10px 25px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            text-decoration: none;
            border-radius: 25px;
            transition: transform 0.3s ease;
        }
        
        .card-button:hover {
            transform: scale(1.05);
        }
        
        @media (min-width: 576px) {
            .card-grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }
        
        @media (min-width: 768px) {
            .card-grid {
                grid-template-columns: repeat(3, 1fr);
            }
        }
        
        @media (min-width: 992px) {
            .card-grid {
                grid-template-columns: repeat(4, 1fr);
            }
        }
        
        /* ========== Breakpoint Table ========== */
        .breakpoint-table {
            width: 100%;
            background-color: white;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 10px rgba(0,0,0,0.1);
            margin: 40px 0;
        }
        
        .breakpoint-table table {
            width: 100%;
            border-collapse: collapse;
        }
        
        .breakpoint-table th,
        .breakpoint-table td {
            padding: 15px;
            text-align: left;
            border-bottom: 1px solid #e9ecef;
        }
        
        .breakpoint-table th {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            font-weight: bold;
        }
        
        .breakpoint-table tr:hover {
            background-color: #f8f9fa;
        }
        
        /* ========== Code Block Styling ========== */
        .code-example {
            background-color: #2c3e50;
            color: #ecf0f1;
            padding: 20px;
            border-radius: 10px;
            font-family: 'Courier New', monospace;
            overflow-x: auto;
            margin: 20px 0;
        }
        
        .code-title {
            background-color: #34495e;
            color: white;
            padding: 10px 15px;
            border-radius: 8px 8px 0 0;
            font-weight: bold;
            margin-bottom: 0;
        }
        
        /* ========== Header ========== */
        .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 60px 20px;
            text-align: center;
            margin-bottom: 40px;
        }
        
        .header h1 {
            font-size: 42px;
            margin-bottom: 15px;
        }
        
        .header p {
            font-size: 20px;
            opacity: 0.9;
        }
        
        /* ========== Responsive Adjustments ========== */
        @media (max-width: 767.98px) {
            .section-title {
                font-size: 24px;
            }
            
            .section-desc {
                font-size: 16px;
            }
            
            .header h1 {
                font-size: 28px;
            }
            
            .header p {
                font-size: 16px;
            }
            
            .breakpoint-table {
                overflow-x: auto;
            }
        }
    </style>
</head>
<body>
    <!-- Header -->
    <header class="header">
        <h1>Responsive Column Layouts</h1>
        <p>Complete Guide with All Breakpoints</p>
    </header>
    
    <!-- Device Info -->
    <div class="section">
        <div class="device-info">
            Current Screen Size | Resize browser to see changes
        </div>
    </div>
    
    <!-- Example 1: Mobile First -->
    <section class="section" style="background-color: #fff;">
        <h2 class="section-title">1. Mobile First Approach (Min-Width)</h2>
        <p class="section-desc">Start with mobile (1 column) and add columns as screen grows</p>
        
        <div class="grid-mobile-first">
            <div class="grid-item">1</div>
            <div class="grid-item">2</div>
            <div class="grid-item">3</div>
            <div class="grid-item">4</div>
            <div class="grid-item">5</div>
            <div class="grid-item">6</div>
            <div class="grid-item">7</div>
            <div class="grid-item">8</div>
            <div class="grid-item">9</div>
            <div class="grid-item">10</div>
            <div class="grid-item">11</div>
            <div class="grid-item">12</div>
        </div>
        
        <div class="code-title">Mobile First Code:</div>
        <div class="code-example">
.grid { grid-template-columns: 1fr; } /* Default: 1 col */
@media (min-width: 576px) { /* 2 cols */ }
@media (min-width: 768px) { /* 3 cols */ }
@media (min-width: 992px) { /* 4 cols */ }
@media (min-width: 1200px) { /* 6 cols */ }
        </div>
    </section>
    
    <!-- Example 2: Desktop First -->
    <section class="section">
        <h2 class="section-title">2. Desktop First Approach (Max-Width)</h2>
        <p class="section-desc">Start with desktop (4 columns) and reduce columns as screen shrinks</p>
        
        <div class="grid-desktop-first">
            <div class="grid-item-2">1</div>
            <div class="grid-item-2">2</div>
            <div class="grid-item-2">3</div>
            <div class="grid-item-2">4</div>
            <div class="grid-item-2">5</div>
            <div class="grid-item-2">6</div>
            <div class="grid-item-2">7</div>
            <div class="grid-item-2">8</div>
        </div>
        
        <div class="code-title">Desktop First Code:</div>
        <div class="code-example">
.grid { grid-template-columns: repeat(4, 1fr); } /* Default: 4 cols */
@media (max-width: 1199.98px) { /* 3 cols */ }
@media (max-width: 991.98px) { /* 2 cols */ }
@media (max-width: 767.98px) { /* 1 col */ }
        </div>
    </section>
    
    <!-- Example 3: Specific Ranges -->
    <section class="section" style="background-color: #fff;">
        <h2 class="section-title">3. Specific Range Approach (Min & Max)</h2>
        <p class="section-desc">Define exact columns for specific screen ranges</p>
        
        <div class="grid-specific">
            <div class="grid-item-3">1</div>
            <div class="grid-item-3">2</div>
            <div class="grid-item-3">3</div>
            <div class="grid-item-3">4</div>
            <div class="grid-item-3">5</div>
            <div class="grid-item-3">6</div>
            <div class="grid-item-3">7</div>
            <div class="grid-item-3">8</div>
            <div class="grid-item-3">9</div>
            <div class="grid-item-3">10</div>
        </div>
        
        <div class="code-title">Specific Range Code:</div>
        <div class="code-example">
@media (max-width: 575.98px) { /* 1 col */ }
@media (min-width: 576px) and (max-width: 767.98px) { /* 2 cols */ }
@media (min-width: 768px) and (max-width: 991.98px) { /* 3 cols */ }
@media (min-width: 992px) and (max-width: 1199.98px) { /* 4 cols */ }
@media (min-width: 1200px) { /* 5 cols */ }
        </div>
    </section>
    
    <!-- Example 4: Flexbox -->
    <section class="section">
        <h2 class="section-title">4. Flexbox Approach</h2>
        <p class="section-desc">Using Flexbox with flex-basis calculations</p>
        
        <div class="flex-container">
            <div class="flex-item">1</div>
            <div class="flex-item">2</div>
            <div class="flex-item">3</div>
            <div class="flex-item">4</div>
            <div class="flex-item">5</div>
            <div class="flex-item">6</div>
            <div class="flex-item">7</div>
            <div class="flex-item">8</div>
            <div class="flex-item">9</div>
            <div class="flex-item">10</div>
            <div class="flex-item">11</div>
            <div class="flex-item">12</div>
        </div>
        
        <div class="code-title">Flexbox Code:</div>
        <div class="code-example">
.flex-item { flex: 1 1 100%; } /* 1 col */
@media (min-width: 576px) { flex: 1 1 calc(50% - 10px); } /* 2 cols */
@media (min-width: 768px) { flex: 1 1 calc(33.333% - 14px); } /* 3 cols */
@media (min-width: 992px) { flex: 1 1 calc(25% - 15px); } /* 4 cols */
@media (min-width: 1200px) { flex: 1 1 calc(16.666% - 17px); } /* 6 cols */
        </div>
    </section>
    
    <!-- Example 5: Card Layout -->
    <section class="section" style="background-color: #fff;">
        <h2 class="section-title">5. Real World Card Layout</h2>
        <p class="section-desc">Professional card grid with responsive columns</p>
        
        <div class="card-grid">
            <div class="card">
                <div class="card-image">🎨</div>
                <div class="card-content">
                    <h3 class="card-title">Design</h3>
                    <p class="card-text">Beautiful and modern UI design for your projects.</p>
                    <a href="#" class="card-button">Learn More</a>
                </div>
            </div>
            
            <div class="card">
                <div class="card-image">💻</div>
                <div class="card-content">
                    <h3 class="card-title">Development</h3>
                    <p class="card-text">Responsive web development with modern tools.</p>
                    <a href="#" class="card-button">Learn More</a>
                </div>
            </div>
            
            <div class="card">
                <div class="card-image">📱</div>
                <div class="card-content">
                    <h3 class="card-title">Mobile First</h3>
                    <p class="card-text">Mobile-first approach for better user experience.</p>
                    <a href="#" class="card-button">Learn More</a>
                </div>
            </div>
            
            <div class="card">
                <div class="card-image">⚡</div>
                <div class="card-content">
                    <h3 class="card-title">Performance</h3>
                    <p class="card-text">Optimized for speed and best performance.</p>
                    <a href="#" class="card-button">Learn More</a>
                </div>
            </div>
            
            <div class="card">
                <div class="card-image">🔒</div>
                <div class="card-content">
                    <h3 class="card-title">Security</h3>
                    <p class="card-text">Built with security best practices in mind.</p>
                    <a href="#" class="card-button">Learn More</a>
                </div>
            </div>
            
            <div class="card">
                <div class="card-image">🚀</div>
                <div class="card-content">
                    <h3 class="card-title">Deploy</h3>
                    <p class="card-text">Easy deployment to production environments.</p>
                    <a href="#" class="card-button">Learn More</a>
                </div>
            </div>
            
            <div class="card">
                <div class="card-image">📊</div>
                <div class="card-content">
                    <h3 class="card-title">Analytics</h3>
                    <p class="card-text">Track and analyze user behavior effectively.</p>
                    <a href="#" class="card-button">Learn More</a>
                </div>
            </div>
            
            <div class="card">
                <div class="card-image">🌐</div>
                <div class="card-content">
                    <h3 class="card-title">Global</h3>
                    <p class="card-text">Reach users worldwide with localization.</p>
                    <a href="#" class="card-button">Learn More</a>
                </div>
            </div>
        </div>
    </section>
    
    <!-- Breakpoint Reference Table -->
    <section class="section">
        <h2 class="section-title">Breakpoint Reference Table</h2>
        
        <div class="breakpoint-table">
            <table>
                <thead>
                    <tr>
                        <th>Breakpoint</th>
                        <th>Device</th>
                        <th>Width Range</th>
                        <th>Min-Width Code</th>
                        <th>Max-Width Code</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>XS</strong></td>
                        <td>Mobile Portrait</td>
                        <td>0 - 575.98px</td>
                        <td>Default (no query)</td>
                        <td>@media (max-width: 575.98px)</td>
                    </tr>
                    <tr>
                        <td><strong>SM</strong></td>
                        <td>Mobile Landscape</td>
                        <td>576px - 767.98px</td>
                        <td>@media (min-width: 576px)</td>
                        <td>@media (max-width: 767.98px)</td>
                    </tr>
                    <tr>
                        <td><strong>MD</strong></td>
                        <td>Tablet</td>
                        <td>768px - 991.98px</td>
                        <td>@media (min-width: 768px)</td>
                        <td>@media (max-width: 991.98px)</td>
                    </tr>
                    <tr>
                        <td><strong>LG</strong></td>
                        <td>Small Laptop</td>
                        <td>992px - 1199.98px</td>
                        <td>@media (min-width: 992px)</td>
                        <td>@media (max-width: 1199.98px)</td>
                    </tr>
                    <tr>
                        <td><strong>XL</strong></td>
                        <td>Desktop</td>
                        <td>1200px - 1399.98px</td>
                        <td>@media (min-width: 1200px)</td>
                        <td>@media (max-width: 1399.98px)</td>
                    </tr>
                    <tr>
                        <td><strong>XXL</strong></td>
                        <td>Large Desktop</td>
                        <td>1400px+</td>
                        <td>@media (min-width: 1400px)</td>
                        <td>N/A</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
    
    <!-- Best Practices -->
    <section class="section" style="background-color: #fff;">
        <h2 class="section-title">Best Practices</h2>
        
        <div style="max-width: 900px; margin: 0 auto; background-color: #e7f3ff; padding: 30px; border-radius: 12px; border-left: 5px solid #007bff;">
            <h3 style="margin-bottom: 20px; color: #007bff;">✨ Important Tips:</h3>
            <ul style="line-height: 2; font-size: 16px;">
                <li><strong>Mobile First Approach:</strong> Start with mobile styles, then add larger screen styles</li>
                <li><strong>Grid over Flexbox:</strong> CSS Grid is better for 2D layouts, Flexbox for 1D</li>
                <li><strong>Use .98px:</strong> Prevents overlapping between breakpoints (e.g., 767.98px)</li>
                <li><strong>Gap Property:</strong> Use gap instead of margins for grid spacing</li>
                <li><strong>Test Real Devices:</strong> Always test on actual mobile and tablet devices</li>
                <li><strong>Logical Columns:</strong> XS:1, SM:2, MD:3, LG:4, XL:6 is a good pattern</li>
                <li><strong>Max Container Width:</strong> Use max-width to prevent too-wide layouts on large screens</li>
                <li><strong>Responsive Images:</strong> Always set images to width: 100%; height: auto;</li>
            </ul>
        </div>
    </section>
</body>
</html>
```

## Summary

### **1. Mobile First Approach (Min-Width)**
```css
/* Start with mobile (1 column) */
.grid {
    display: grid;
    grid-template-columns: 1fr;
}

/* Add columns as screen grows */
@media (min-width: 576px) {
    .grid { grid-template-columns: repeat(2, 1fr); }
}

@media (min-width: 768px) {
    .grid { grid-template-columns: repeat(3, 1fr); }
}

@media (min-width: 992px) {
    .grid { grid-template-columns: repeat(4, 1fr); }
}
```

### **2. Desktop First Approach (Max-Width)**
```css
/* Start with desktop (4 columns) */
.grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
}

/* Reduce columns as screen shrinks */
@media (max-width: 1199.98px) {
    .grid { grid-template-columns: repeat(3, 1fr); }
}

@media (max-width: 991.98px) {
    .grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 767.98px) {
    .grid { grid-template-columns: 1fr; }
}
```

### **3. Specific Range (Min & Max Together)**
```css
/* XS: 0-575px */
@media (max-width: 575.98px) {
    .grid { grid-template-columns: 1fr; }
}

/* SM: 576-767px */
@media (min-width: 576px) and (max-width: 767.98px) {
    .grid { grid-template-columns: repeat(2, 1fr); }
}

/* MD: 768-991px */
@media (min-width: 768px) and (max-width: 991.98px) {
    .grid { grid-template-columns: repeat(3, 1fr); }
}
```

### **4. Column Patterns by Device**

| Device | Breakpoint | Common Columns | Use Case |
|--------|------------|----------------|----------|
| Mobile Portrait | XS (0-575px) | 1 | Full width cards |
| Mobile Landscape | SM (576-767px) | 2 | Product lists |
| Tablet | MD (768-991px) | 3 | Gallery grids |
| Small Laptop | LG (992-1199px) | 4 | Dashboard cards |
| Desktop | XL (1200-1399px) | 4-6 | Content grids |
| Large Desktop | XXL (1400px+) | 6+ | Wide layouts |

### **5. Grid vs Flexbox**

**CSS Grid:**
```css
.grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}
```
- ✅ Better for 2D layouts
- ✅ Easier column control
- ✅ Built-in gap property

**Flexbox:**
```css
.flex {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}
.item {
    flex: 1 1 calc(33.333% - 14px);
}
```
- ✅ Better for 1D layouts
- ✅ More browser support
- ✅ Flexible item sizing

### **6. Common Column Formulas**

**Equal Columns:**
- 2 columns: `repeat(2, 1fr)` or `50%`
- 3 columns: `repeat(3, 1fr)` or `33.333%`
- 4 columns: `repeat(4, 1fr)` or `25%`
- 6 columns: `repeat(6, 1fr)` or `16.666%`

**Flexbox Calculations:**
- 2 columns: `calc(50% - gap/2)`
- 3 columns: `calc(33.333% - gap*2/3)`
- 4 columns: `calc(25% - gap*3/4)`

### **7. Best Practices**
1. **Always use viewport meta tag**
2. **Mobile-first is recommended** (easier to scale up)
3. **Use .98px** to avoid breakpoint overlaps
4. **Test on real devices**, not just browser resize
5. **Keep logical column progressions** (1→2→3→4→6)
6. **Use CSS Grid** for complex layouts
7. **Add max-width** to containers for very large screens
8. **Use gap property** instead of margins for spacing

यह complete guide responsive column layouts बनाने के लिए है!