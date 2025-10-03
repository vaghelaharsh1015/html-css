# Responsive Design & Media Queries Tutorial

## Introduction
इस tutorial में हम CSS Media Queries और Responsive Design सीखेंगे। हम सीखेंगे कि different devices (Desktop, Tablet, Mobile) के लिए अलग-अलग styles कैसे apply करें।

---

## Step 1: Viewport Meta Tag - Basic Setup

सबसे पहले viewport meta tag add करते हैं:

```html
<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Responsive Design</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            background-color: lightblue;
        }
        .container {
            background-color: white;
            padding: 20px;
            border-radius: 10px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Responsive Design</h1>
        <p>यह page सभी devices पर properly दिखेगा।</p>
    </div>
</body>
</html>
```

**Test करें:** Mobile और desktop दोनों में खोलें।

**Explanation:** `viewport meta tag` browser को बताता है कि page को device की width के according scale करना है। `width=device-width` device की actual width use करता है, `initial-scale=1.0` initial zoom level set करता है।

---

## Step 2: First Media Query - Mobile

अब पहला media query add करते हैं:

```html
<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Media Query Example</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            background-color: lightblue;
        }
        
        .box {
            background-color: white;
            padding: 20px;
            margin: 10px 0;
            border-radius: 8px;
        }
        
        /* Mobile devices (0-576px) */
        @media (max-width: 576px) {
            body {
                background-color: lightcoral;
            }
            .box {
                font-size: 14px;
            }
        }
    </style>
</head>
<body>
    <div class="box">
        <h2>Responsive Box</h2>
        <p>Screen को resize करें और color change देखें।</p>
    </div>
</body>
</html>
```

**Test करें:** Browser window को 576px से छोटा करें, background color change होगा।

**Explanation:** `@media (max-width: 576px)` का मतलब है "जब screen width 576px या कम हो"। यह mobile devices के लिए है।

---

## Step 3: Multiple Breakpoints - XS to MD

अब multiple breakpoints add करते हैं:

```html
<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Multiple Breakpoints</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
        }
        
        .info-box {
            background-color: white;
            padding: 20px;
            border-radius: 10px;
            text-align: center;
        }
        
        /* XS - Extra Small (Portrait phones, less than 576px) */
        @media (max-width: 575.98px) {
            body {
                background-color: #ffcccc;
            }
            .info-box::before {
                content: "📱 XS - Mobile Portrait: ";
            }
        }
        
        /* SM - Small (Landscape phones, 576px and up) */
        @media (min-width: 576px) and (max-width: 767.98px) {
            body {
                background-color: #ffebcc;
            }
            .info-box::before {
                content: "📱 SM - Mobile Landscape: ";
            }
        }
        
        /* MD - Medium (Tablets, 768px and up) */
        @media (min-width: 768px) and (max-width: 991.98px) {
            body {
                background-color: #ccffcc;
            }
            .info-box::before {
                content: "📱 MD - Tablet: ";
            }
        }
    </style>
</head>
<body>
    <div class="info-box">
        <h2>Current Device Size</h2>
        <p>Browser window को resize करें और changes देखें।</p>
    </div>
</body>
</html>
```

**Test करें:** Browser को different widths में resize करें।

**Explanation:** 
- `max-width: 575.98px` - XS (Mobile Portrait)
- `min-width: 576px` and `max-width: 767.98px` - SM (Mobile Landscape)
- `min-width: 768px` and `max-width: 991.98px` - MD (Tablet)

---

## Step 4: Complete Breakpoints - XS to XXL

अब सभी breakpoints add करते हैं:

