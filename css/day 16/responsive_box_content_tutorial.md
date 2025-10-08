# Responsive Box Content Tutorial

## Introduction
इस tutorial में हम सीखेंगे कि Icon, Title, और Content के साथ responsive box sections कैसे बनाएं। ये boxes automatically different devices पर adjust होंगे।

---

## Step 1: Basic HTML Structure - Single Box

सबसे पहले एक simple box बनाते हैं:

```html
<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Responsive Box</title>
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
        
        .box {
            background-color: white;
            padding: 20px;
            border-radius: 10px;
        }
    </style>
</head>
<body>
    <div class="box">
        <p>Simple Box</p>
    </div>
</body>
</html>
```

**Test करें:** White box दिखेगा।

**Explanation:** Basic box structure बनाया है। अभी केवल एक simple white box है।

---

## Step 2: Add Icon to Box

Box में icon add करते हैं:

```html
<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Box with Icon</title>
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
        
        .box {
            background-color: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        
        .icon {
            font-size: 48px;
            margin-bottom: 15px;
        }
    </style>
</head>
<body>
    <div class="box">
        <div class="icon">🎨</div>
        <p>Content here</p>
    </div>
</body>
</html>
```

**Test करें:** Box में बड़ा icon दिखेगा।

**Explanation:** Icon को large font-size के साथ add किया। Emoji icons का use कर रहे हैं।

---

## Step 3: Add Title and Description

Title और description add करते हैं:

```html
<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Complete Box</title>
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
        
        .box {
            background-color: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            text-align: center;
        }
        
        .icon {
            font-size: 48px;
            margin-bottom: 15px;
        }
        
        .title {
            font-size: 22px;
            font-weight: bold;
            color: #333;
            margin-bottom: 10px;
        }
        
        .description {
            font-size: 16px;
            color: #666;
            line-height: 1.6;
        }
    </style>
</head>
<body>
    <div class="box">
        <div class="icon">🎨</div>
        <h3 class="title">Design Services</h3>
        <p class="description">Professional design solutions for your business needs.</p>
    </div>
</body>
</html>
```

**Test करें:** Complete box with icon, title और description दिखेगा।

**Explanation:** एक complete content box बना लिया है। अब इसे multiple boxes में convert करेंगे।

---

## Step 4: Create Multiple Boxes

Multiple boxes बनाते हैं:

```html
<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Multiple Boxes</title>
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
            max-width: 1200px;
            margin: 0 auto;
        }
        
        .box {
            background-color: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            text-align: center;
            margin-bottom: 20px;
        }
        
        .icon {
            font-size: 48px;
            margin-bottom: 15px;
        }
        
        .title {
            font-size: 22px;
            font-weight: bold;
            color: #333;
            margin-bottom: 10px;
        }
        
        .description {
            font-size: 16px;
            color: #666;
            line-height: 1.6;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="box">
            <div class="icon">🎨</div>
            <h3 class="title">Design</h3>
            <p class="description">Professional design solutions.</p>
        </div>
        
        <div class="box">
            <div class="icon">💻</div>
            <h3 class="title">Development</h3>
            <p class="description">Modern web development.</p>
        </div>
        
        <div class="box">
            <div class="icon">📱</div>
            <h3 class="title">Mobile Apps</h3>
            <p class="description">iOS and Android apps.</p>
        </div>
    </div>
</body>
</html>
```

**Test करें:** तीन boxes vertical stack में दिखेंगे।

**Explanation:** Multiple boxes बना लिए हैं। अभी ये vertical में stack हैं।

---

## Step 5: Make Grid Responsive - Mobile First

Grid layout add करके responsive बनाते हैं:

```html
<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Responsive Grid</title>
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
            max-width: 1200px;
            margin: 0 auto;
            display: grid;
            gap: 20px;
            grid-template-columns: 1fr;
        }
        
        .box {
            background-color: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            text-align: center;
        }
        
        .icon {
            font-size: 48px;
            margin-bottom: 15px;
        }
        
        .title {
            font-size: 22px;
            font-weight: bold;
            color: #333;
            margin-bottom: 10px;
        }
        
        .description {
            font-size: 16px;
            color: #666;
            line-height: 1.6;
        }
        
        /* Tablet: 2 columns */
        @media (min-width: 768px) {
            .container {
                grid-template-columns: repeat(2, 1fr);
            }
        }
        
        /* Desktop: 3 columns */
        @media (min-width: 992px) {
            .container {
                grid-template-columns: repeat(3, 1fr);
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="box">
            <div class="icon">🎨</div>
            <h3 class="title">Design</h3>
            <p class="description">Professional design solutions for your business.</p>
        </div>
        
        <div class="box">
            <div class="icon">💻</div>
            <h3 class="title">Development</h3>
            <p class="description">Modern web development services.</p>
        </div>
        
        <div class="box">
            <div class="icon">📱</div>
            <h3 class="title">Mobile Apps</h3>
            <p class="description">iOS and Android applications.</p>
        </div>
    </div>
</body>
</html>
```

**Test करें:** Mobile में 1 column, tablet में 2, desktop में 3 columns दिखेंगे।

**Explanation:** CSS Grid के साथ responsive layout बनाया। Screen size के according columns change होते हैं।

---

## Step 6: Add Hover Effects

Hover effects add करते हैं:

```html
<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Boxes with Hover</title>
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
            max-width: 1200px;
            margin: 0 auto;
            display: grid;
            gap: 20px;
            grid-template-columns: 1fr;
        }
        
        .box {
            background-color: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            text-align: center;
            transition: all 0.3s ease;
            cursor: pointer;
        }
        
        .box:hover {
            transform: translateY(-10px);
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        }
        
        .icon {
            font-size: 48px;
            margin-bottom: 15px;
            transition: transform 0.3s ease;
        }
        
        .box:hover .icon {
            transform: scale(1.2);
        }
        
        .title {
            font-size: 22px;
            font-weight: bold;
            color: #333;
            margin-bottom: 10px;
        }
        
        .description {
            font-size: 16px;
            color: #666;
            line-height: 1.6;
        }
        
        @media (min-width: 768px) {
            .container {
                grid-template-columns: repeat(2, 1fr);
            }
        }
        
        @media (min-width: 992px) {
            .container {
                grid-template-columns: repeat(3, 1fr);
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="box">
            <div class="icon">🎨</div>
            <h3 class="title">Design</h3>
            <p class="description">Professional design solutions for your business.</p>
        </div>
        
        <div class="box">
            <div class="icon">💻</div>
            <h3 class="title">Development</h3>
            <p class="description">Modern web development services.</p>
        </div>
        
        <div class="box">
            <div class="icon">📱</div>
            <h3 class="title">Mobile Apps</h3>
            <p class="description">iOS and Android applications.</p>
        </div>
    </div>
</body>
</html>
```

**Test करें:** Boxes पर hover करने पर lift effect और icon scale होगा।

**Explanation:** CSS transitions के साथ smooth hover effects add किए हैं।

---

## Step 7: Add More Boxes - 6 Items Grid

More boxes add करके complete grid बनाते हैं:

```html
<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Complete Grid</title>
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
        
        h1 {
            text-align: center;
            margin-bottom: 40px;
            color: #333;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            display: grid;
            gap: 25px;
            grid-template-columns: 1fr;
        }
        
        .box {
            background-color: white;
            padding: 35px;
            border-radius: 12px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            text-align: center;
            transition: all 0.3s ease;
        }
        
        .box:hover {
            transform: translateY(-10px);
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        }
        
        .icon {
            font-size: 56px;
            margin-bottom: 20px;
            transition: transform 0.3s ease;
        }
        
        .box:hover .icon {
            transform: scale(1.2) rotate(5deg);
        }
        
        .title {
            font-size: 24px;
            font-weight: bold;
            color: #333;
            margin-bottom: 12px;
        }
        
        .description {
            font-size: 16px;
            color: #666;
            line-height: 1.7;
        }
        
        /* Mobile Landscape: 2 columns */
        @media (min-width: 576px) {
            .container {
                grid-template-columns: repeat(2, 1fr);
            }
        }
        
        /* Tablet: 3 columns */
        @media (min-width: 768px) {
            .container {
                grid-template-columns: repeat(3, 1fr);
            }
        }
        
        /* Desktop: Still 3 columns for better readability */
        @media (min-width: 992px) {
            .container {
                grid-template-columns: repeat(3, 1fr);
            }
        }
    </style>
</head>
<body>
    <h1>Our Services</h1>
    
    <div class="container">
        <div class="box">
            <div class="icon">🎨</div>
            <h3 class="title">UI/UX Design</h3>
            <p class="description">Beautiful and intuitive user interface design.</p>
        </div>
        
        <div class="box">
            <div class="icon">💻</div>
            <h3 class="title">Web Development</h3>
            <p class="description">Modern responsive web applications.</p>
        </div>
        
        <div class="box">
            <div class="icon">📱</div>
            <h3 class="title">Mobile Apps</h3>
            <p class="description">Native iOS and Android development.</p>
        </div>
        
        <div class="box">
            <div class="icon">🚀</div>
            <h3 class="title">SEO Optimization</h3>
            <p class="description">Improve your search engine rankings.</p>
        </div>
        
        <div class="box">
            <div class="icon">📊</div>
            <h3 class="title">Analytics</h3>
            <p class="description">Data-driven insights and reporting.</p>
        </div>
        
        <div class="box">
            <div class="icon">🔒</div>
            <h3 class="title">Security</h3>
            <p class="description">Enterprise-level security solutions.</p>
        </div>
    </div>
</body>
</html>
```