```html
<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>All Breakpoints</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: Arial, sans-serif;
            padding: 20px;
            transition: background-color 0.3s ease;
        }
        
        .device-info {
            background-color: white;
            padding: 30px;
            border-radius: 15px;
            text-align: center;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }
        
        .device-name {
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 10px;
        }
        
        /* XS - Extra Small (0-575.98px) */
        @media (max-width: 575.98px) {
            body { background-color: #ffcccc; }
            .device-name::before { content: "📱 XS - Mobile Portrait"; }
            .device-info p::after { content: " (0-576px)"; }
        }
        
        /* SM - Small (576px-767.98px) */
        @media (min-width: 576px) and (max-width: 767.98px) {
            body { background-color: #ffebcc; }
            .device-name::before { content: "📱 SM - Mobile Landscape"; }
            .device-info p::after { content: " (576px-768px)"; }
        }
        
        /* MD - Medium (768px-991.98px) */
        @media (min-width: 768px) and (max-width: 991.98px) {
            body { background-color: #ccffcc; }
            .device-name::before { content: "📱 MD - Tablet"; }
            .device-info p::after { content: " (768px-992px)"; }
        }
        
        /* LG - Large (992px-1199.98px) */
        @media (min-width: 992px) and (max-width: 1199.98px) {
            body { background-color: #ccebff; }
            .device-name::before { content: "💻 LG - Small Laptop"; }
            .device-info p::after { content: " (992px-1200px)"; }
        }
        
        /* XL - Extra Large (1200px-1399.98px) */
        @media (min-width: 1200px) and (max-width: 1399.98px) {
            body { background-color: #e6ccff; }
            .device-name::before { content: "💻 XL - Desktop"; }
            .device-info p::after { content: " (1200px-1400px)"; }
        }
        
        /* XXL - Extra Extra Large (1400px+) */
        @media (min-width: 1400px) {
            body { background-color: #ffccf2; }
            .device-name::before { content: "🖥️ XXL - Large Desktop"; }
            .device-info p::after { content: " (1400px+)"; }
        }
    </style>
</head>
<body>
    <div class="device-info">
        <h1 class="device-name"></h1>
        <p>Browser window को resize करें और device type देखें</p>
    </div>
</body>
</html>
```

**Test करें:** Different widths पर resize करके सभी breakpoints देखें।

---

## Step 5: Responsive Grid Layout

Responsive grid बनाते हैं:

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
        
        .grid {
            display: grid;
            gap: 20px;
        }
        
        .card {
            background-color: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            text-align: center;
        }
        
        /* Mobile Portrait - 1 column */
        @media (max-width: 575.98px) {
            .grid {
                grid-template-columns: 1fr;
            }
        }
        
        /* Mobile Landscape - 2 columns */
        @media (min-width: 576px) and (max-width: 767.98px) {
            .grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }
        
        /* Tablet - 3 columns */
        @media (min-width: 768px) and (max-width: 991.98px) {
            .grid {
                grid-template-columns: repeat(3, 1fr);
            }
        }
        
        /* Desktop - 4 columns */
        @media (min-width: 992px) {
            .grid {
                grid-template-columns: repeat(4, 1fr);
            }
        }
    </style>
</head>
<body>
    <h1>Responsive Grid Layout</h1>
    <div class="grid">
        <div class="card">Card 1</div>
        <div class="card">Card 2</div>
        <div class="card">Card 3</div>
        <div class="card">Card 4</div>
        <div class="card">Card 5</div>
        <div class="card">Card 6</div>
        <div class="card">Card 7</div>
        <div class="card">Card 8</div>
    </div>
</body>
</html>
```

**Test करें:** Different screen sizes पर columns की संख्या change होगी।

**Explanation:** Grid columns automatically adjust होते हैं device size के according।

---

## Step 6: Responsive Navigation

Responsive navigation menu बनाते हैं:

```html
<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Responsive Navigation</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: Arial, sans-serif;
        }
        
        .navbar {
            background-color: #333;
            padding: 15px 20px;
        }
        
        .nav-menu {
            display: flex;
            list-style: none;
            gap: 20px;
        }
        
        .nav-menu a {
            color: white;
            text-decoration: none;
            padding: 10px 15px;
        }
        
        .nav-menu a:hover {
            background-color: #555;
            border-radius: 5px;
        }
        
        /* Mobile - Vertical menu */
        @media (max-width: 767.98px) {
            .nav-menu {
                flex-direction: column;
                gap: 5px;
            }
            
            .nav-menu a {
                display: block;
                text-align: center;
            }
        }
        
        /* Tablet and up - Horizontal menu */
        @media (min-width: 768px) {
            .nav-menu {
                justify-content: center;
            }
        }
    </style>
</head>
<body>
    <nav class="navbar">
        <ul class="nav-menu">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>
    
    <div style="padding: 20px;">
        <h1>Responsive Navigation</h1>
        <p>Screen को resize करें navigation layout देखने के लिए।</p>
    </div>