**Test करें:** 6 boxes responsive grid में arrange होंगे।

---

## Step 8: Colored Background Variation

Different colored backgrounds के साथ variation:

```html
<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Colored Boxes</title>
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
        
        h1 {
            text-align: center;
            margin-bottom: 40px;
            color: #333;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            display: grid;
            gap: 25px;
            grid-template-columns: 1fr;
        }
        
        .box {
            padding: 35px;
            border-radius: 12px;
            text-align: center;
            transition: all 0.3s ease;
            color: white;
        }
        
        .box:hover {
            transform: translateY(-10px);
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        }
        
        .icon {
            font-size: 56px;
            margin-bottom: 20px;
        }
        
        .title {
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 12px;
        }
        
        .description {
            font-size: 16px;
            line-height: 1.7;
            opacity: 0.9;
        }
        
        /* Different background colors */
        .box-1 { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); }
        .box-2 { background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); }
        .box-3 { background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); }
        .box-4 { background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%); }
        .box-5 { background: linear-gradient(135deg, #fa709a 0%, #fee140 100%); }
        .box-6 { background: linear-gradient(135deg, #30cfd0 0%, #330867 100%); }
        
        @media (min-width: 576px) {
            .container {
                grid-template-columns: repeat(2, 1fr);
            }
        }
        
        @media (min-width: 768px) {
            .container {
                grid-template-columns: repeat(3, 1fr);
            }
        }
    </style>
</head>
<body>
    <h1>Our Features</h1>
    
    <div class="container">
        <div class="box box-1">
            <div class="icon">⚡</div>
            <h3 class="title">Fast Performance</h3>
            <p class="description">Lightning-fast loading speeds.</p>
        </div>
        
        <div class="box box-2">
            <div class="icon">🎯</div>
            <h3 class="title">Accurate</h3>
            <p class="description">Precise and reliable results.</p>
        </div>
        
        <div class="box box-3">
            <div class="icon">🛡️</div>
            <h3 class="title">Secure</h3>
            <p class="description">Bank-level security protection.</p>
        </div>
        
        <div class="box box-4">
            <div class="icon">♻️</div>
            <h3 class="title">Eco-Friendly</h3>
            <p class="description">Sustainable and green solutions.</p>
        </div>
        
        <div class="box box-5">
            <div class="icon">🌟</div>
            <h3 class="title">Premium Quality</h3>
            <p class="description">Top-notch service quality.</p>
        </div>
        
        <div class="box box-6">
            <div class="icon">💎</div>
            <h3 class="title">Exclusive</h3>
            <p class="description">Unique premium features.</p>
        </div>
    </div>
</body>
</html>
```

**Test करें:** Colorful gradient background वाले boxes दिखेंगे।

**Explanation:** Different gradient backgrounds से boxes visually attractive बन गए हैं।

---

## Step 9: Icon with Border Circle Style

Icon को circular border के साथ style करते हैं:

```html
<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Icon Circle Style</title>
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
        
        h1 {
            text-align: center;
            margin-bottom: 40px;
            color: #333;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            display: grid;
            gap: 25px;
            grid-template-columns: 1fr;
        }
        
        .box {
            background-color: white;
            padding: 35px;
            border-radius: 15px;
            box-shadow: 0 5px 20px rgba(0,0,0,0.08);
            text-align: center;
            transition: all 0.3s ease;
        }
        
        .box:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 40px rgba(0,0,0,0.15);
        }
        
        .icon-wrapper {
            width: 80px;
            height: 80px;
            margin: 0 auto 20px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 40px;
            transition: all 0.3s ease;
        }
        
        .box:hover .icon-wrapper {
            transform: rotate(360deg) scale(1.1);
        }
        
        .title {
            font-size: 22px;
            font-weight: bold;
            color: #333;
            margin-bottom: 12px;
        }
        
        .description {
            font-size: 15px;
            color: #666;
            line-height: 1.7;
        }
        
        @media (min-width: 576px) {
            .container {
                grid-template-columns: repeat(2, 1fr);
            }
        }
        
        @media (min-width: 768px) {
            .container {
                grid-template-columns: repeat(3, 1fr);
            }
        }
        
        @media (min-width: 1200px) {
            .container {
                grid-template-columns: repeat(4, 1fr);
            }
        }
    </style>
</head>
<body>
    <h1>Why Choose Us</h1>
    
    <div class="container">
        <div class="box">
            <div class="icon-wrapper">💡</div>
            <h3 class="title">Innovative</h3>
            <p class="description">Cutting-edge solutions for modern challenges.</p>
        </div>
        
        <div class="box">
            <div class="icon-wrapper">⏱️</div>
            <h3 class="title">On Time</h3>
            <p class="description">Always deliver projects on schedule.</p>
        </div>
        
        <div class="box">
            <div class="icon-wrapper">🎓</div>
            <h3 class="title">Expert Team</h3>
            <p class="description">Highly skilled professionals.</p>
        </div>
        
        <div class="box">
            <div class="icon-wrapper">💰</div>
            <h3 class="title">Affordable</h3>
            <p class="description">Competitive pricing for all budgets.</p>
        </div>
        
        <div class="box">
            <div class="icon-wrapper">🤝</div>
            <h3 class="title">Support</h3>
            <p class="description">24/7 customer support available.</p>
        </div>
        
        <div class="box">
            <div class="icon-wrapper">✨</div>
            <h3 class="title">Quality</h3>
            <p class="description">Premium quality in every project.</p>
        </div>
        
        <div class="box">
            <div class="icon-wrapper">🌍</div>
            <h3 class="title">Global</h3>
            <p class="description">Serving clients worldwide.</p>
        </div>
        
        <div class="box">
            <div class="icon-wrapper">🏆</div>
            <h3 class="title">Award Winner</h3>
            <p class="description">Industry recognized excellence.</p>
        </div>
    </div>
</body>
</html>
```

**Test करें:** Icons circular gradient background में दिखेंगे। Hover पर rotate होंगे।

---

## Step 10: Left Aligned Box Style

Left-aligned content box style:

```html
<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Left Aligned Boxes</title>
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
        
        h1 {
            text-align: center;
            margin-bottom: 40px;
            color: #333;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            display: grid;
            gap: 25px;
            grid-template-columns: 1fr;
        }
        
        .box {
            background-color: white;
            padding: 30px;
            border-radius: 12px;
            box-shadow: 0 3px 15px rgba(0,0,0,0.1);
            display: flex;
            align-items: flex-start;
            gap: 20px;
            transition: all 0.3s ease;
        }
        
        .box:hover {
            transform: translateX(10px);
            box-shadow: 0 5px 25px rgba(0,0,0,0.15);
        }
        
        .icon {
            font-size: 48px;
            flex-shrink: 0;
        }
        
        .content {
            flex: 1;
        }
        
        .title {
            font-size: 20px;
            font-weight: bold;
            color: #333;
            margin-bottom: 10px;
        }
        
        .description {
            font-size: 15px;
            color: #666;
            line-height: 1.7;
        }
        
        @media (min-width: 768px) {
            .container {
                grid-template-columns: repeat(2, 1fr);
            }
        }
        
        @media (min-width: 1024px) {
            .container {
                grid-template-columns: repeat(2, 1fr);
            }
        }
    </style>
</head>
<body>
    <h1>Our Process</h1>
    
    <div class="container">
        <div class="box">
            <div class="icon">📋</div>
            <div class="content">
                <h3 class="title">Planning</h3>
                <p class="description">We start with detailed planning and research to understand your requirements.</p>
            </div>
        </div>
        
        <div class="box">
            <div class="icon">✏️</div>
            <div class="content">
                <h3 class="title">Design</h3>
                <p class="description">Create beautiful mockups and prototypes for your approval.</p>
            </div>
        </div>
        
        <div class="box">
            <div class="icon">⚙️</div>
            <div class="content">
                <h3 class="title">Development</h3>
                <p class="description">Build your solution using modern technologies and best practices.</p>
            </div>
        </div>
        
        <div class="box">
            <div class="icon">🧪</div>
            <div class="content">
                <h3 class="title">Testing</h3>
                <p class="description">Rigorous testing to ensure everything works perfectly.</p>
            </div>
        </div>
        
        <div class="box">
            <div class="icon">🚀</div>
            <div class="content">
                <h3 class="title">Launch</h3>
                <p class="description">Deploy your project and make it live for the world.</p>
            </div>
        </div>
        
        <div class="box">
            <div class="icon">📈</div>
            <div class="content">
                <h3 class="title">Grow</h3>
                <p class="description">Continuous support and improvements to help you grow.</p>
            </div>
        </div>
    </div>
</body>
</html>
```

**Test करें:** Left-aligned boxes with horizontal layout दिखेंगे।

**Explanation:** Flexbox के साथ horizontal layout बनाया है। Icon left side में और content right side में है।

---

## Complete Reference Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Complete Responsive Box Content</title>
    <style>
        /* ========== Global Styles ========== */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
        }
        
        .section {
            padding: 60px 20px;
            max-width: 1400px;
            margin: 0 auto;
        }
        
        .section-title {
            text-align: center;
            font-size: 36px;
            margin-bottom: 15px;
            color: #2c3e50;
        }
        
        .section-subtitle {
            text-align: center;
            color: #666;
            margin-bottom: 50px;
            font-size: 18px;
        }
        
        /* ========== Style 1: Center Aligned Boxes ========== */
        .grid-center {
            display: grid;
            gap: 30px;
            grid-template-columns: 1fr;
        }
        
        .box-center {
            background-color: white;
            padding: 40px;
            border-radius: 15px;
            box-shadow: 0 5px 20px rgba(0,0,0,0.08);
            text-align: center;
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        
        .box-center:hover {
            transform: translateY(-15px);
            box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }
        
        .box-center .icon {
            font-size: 64px;
            margin-bottom: 20px;
            display: inline-block;
            transition: all 0.3s ease;
        }
        
        .box-center:hover .icon {
            transform: scale(1.2) rotate(5deg);
        }
        
        .box-center .title {
            font-size: 24px;
            font-weight: bold;
            color: #2c3e50;
            margin-bottom: 15px;
        }
        
        .box-center .description {
            font-size: 16px;
            color: #666;
            line-height: 1.8;
        }
        
        /* ========== Style 2: Gradient Boxes ========== */
        .grid-gradient {
            display: grid;
            gap: 30px;
            grid-template-columns: 1fr;
        }
        
        .box-gradient {
            padding: 40px;
            border-radius: 15px;
            text-align: center;
            color: white;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        }
        
        .box-gradient::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(255,255,255,0.1);
            transform: translateX(-100%);
            transition: transform 0.5s ease;
        }
        
        .box-gradient:hover::before {
            transform: translateX(0);
        }
        
        .box-gradient:hover {
            transform: translateY(-10px) scale(1.02);
            box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        }
        
        .box-gradient .icon {
            font-size: 56px;
            margin-bottom: 20px;
            position: relative;
            z-index: 1;
        }
        
        .box-gradient .title {
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 12px;
            position: relative;
            z-index: 1;
        }
        
        .box-gradient .description {
            font-size: 15px;
            line-height: 1.7;
            opacity: 0.95;
            position: relative;
            z-index: 1;
        }
        
        .gradient-1 { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); }
        .gradient-2 { background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); }
        .gradient-3 { background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); }
        .gradient-4 { background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%); }
        .gradient-5 { background: linear-gradient(135deg, #fa709a 0%, #fee140 100%); }
        .gradient-6 { background: linear-gradient(135deg, #30cfd0 0%, #330867 100%); }
        
        /* ========== Style 3: Icon Circle Boxes ========== */
        .grid-circle {
            display: grid;
            gap: 30px;
            grid-template-columns: 1fr;
        }
        
        .box-circle {
            background-color: white;
            padding: 40px 30px;
            border-radius: 15px;
            box-shadow: 0 5px 20px rgba(0,0,0,0.08);
            text-align: center;
            transition: all 0.3s ease;
            border: 2px solid transparent;
        }
        
        .box-circle:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 40px rgba(0,0,0,0.12);
            border-color: #667eea;
        }
        
        .icon-circle {
            width: 90px;
            height: 90px;
            margin: 0 auto 25px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 45px;
            transition: all 0.4s ease;
            box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);
        }
        
        .box-circle:hover .icon-circle {
            transform: rotate(360deg) scale(1.1);
            box-shadow: 0 15px 35px rgba(102, 126, 234, 0.5);
        }
        
        .box-circle .title {
            font-size: 22px;
            font-weight: bold;
            color: #2c3e50;
            margin-bottom: 12px;
        }
        
        .box-circle .description {
            font-size: 15px;
            color: #666;
            line-height: 1.7;
        }
        
        /* ========== Style 4: Left Aligned Boxes ========== */
        .grid-left {
            display: grid;
            gap: 25px;
            grid-template-columns: 1fr;
        }
        
        .box-left {
            background-color: white;
            padding: 30px;
            border-radius: 12px;
            box-shadow: 0 3px 15px rgba(0,0,0,0.08);
            display: flex;
            align-items: flex-start;
            gap: 25px;
            transition: all 0.3s ease;
            border-left: 4px solid #667eea;
        }
        
        .box-left:hover {
            transform: translateX(10px);
            box-shadow: 0 8px 30px rgba(0,0,0,0.15);
            border-left-width: 8px;
        }
        
        .box-left .icon {
            font-size: 50px;
            flex-shrink: 0;
            line-height: 1;
        }
        
        .box-left .content {
            flex: 1;
        }
        
        .box-left .title {
            font-size: 22px;
            font-weight: bold;
            color: #2c3e50;
            margin-bottom: 10px;
        }
        
        .box-left .description {
            font-size: 15px;
            color: #666;
            line-height: 1.7;
        }
        
        /* ========== Style 5: Card with Button ========== */
        .grid-card {
            display: grid;
            gap: 30px;
            grid-template-columns: 1fr;
        }
        
        .box-card {
            background-color: white;
            border-radius: 15px;
            overflow: hidden;
            box-shadow: 0 5px 20px rgba(0,0,0,0.1);
            transition: all 0.3s ease;
        }
        
        .box-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 40px rgba(0,0,0,0.2);
        }
        
        .card-header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            padding: 40px 30px;
            text-align: center;
            color: white;
        }
        
        .card-header .icon {
            font-size: 64px;
            margin-bottom: 15px;
        }
        
        .card-body {
            padding: 30px;
            text-align: center;
        }
        
        .card-body .title {
            font-size: 24px;
            font-weight: bold;
            color: #2c3e50;
            margin-bottom: 15px;
        }
        
        .card-body .description {
            font-size: 15px;
            color: #666;
            line-height: 1.7;
            margin-bottom: 25px;
        }
        
        .card-button {
            display: inline-block;
            padding: 12px 30px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            text-decoration: none;
            border-radius: 25px;
            transition: all 0.3s ease;
            font-weight: bold;
        }
        
        .card-button:hover {
            transform: scale(1.05);
            box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
        }
        
        /* ========== Responsive Breakpoints ========== */
        
        /* Mobile Landscape: 576px+ */
        @media (min-width: 576px) {
            .grid-center,
            .grid-gradient,
            .grid-circle,
            .grid-card {
                grid-template-columns: repeat(2, 1fr);
            }
            
            .grid-left {
                grid-template-columns: 1fr;
            }
        }
        
        /* Tablet: 768px+ */
        @media (min-width: 768px) {
            .grid-center,
            .grid-gradient,
            .grid-circle {
                grid-template-columns: repeat(3, 1fr);
            }
            
            .grid-card {
                grid-template-columns: repeat(2, 1fr);
            }
            
            .grid-left {
                grid-template-columns: repeat(2, 1fr);
            }
        }
        
        /* Desktop: 992px+ */
        @media (min-width: 992px) {
            .grid-center {
                grid-template-columns: repeat(3, 1fr);
            }
            
            .grid-gradient {
                grid-template-columns: repeat(3, 1fr);
            }
            
            .grid-circle {
                grid-template-columns: repeat(4, 1fr);
            }
            
            .grid-card {
                grid-template-columns: repeat(3, 1fr);
            }
        }
        
        /* Large Desktop: 1200px+ */
        @media (min-width: 1200px) {
            .grid-circle {
                grid-template-columns: repeat(4, 1fr);
            }
        }
        
        /* ========== Header ========== */
        .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 80px 20px;
            text-align: center;
            margin-bottom: 60px;
        }
        
        .header h1 {
            font-size: 48px;
            margin-bottom: 15px;
        }
        
        .header p {
            font-size: 20px;
            opacity: 0.9;
        }
        
        @media (max-width: 767.98px) {
            .header h1 {
                font-size: 32px;
            }
            
            .header p {
                font-size: 16px;
            }
            
            .section-title {
                font-size: 28px;
            }
        }
    </style>