</body>
</html>
```

**Test करें:** Mobile में vertical, desktop में horizontal menu दिखेगा।

---

## Step 7: Responsive Typography

Font sizes को responsive बनाते हैं:

```html
<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Responsive Typography</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            padding: 20px;
            line-height: 1.6;
        }
        
        h1 {
            color: #333;
            margin-bottom: 10px;
        }
        
        p {
            color: #666;
            margin-bottom: 15px;
        }
        
        /* Mobile - Smaller text */
        @media (max-width: 575.98px) {
            h1 { font-size: 24px; }
            p { font-size: 14px; }
        }
        
        /* Tablet - Medium text */
        @media (min-width: 576px) and (max-width: 991.98px) {
            h1 { font-size: 32px; }
            p { font-size: 16px; }
        }
        
        /* Desktop - Larger text */
        @media (min-width: 992px) {
            h1 { font-size: 42px; }
            p { font-size: 18px; }
        }
    </style>
</head>
<body>
    <h1>Responsive Typography</h1>
    <p>यह text automatically resize होता है device size के according। Screen को resize करके देखें।</p>
    <p>Mobile पर छोटा, tablet पर medium, और desktop पर बड़ा text दिखेगा।</p>
</body>
</html>
```

**Test करें:** Different devices पर font sizes change होंगे।

---

## Step 8: Hide/Show Elements

Different devices पर elements को hide/show करते हैं:

```html
<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hide/Show Elements</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            padding: 20px;
        }
        
        .mobile-only {
            display: block;
            background-color: #ffcccc;
            padding: 15px;
            border-radius: 8px;
            margin: 10px 0;
        }
        
        .desktop-only {
            display: block;
            background-color: #ccebff;
            padding: 15px;
            border-radius: 8px;
            margin: 10px 0;
        }
        
        /* Hide mobile content on desktop */
        @media (min-width: 768px) {
            .mobile-only {
                display: none;
            }
        }
        
        /* Hide desktop content on mobile */
        @media (max-width: 767.98px) {
            .desktop-only {
                display: none;
            }
        }
    </style>
</head>
<body>
    <h1>Device Specific Content</h1>
    
    <div class="mobile-only">
        <h3>📱 Mobile Only Content</h3>
        <p>यह content केवल mobile/tablet पर दिखता है।</p>
    </div>
    
    <div class="desktop-only">
        <h3>💻 Desktop Only Content</h3>
        <p>यह content केवल desktop पर दिखता है।</p>
    </div>
    
    <div style="background-color: #f0f0f0; padding: 15px; border-radius: 8px;">
        <h3>✨ Always Visible</h3>
        <p>यह content सभी devices पर दिखता है।</p>
    </div>
</body>
</html>
```

**Test करें:** Mobile और desktop में different content दिखेगा।

---

## Step 9: Responsive Images

Images को responsive बनाते हैं:

```html
<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Responsive Images</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            padding: 20px;
        }
        
        .image-container {
            margin: 20px 0;
        }
        
        .responsive-img {
            width: 100%;
            height: auto;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }
        
        /* Mobile - Stack vertically */
        @media (max-width: 767.98px) {
            .image-grid {
                display: grid;
                grid-template-columns: 1fr;
                gap: 15px;
            }
        }
        
        /* Desktop - Side by side */
        @media (min-width: 768px) {
            .image-grid {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 20px;
            }
        }
    </style>
</head>
<body>
    <h1>Responsive Images</h1>
    
    <div class="image-grid">
        <div class="image-container">
            <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjNjY3ZWVhIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIyNCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5JbWFnZSAxPC90ZXh0Pjwvc3ZnPg==" alt="Image 1" class="responsive-img">
        </div>
        
        <div class="image-container">
            <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjNzY0YmEyIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIyNCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5JbWFnZSAyPC90ZXh0Pjwvc3ZnPg==" alt="Image 2" class="responsive-img">
        </div>
        
        <div class="image-container">
            <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZmY2YjZiIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIyNCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5JbWFnZSAzPC90ZXh0Pjwvc3ZnPg==" alt="Image 3" class="responsive-img">
        </div>
    </div>