</head>
<body>
    <!-- Header -->
    <header class="header">
        <h1>Responsive Box Content</h1>
        <p>Complete Guide with Multiple Styles</p>
    </header>
    
    <!-- Style 1: Center Aligned -->
    <section class="section">
        <h2 class="section-title">Style 1: Center Aligned Boxes</h2>
        <p class="section-subtitle">Classic centered layout with hover effects</p>
        
        <div class="grid-center">
            <div class="box-center">
                <div class="icon">🎨</div>
                <h3 class="title">Design</h3>
                <p class="description">Professional design solutions for your business.</p>
            </div>
            
            <div class="box-center">
                <div class="icon">💻</div>
                <h3 class="title">Development</h3>
                <p class="description">Modern web development with latest technologies.</p>
            </div>
            
            <div class="box-center">
                <div class="icon">📱</div>
                <h3 class="title">Mobile Apps</h3>
                <p class="description">Native iOS and Android applications.</p>
            </div>
            
            <div class="box-center">
                <div class="icon">🚀</div>
                <h3 class="title">Launch</h3>
                <p class="description">Deploy and scale your applications.</p>
            </div>
            
            <div class="box-center">
                <div class="icon">📊</div>
                <h3 class="title">Analytics</h3>
                <p class="description">Data-driven insights and reporting.</p>
            </div>
            
            <div class="box-center">
                <div class="icon">🔒</div>
                <h3 class="title">Security</h3>
                <p class="description">Enterprise-level security solutions.</p>
            </div>
        </div>
    </section>
    
    <!-- Style 2: Gradient Boxes -->
    <section class="section" style="background-color: rgba(255,255,255,0.5); border-radius: 20px;">
        <h2 class="section-title">Style 2: Gradient Background Boxes</h2>
        <p class="section-subtitle">Colorful gradient boxes with animations</p>
        
        <div class="grid-gradient">
            <div class="box-gradient gradient-1">
                <div class="icon">⚡</div>
                <h3 class="title">Fast</h3>
                <p class="description">Lightning-fast performance and speed.</p>
            </div>
            
            <div class="box-gradient gradient-2">
                <div class="icon">🎯</div>
                <h3 class="title">Accurate</h3>
                <p class="description">Precise and reliable results.</p>
            </div>
            
            <div class="box-gradient gradient-3">
                <div class="icon">🛡️</div>
                <h3 class="title">Secure</h3>
                <p class="description">Bank-level security protection.</p>
            </div>
            
            <div class="box-gradient gradient-4">
                <div class="icon">♻️</div>
                <h3 class="title">Eco-Friendly</h3>
                <p class="description">Sustainable green solutions.</p>
            </div>
            
            <div class="box-gradient gradient-5">
                <div class="icon">🌟</div>
                <h3 class="title">Premium</h3>
                <p class="description">Top-notch quality service.</p>
            </div>
            
            <div class="box-gradient gradient-6">
                <div class="icon">💎</div>
                <h3 class="title">Exclusive</h3>
                <p class="description">Unique premium features.</p>
            </div>
        </div>
    </section>
    
    <!-- Style 3: Icon Circle -->
    <section class="section">
        <h2 class="section-title">Style 3: Circular Icon Boxes</h2>
        <p class="section-subtitle">Icons in circular containers with rotation effect</p>
        
        <div class="grid-circle">
            <div class="box-circle">
                <div class="icon-circle">💡</div>
                <h3 class="title">Innovative</h3>
                <p class="description">Cutting-edge solutions.</p>
            </div>
            
            <div class="box-circle">
                <div class="icon-circle">⏱️</div>
                <h3 class="title">On Time</h3>
                <p class="description">Always on schedule.</p>
            </div>
            
            <div class="box-circle">
                <div class="icon-circle">🎓</div>
                <h3 class="title">Expert Team</h3>
                <p class="description">Skilled professionals.</p>
            </div>
            
            <div class="box-circle">
                <div class="icon-circle">💰</div>
                <h3 class="title">Affordable</h3>
                <p class="description">Competitive pricing.</p>
            </div>
            
            <div class="box-circle">
                <div class="icon-circle">🤝</div>
                <h3 class="title">Support</h3>
                <p class="description">24/7 availability.</p>
            </div>
            
            <div class="box-circle">
                <div class="icon-circle">✨</div>
                <h3 class="title">Quality</h3>
                <p class="description">Premium standards.</p>
            </div>
            
            <div class="box-circle">
                <div class="icon-circle">🌍</div>
                <h3 class="title">Global</h3>
                <p class="description">Worldwide service.</p>
            </div>
            
            <div class="box-circle">
                <div class="icon-circle">🏆</div>
                <h3 class="title">Award Winner</h3>
                <p class="description">Industry recognized.</p>
            </div>
        </div>
    </section>
    
    <!-- Style 4: Left Aligned -->
    <section class="section" style="background-color: rgba(255,255,255,0.5); border-radius: 20px;">
        <h2 class="section-title">Style 4: Left Aligned Boxes</h2>
        <p class="section-subtitle">Horizontal layout with icon on left</p>
        
        <div class="grid-left">
            <div class="box-left">
                <div class="icon">📋</div>
                <div class="content">
                    <h3 class="title">Planning</h3>
                    <p class="description">Detailed planning and research phase.</p>
                </div>
            </div>
            
            <div class="box-left">
                <div class="icon">✏️</div>
                <div class="content">
                    <h3 class="title">Design</h3>
                    <p class="description">Create beautiful mockups and prototypes.</p>
                </div>
            </div>
            
            <div class="box-left">
                <div class="icon">⚙️</div>
                <div class="content">
                    <h3 class="title">Development</h3>
                    <p class="description">Build with modern technologies.</p>
                </div>
            </div>
            
            <div class="box-left">
                <div class="icon">🧪</div>
                <div class="content">
                    <h3 class="title">Testing</h3>
                    <p class="description">Rigorous quality testing phase.</p>
                </div>
            </div>
            
            <div class="box-left">
                <div class="icon">🚀</div>
                <div class="content">
                    <h3 class="title">Launch</h3>
                    <p class="description">Deploy and go live successfully.</p>
                </div>
            </div>
            
            <div class="box-left">
                <div class="icon">📈</div>
                <div class="content">
                    <h3 class="title">Grow</h3>
                    <p class="description">Continuous improvement and growth.</p>
                </div>
            </div>
        </div>
    </section>
    
    <!-- Style 5: Card with Button -->
    <section class="section">
        <h2 class="section-title">Style 5: Card Style with Buttons</h2>
        <p class="section-subtitle">Full card design with call-to-action buttons</p>
        
        <div class="grid-card">
            <div class="box-card">
                <div class="card-header">
                    <div class="icon">🎨</div>
                </div>
                <div class="card-body">
                    <h3 class="title">Basic Plan</h3>
                    <p class="description">Perfect for small projects and startups.</p>
                    <a href="#" class="card-button">Learn More</a>
                </div>
            </div>
            
            <div class="box-card">
                <div class="card-header">
                    <div class="icon">💼</div>
                </div>
                <div class="card-body">
                    <h3 class="title">Business Plan</h3>
                    <p class="description">Ideal for growing businesses.</p>
                    <a href="#" class="card-button">Learn More</a>
                </div>
            </div>
            
            <div class="box-card">
                <div class="card-header">
                    <div class="icon">🏢</div>
                </div>
                <div class="card-body">
                    <h3 class="title">Enterprise Plan</h3>
                    <p class="description">For large organizations.</p>
                    <a href="#" class="card-button">Learn More</a>
                </div>
            </div>
        </div>
    </section>