</body>
</html>
```

**Test करें:** Images automatically resize होंगी screen size के according।

---

## Step 10: Orientation Media Query

Device orientation के based पर styles apply करते हैं:

```html
<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Orientation Media Query</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
        }
        
        .orientation-box {
            background-color: white;
            padding: 30px;
            border-radius: 15px;
            text-align: center;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }
        
        /* Portrait orientation */
        @media (orientation: portrait) {
            body {
                background: linear-gradient(180deg, #667eea 0%, #764ba2 100%);
            }
            .orientation-box::before {
                content: "📱 Portrait Mode";
                display: block;
                font-size: 24px;
                margin-bottom: 10px;
            }
        }
        
        /* Landscape orientation */
        @media (orientation: landscape) {
            body {
                background: linear-gradient(90deg, #f093fb 0%, #f5576c 100%);
            }
            .orientation-box::before {
                content: "📱 Landscape Mode";
                display: block;
                font-size: 24px;
                margin-bottom: 10px;
            }
        }
    </style>
</head>
<body>
    <div class="orientation-box">
        <h2>Orientation Detection</h2>
        <p>अपने mobile को rotate करें orientation change देखने के लिए।</p>
    </div>
</body>
</html>
```

**Test करें:** Mobile को rotate करें, background color change होगा।

---

## Complete Reference Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Complete Responsive Website</title>
    <style>
        /* Reset & Base Styles */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
        }
        
        /* Container */
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }
        
        /* Header & Navigation */
        .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 20px 0;
            position: sticky;
            top: 0;
            z-index: 1000;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        
        .nav-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .logo {
            font-size: 24px;
            font-weight: bold;
        }
        
        .nav-menu {
            display: flex;
            list-style: none;
            gap: 30px;
        }
        
        .nav-menu a {
            color: white;
            text-decoration: none;
            padding: 8px 16px;
            border-radius: 5px;
            transition: background-color 0.3s ease;
        }
        
        .nav-menu a:hover {
            background-color: rgba(255,255,255,0.2);
        }
        
        /* Hero Section */
        .hero {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 80px 0;
            text-align: center;
        }
        
        .hero h1 {
            font-size: 48px;
            margin-bottom: 20px;
        }
        
        .hero p {
            font-size: 20px;
            margin-bottom: 30px;
        }
        
        .btn {
            background-color: white;
            color: #667eea;
            padding: 15px 40px;
            border: none;
            border-radius: 30px;
            font-size: 16px;
            font-weight: bold;
            cursor: pointer;
            transition: transform 0.3s ease;
        }
        
        .btn:hover {
            transform: translateY(-2px);
        }
        
        /* Features Section */
        .features {
            padding: 80px 0;
            background-color: #f8f9fa;
        }
        
        .section-title {
            text-align: center;
            font-size: 36px;
            margin-bottom: 50px;
            color: #333;
        }
        
        .features-grid {
            display: grid;
            gap: 30px;
        }
        
        .feature-card {
            background-color: white;
            padding: 30px;
            border-radius: 15px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            text-align: center;
            transition: transform 0.3s ease;
        }
        
        .feature-card:hover {
            transform: translateY(-5px);
        }
        
        .feature-icon {
            font-size: 48px;
            margin-bottom: 20px;
        }
        
        .feature-card h3 {
            font-size: 24px;
            margin-bottom: 15px;
            color: #667eea;
        }
        
        .feature-card p {
            color: #666;
            line-height: 1.8;
        }
        
        /* Device Info Section */
        .device-info {
            padding: 60px 0;
            text-align: center;
        }
        
        .device-badge {
            display: inline-block;
            padding: 20px 40px;
            border-radius: 50px;
            font-size: 24px;
            font-weight: bold;
            color: white;
            margin-top: 20px;
        }
        
        /* Footer */
        .footer {
            background-color: #2c3e50;
            color: white;
            padding: 40px 0;
            text-align: center;
        }
        
        .footer-content {
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            margin-bottom: 20px;
        }
        
        .footer-section {
            margin: 20px;
        }
        
        .footer-section h4 {
            margin-bottom: 15px;
            color: #3498db;
        }
        
        .footer-section ul {
            list-style: none;
        }
        
        .footer-section ul li {
            margin: 8px 0;
        }
        
        .footer-section a {
            color: #ecf0f1;
            text-decoration: none;
        }
        
        .footer-bottom {
            border-top: 1px solid #34495e;
            padding-top: 20px;
            margin-top: 20px;
        }
        
        /* Responsive Breakpoints */
        
        /* XXL - Extra Extra Large Desktop (1400px+) */
        @media (min-width: 1400px) {
            .container {
                max-width: 1320px;
            }
            .features-grid {
                grid-template-columns: repeat(4, 1fr);
            }
            .device-badge {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            }
            .device-badge::before {
                content: "🖥️ XXL - Extra Large Desktop (1400px+)";
            }
        }
        
        /* XL - Extra Large Desktop (1200px-1399px) */
        @media (min-width: 1200px) and (max-width: 1399.98px) {
            .features-grid {
                grid-template-columns: repeat(4, 1fr);
            }
            .device-badge {
                background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
            }
            .device-badge::before {
                content: "💻 XL - Desktop (1200px-1400px)";
            }
        }
        
        /* LG - Large Desktop/Laptop (992px-1199px) */
        @media (min-width: 992px) and (max-width: 1199.98px) {
            .features-grid {
                grid-template-columns: repeat(3, 1fr);
            }
            .hero h1 {
                font-size: 42px;
            }
            .device-badge {
                background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
            }
            .device-badge::before {
                content: "💻 LG - Laptop (992px-1200px)";
            }
        }
        
        /* MD - Medium Tablet (768px-991px) */
        @media (min-width: 768px) and (max-width: 991.98px) {
            .features-grid {
                grid-template-columns: repeat(2, 1fr);
            }
            .hero h1 {
                font-size: 36px;
            }
            .hero p {
                font-size: 18px;
            }
            .device-badge {
                background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
            }
            .device-badge::before {
                content: "📱 MD - Tablet (768px-992px)";
            }
        }
        
        /* SM - Small Mobile Landscape (576px-767px) */
        @media (min-width: 576px) and (max-width: 767.98px) {
            .nav-menu {
                flex-direction: column;
                gap: 10px;
            }
            .features-grid {
                grid-template-columns: repeat(2, 1fr);
            }
            .hero h1 {
                font-size: 32px;
            }
            .hero p {
                font-size: 16px;
            }
            .hero {
                padding: 50px 0;
            }
            .device-badge {
                background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
            }
            .device-badge::before {
                content: "📱 SM - Mobile Landscape (576px-768px)";
            }
        }
        
        /* XS - Extra Small Mobile Portrait (0-575px) */
        @media (max-width: 575.98px) {
            .nav-container {
                flex-direction: column;
                gap: 20px;
            }
            .nav-menu {
                flex-direction: column;
                gap: 10px;
                width: 100%;
            }
            .nav-menu a {
                display: block;
                text-align: center;
            }
            .features-grid {
                grid-template-columns: 1fr;
            }
            .hero h1 {
                font-size: 28px;
            }
            .hero p {
                font-size: 16px;
            }
            .hero {
                padding: 40px 0;
            }
            .section-title {
                font-size: 28px;
            }
            .footer-content {
                flex-direction: column;
            }
            .device-badge {
                background: linear-gradient(135deg, #ff6b6b 0%, #feca57 100%);
                font-size: 18px;
                padding: 15px 25px;
            }
            .device-badge::before {
                content: "📱 XS - Mobile Portrait (0-576px)";
            }
        }
        
        /* Orientation Specific */
        @media (max-width: 767.98px) and (orientation: landscape) {
            .hero {
                padding: 30px 0;
            }
            .hero h1 {
                font-size: 24px;
            }
        }
        
        @media (max-width: 767.98px) and (orientation: portrait) {
            .hero {
                padding: 50px 0;
            }
        }
    </style>
</head>
<body>
    <!-- Header -->
    <header class="header">
        <div class="container">
            <nav class="nav-container">
                <div class="logo">MyWebsite</div>
                <ul class="nav-menu">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#features">Features</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>
    
    <!-- Hero Section -->
    <section class="hero" id="home">
        <div class="container">
            <h1>Welcome to Responsive Design</h1>
            <p>यह website सभी devices पर perfectly काम करती है</p>
            <button class="btn">Get Started</button>
        </div>
    </section>
    
    <!-- Features Section -->
    <section class="features" id="features">
        <div class="container">
            <h2 class="section-title">Our Features</h2>
            <div class="features-grid">
                <div class="feature-card">
                    <div class="feature-icon">📱</div>
                    <h3>Mobile Friendly</h3>
                    <p>Perfect display on all mobile devices with responsive design</p>
                </div>
                
                <div class="feature-card">
                    <div class="feature-icon">💻</div>
                    <h3>Desktop Ready</h3>
                    <p>Optimized layout for desktop and laptop screens</p>
                </div>
                
                <div class="feature-card">
                    <div class="feature-icon">⚡</div>
                    <h3>Fast Loading</h3>
                    <p>Lightning fast performance on all devices</p>
                </div>
                
                <div class="feature-card">
                    <div class="feature-icon">🎨</div>
                    <h3>Modern Design</h3>
                    <p>Beautiful and contemporary user interface</p>
                </div>
                
                <div class="feature-card">
                    <div class="feature-icon">🔒</div>
                    <h3>Secure</h3>
                    <p>Built with security best practices</p>
                </div>
                
                <div class="feature-card">
                    <div class="feature-icon">🌐</div>
                    <h3>Cross Browser</h3>
                    <p>Works perfectly on all modern browsers</p>
                </div>
            </div>
        </div>
    </section>
    
    <!-- Device Info Section -->
    <section class="device-info">
        <div class="container">
            <h2 class="section-title">Current Device</h2>
            <p>Browser window को resize करें device type देखने के लिए</p>
            <div class="device-badge"></div>
        </div>
    </section>
    
    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h4>About Us</h4>
                    <ul>
                        <li><a href="#">Company</a></li>
                        <li><a href="#">Team</a></li>
                        <li><a href="#">Careers</a></li>
                    </ul>
                </div>
                
                <div class="footer-section">
                    <h4>Services</h4>
                    <ul>
                        <li><a href="#">Web Design</a></li>
                        <li><a href="#">Development</a></li>
                        <li><a href="#">Consulting</a></li>
                    </ul>
                </div>
                
                <div class="footer-section">
                    <h4>Contact</h4>
                    <ul>
                        <li><a href="#">Email</a></li>
                        <li><a href="#">Phone</a></li>
                        <li><a href="#">Location</a></li>
                    </ul>
                </div>
            </div>
            
            <div class="footer-bottom">
                <p>&copy; 2024 MyWebsite. All rights reserved. Made with ❤️</p>
            </div>
        </div>
    </footer>
</body>
</html>
```

## Summary

### **1. Viewport Meta Tag**
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
- **width=device-width** - Device की actual width use करता है
- **initial-scale=1.0** - Initial zoom level 1:1 set करता है
- यह tag responsive design के लिए अनिवार्य है

### **2. Breakpoints Chart**

| Breakpoint | Device Type | Width Range | Code |
|------------|-------------|-------------|------|
| **XS** | Mobile Portrait | 0-575.98px | `@media (max-width: 575.98px)` |
| **SM** | Mobile Landscape | 576px-767.98px | `@media (min-width: 576px) and (max-width: 767.98px)` |
| **MD** | Tablet | 768px-991.98px | `@media (min-width: 768px) and (max-width: 991.98px)` |
| **LG** | Small Laptop | 992px-1199.98px | `@media (min-width: 992px) and (max-width: 1199.98px)` |
| **XL** | Desktop | 1200px-1399.98px | `@media (min-width: 1200px) and (max-width: 1399.98px)` |
| **XXL** | Large Desktop | 1400px+ | `@media (min-width: 1400px)` |

### **3. Media Query Syntax**
```css
/* Max-width (Mobile First) */
@media (max-width: 768px) {
    /* Styles for screens <= 768px */
}

/* Min-width (Desktop First) */
@media (min-width: 768px) {
    /* Styles for screens >= 768px */
}

/* Range */
@media (min-width: 768px) and (max-width: 991.98px) {
    /* Styles for specific range */
}

/* Orientation */
@media (orientation: portrait) {
    /* Portrait mode styles */
}
```

### **4. Common Responsive Patterns**

#### **Mobile First Approach:**
```css
/* Base styles for mobile */
.element {
    font-size: 14px;
}

/* Tablet and up */
@media (min-width: 768px) {
    .element {
        font-size: 16px;
    }
}

/* Desktop and up */
@media (min-width: 992px) {
    .element {
        font-size: 18px;
    }
}
```

#### **Desktop First Approach:**
```css
/* Base styles for desktop */
.element {
    font-size: 18px;
}

/* Tablet and down */
@media (max-width: 991.98px) {
    .element {
        font-size: 16px;
    }
}

/* Mobile and down */
@media (max-width: 767.98px) {
    .element {
        font-size: 14px;
    }
}
```

### **5. Best Practices**

1. **हमेशा viewport meta tag use करें**
2. **Mobile-first approach prefer करें**
3. **Logical breakpoints use करें content के according**
4. **Images को responsive बनाएं (`width: 100%; height: auto;`)**
5. **Touch-friendly sizes use करें mobile पर (min 44px)**
6. **Text को readable रखें सभी devices पर**
7. **Flexible units use करें (%, em, rem, vw, vh)**
8. **Test करें real devices पर**

### **6. Important Tips**
- **.98px** fractional values browser rounding issues को avoid करने के लिए
- **Orientation queries** landscape/portrait modes के लिए
- **Display: none** carefully use करें performance के लिए
- **Flexbox और Grid** responsive layouts के लिए best हैं
- **CSS variables** का use करें consistent theming के लिए

यह complete guide आपको professional responsive websites बनाने में help करेगा!