</body>
</html>
```

## Summary

### **1. Box Content Structure**
```html
<div class="box">
    <div class="icon">🎨</div>
    <h3 class="title">Title</h3>
    <p class="description">Description text</p>
</div>
```

### **2. Responsive Grid Pattern**
```css
/* Mobile: 1 column */
.container {
    display: grid;
    gap: 20px;
    grid-template-columns: 1fr;
}

/* Tablet: 2-3 columns */
@media (min-width: 768px) {
    .container {
        grid-template-columns: repeat(3, 1fr);
    }
}

/* Desktop: 3-4 columns */
@media (min-width: 992px) {
    .container {
        grid-template-columns: repeat(4, 1fr);
    }
}
```

### **3. Different Box Styles**

#### **Center Aligned:**
```css
.box {
    text-align: center;
    padding: 30px;
}
```

#### **Left Aligned:**
```css
.box {
    display: flex;
    gap: 20px;
    align-items: flex-start;
}
```

#### **With Circular Icon:**
```css
.icon-wrapper {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}
```

### **4. Hover Effects**
```css
.box {
    transition: all 0.3s ease;
}

.box:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}
```

### **5. Common Responsive Patterns**

| Device | Breakpoint | Columns | Pattern |
|--------|------------|---------|---------|
| Mobile | 0-575px | 1 | Full width |
| Mobile L | 576-767px | 2 | Side by side |
| Tablet | 768-991px | 3 | Three across |
| Desktop | 992px+ | 3-4 | Wide layout |

### **6. Icon Options**
- **Emoji Icons:** 🎨 💻 📱 (Easy, no extra code)
- **Font Icons:** Font Awesome, Material Icons
- **SVG Icons:** Custom scalable graphics
- **Image Icons:** PNG/JPG images

### **7. Best Practices**
1. **Mobile First:** Start with 1 column
2. **Consistent Spacing:** Use same gap/padding
3. **Readable Text:** Minimum 16px font-size
4. **Hover Feedback:** Visual feedback on interaction
5. **Loading Performance:** Optimize images/icons
6. **Accessibility:** Proper heading hierarchy
7. **Flexible Heights:** Let content determine height
8. **Max Width:** Container max-width for large screens

### **8. Box Component Variations**
- **Basic Box:** Icon + Title + Description
- **Gradient Box:** Colored backgrounds
- **Circle Icon Box:** Icon in circular wrapper
- **Horizontal Box:** Icon left, content right
- **Card Box:** Header section + body + button
- **Bordered Box:** Border-left accent
- **Shadow Box:** Depth with box-shadow

यह complete guide responsive box content बनाने के लिए है - pure CSS/HTML के साथ!