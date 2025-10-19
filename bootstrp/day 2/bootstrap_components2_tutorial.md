# Bootstrap 5 Tutorial - Services, Gallery & FAQ Sections

## 📚 Tutorial Overview
इस tutorial में हम तीन important sections बनाएंगे:
1. **Services Section** - Cards के साथ
2. **Gallery Section** - Nav-tabs और Cards के साथ
3. **FAQ Section** - Accordion के साथ

---

## 🎯 Section 1: Services Section with Cards

### Step 1: Basic HTML Structure तैयार करें

सबसे पहले एक basic HTML file बनाएं और Bootstrap 5 CDN link add करें।

```html
<!DOCTYPE html>
<html lang="hi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bootstrap 5 Project</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>

</body>
</html>
```

**Explanation:**
- `<link>` tag में Bootstrap 5 की CSS file को CDN से link किया गया है
- `viewport` meta tag responsive design के लिए जरूरी है
- अब browser में file open करके check करें कि page load हो रहा है

### Step 2: Services Section का Container बनाएं

अब `<body>` tag के अंदर services section का structure बनाते हैं:

```html
<section class="services py-5">
    <div class="container">
        
    </div>
</section>
```

**Explanation:**
- `py-5` class padding-top और padding-bottom देती है (5 units)
- `container` class Bootstrap की responsive container है जो content को center में रखती है
- अब browser में page reload करके देखें

### Step 3: Section Heading Add करें

Container के अंदर heading add करें:

```html
<div class="text-center mb-5">
    <h2 class="display-4 fw-bold">हमारी सेवाएं</h2>
    <p class="text-muted">हम आपको बेहतरीन services प्रदान करते हैं</p>
</div>
```

**Explanation:**
- `text-center` सभी content को center align करता है
- `mb-5` margin-bottom देता है (5 units)
- `display-4` बड़ी heading के लिए Bootstrap class है
- `fw-bold` font-weight को bold बनाता है
- `text-muted` हल्का grey color देता है
- Browser में check करें - आपको centered heading दिखनी चाहिए

### Step 4: Row और First Card बनाएं

अब cards के लिए row बनाएं और पहला card add करें:

```html
<div class="row g-4">
    <div class="col-md-4">
        <div class="card h-100 shadow">
            
        </div>
    </div>
</div>
```

**Explanation:**
- `row` Bootstrap का grid system है
- `g-4` gutters (spacing) देता है columns के बीच में
- `col-md-4` medium screens पर 4 columns (total 12 में से) लेगा, यानी 3 cards एक row में
- `h-100` card की height को 100% करता है
- `shadow` card को shadow effect देता है
- Browser में देखें - अभी card खाली दिखेगा

### Step 5: Card का Body Content Add करें

Card के अंदर icon, title और description add करें:

```html
<div class="card-body text-center">
    <div class="mb-3">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-laptop text-primary" viewBox="0 0 16 16">
            <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"/>
        </svg>
    </div>
    <h5 class="card-title">Web Development</h5>
    <p class="card-text text-muted">Professional websites और web applications बनाते हैं</p>
</div>
```

**Explanation:**
- `card-body` Bootstrap की class है card के content के लिए
- SVG icon Bootstrap Icons से लिया गया है (laptop icon)
- `text-primary` icon को primary color (blue) देता है
- `mb-3` icon के नीचे margin देता है
- `card-title` और `card-text` Bootstrap की card classes हैं
- Browser में check करें - एक card with icon दिखना चाहिए

### Step 6: दूसरा और तीसरा Card Add करें

अब same structure के साथ 2 और cards बनाएं:

```html
<div class="col-md-4">
    <div class="card h-100 shadow">
        <div class="card-body text-center">
            <div class="mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-palette text-success" viewBox="0 0 16 16">
                    <path d="M8 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm4 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM5.5 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
                </svg>
            </div>
            <h5 class="card-title">Graphic Design</h5>
            <p class="card-text text-muted">Creative और attractive designs तैयार करते हैं</p>
        </div>
    </div>
</div>

<div class="col-md-4">
    <div class="card h-100 shadow">
        <div class="card-body text-center">
            <div class="mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-phone text-danger" viewBox="0 0 16 16">
                    <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/>
                </svg>
            </div>
            <h5 class="card-title">Mobile Apps</h5>
            <p class="card-text text-muted">Android और iOS के लिए apps develop करते हैं</p>
        </div>
    </div>
</div>
```

**Explanation:**
- तीनों cards का structure same है, बस icon और content अलग है
- पहले card में `text-primary` (blue), दूसरे में `text-success` (green), तीसरे में `text-danger` (red)
- सभी cards एक row में side by side दिखेंगे
- Browser में test करें - तीन beautiful cards दिखने चाहिए

---

## 🎯 Section 2: Gallery Section with Nav-tabs & Cards

### Step 7: Gallery Section का Container बनाएं

Services section के बाद एक नया section add करें:

```html
<section class="gallery py-5 bg-light">
    <div class="container">
        
    </div>
</section>
```

**Explanation:**
- `bg-light` class light grey background color देती है
- यह section services section से visually अलग दिखेगा
- Browser में check करें

### Step 8: Gallery Heading Add करें

```html
<div class="text-center mb-5">
    <h2 class="display-4 fw-bold">हमारी Gallery</h2>
    <p class="text-muted">हमारे कुछ बेहतरीन काम देखें</p>
</div>
```

**Explanation:**
- Same structure जैसा services section में था
- Browser में heading दिखनी चाहिए

### Step 9: Nav-tabs बनाएं

अब filtering के लिए navigation tabs बनाते हैं:

```html
<ul class="nav nav-tabs justify-content-center mb-4" id="galleryTabs">
    <li class="nav-item">
        <a class="nav-link active" href="#all">सभी</a>
    </li>
</ul>
```

**Explanation:**
- `nav nav-tabs` Bootstrap की classes हैं tabs बनाने के लिए
- `justify-content-center` tabs को center में align करता है
- `mb-4` margin-bottom देता है
- `nav-item` हर tab के लिए use होता है
- `nav-link` actual link की class है
- `active` class first tab को active/selected दिखाता है
- `href="#all"` tab का reference है
- Browser में check करें - एक tab दिखना चाहिए

### Step 10: बाकी Tabs Add करें

```html
<li class="nav-item">
    <a class="nav-link" href="#web">Web</a>
</li>
<li class="nav-item">
    <a class="nav-link" href="#design">Design</a>
</li>
<li class="nav-item">
    <a class="nav-link" href="#mobile">Mobile</a>
</li>
```

**Explanation:**
- तीन और tabs add किए गए
- सिर्फ पहला tab `active` class के साथ है
- Browser में 4 tabs दिखने चाहिए
- Note: हमने JavaScript नहीं use किया इसलिए tabs click करने पर content change नहीं होगा

### Step 11: Gallery Cards का Row बनाएं

Tab के नीचे gallery items के लिए row बनाएं:

```html
<div class="row g-4">
    <div class="col-md-4">
        <div class="card">
            
        </div>
    </div>
</div>
```

**Explanation:**
- Same structure जैसा services में use किया था
- `g-4` spacing देता है cards के बीच
- Browser में check करें

### Step 12: Gallery Card में Image Add करें

```html
<img src="https://via.placeholder.com/400x300/0d6efd/ffffff?text=Project+1" class="card-img-top" alt="Project 1">
<div class="card-body">
    <h5 class="card-title">Project 1</h5>
    <p class="card-text"><span class="badge bg-primary">Web</span></p>
</div>
```

**Explanation:**
- `card-img-top` image को card के top में place करता है
- Placeholder image use की गई है (आप real images use कर सकते हैं)
- `badge` class छोटा colored label बनाता है category दिखाने के लिए
- `bg-primary` badge को blue color देता है
- Browser में image के साथ card दिखना चाहिए

### Step 13: 5 और Gallery Cards Add करें

```html
<div class="col-md-4">
    <div class="card">
        <img src="https://via.placeholder.com/400x300/198754/ffffff?text=Project+2" class="card-img-top" alt="Project 2">
        <div class="card-body">
            <h5 class="card-title">Project 2</h5>
            <p class="card-text"><span class="badge bg-success">Design</span></p>
        </div>
    </div>
</div>

<div class="col-md-4">
    <div class="card">
        <img src="https://via.placeholder.com/400x300/dc3545/ffffff?text=Project+3" class="card-img-top" alt="Project 3">
        <div class="card-body">
            <h5 class="card-title">Project 3</h5>
            <p class="card-text"><span class="badge bg-danger">Mobile</span></p>
        </div>
    </div>
</div>

<div class="col-md-4">
    <div class="card">
        <img src="https://via.placeholder.com/400x300/0d6efd/ffffff?text=Project+4" class="card-img-top" alt="Project 4">
        <div class="card-body">
            <h5 class="card-title">Project 4</h5>
            <p class="card-text"><span class="badge bg-primary">Web</span></p>
        </div>
    </div>
</div>

<div class="col-md-4">
    <div class="card">
        <img src="https://via.placeholder.com/400x300/198754/ffffff?text=Project+5" class="card-img-top" alt="Project 5">
        <div class="card-body">
            <h5 class="card-title">Project 5</h5>
            <p class="card-text"><span class="badge bg-success">Design</span></p>
        </div>
    </div>
</div>

<div class="col-md-4">
    <div class="card">
        <img src="https://via.placeholder.com/400x300/dc3545/ffffff?text=Project+6" class="card-img-top" alt="Project 6">
        <div class="card-body">
            <h5 class="card-title">Project 6</h5>
            <p class="card-text"><span class="badge bg-danger">Mobile</span></p>
        </div>
    </div>
</div>
```

**Explanation:**
- 6 gallery cards बना दिए (2 rows में 3-3 cards)
- हर card में अलग color की placeholder image है
- Different categories के badges use किए गए
- Browser में 6 cards grid में दिखने चाहिए

---

## 🎯 Section 3: FAQ Section with Accordion

### Step 14: FAQ Section का Container बनाएं

Gallery section के बाद FAQ section add करें:

```html
<section class="faq py-5">
    <div class="container">
        
    </div>
</section>
```

**Explanation:**
- यह section white background पर होगा (default)
- Browser में check करें

### Step 15: FAQ Heading Add करें

```html
<div class="text-center mb-5">
    <h2 class="display-4 fw-bold">सामान्य प्रश्न (FAQ)</h2>
    <p class="text-muted">आपके कुछ सवालों के जवाब</p>
</div>
```

**Explanation:**
- Same heading structure जैसा पहले sections में use किया
- Browser में heading दिखनी चाहिए

### Step 16: Accordion का Structure शुरू करें

अब Bootstrap accordion बनाते हैं:

```html
<div class="row justify-content-center">
    <div class="col-lg-8">
        <div class="accordion" id="faqAccordion">
            
        </div>
    </div>
</div>
```

**Explanation:**
- `justify-content-center` row को center में align करता है
- `col-lg-8` large screens पर 8 columns width लेगा (accordion को narrow रखने के लिए)
- `accordion` Bootstrap की accordion class है
- `id="faqAccordion"` accordion को identify करने के लिए unique ID
- Browser में check करें

### Step 17: पहला Accordion Item बनाएं

```html
<div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
        <button class="accordion-button" type="button">
            आपकी services की कीमत क्या है?
        </button>
    </h2>
</div>
```

**Explanation:**
- `accordion-item` हर question के लिए container है
- `accordion-header` question/heading के लिए
- `accordion-button` clickable button है जो content को expand/collapse करता है
- पहले item में `collapsed` class नहीं है इसलिए यह by default open रहेगा
- `id="headingOne"` unique identifier है
- Browser में button दिखना चाहिए

### Step 18: पहले Question का Answer Add करें

```html
<div id="collapseOne" class="accordion-collapse collapse show">
    <div class="accordion-body">
        हमारी services की कीमत project की complexity और requirements पर निर्भर करती है। 
        एक basic website ₹15,000 से शुरू होती है। Custom projects के लिए हमसे संपर्क करें।
    </div>
</div>
```

**Explanation:**
- `accordion-collapse` और `collapse` classes collapsible behavior के लिए
- `show` class पहले item को by default open रखती है
- `accordion-body` actual answer का content है
- `id="collapseOne"` को button से connect किया जाएगा
- Browser में open accordion item दिखना चाहिए

### Step 19: दूसरा Accordion Item Add करें

```html
<div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
        <button class="accordion-button collapsed" type="button">
            Project complete होने में कितना समय लगता है?
        </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse">
        <div class="accordion-body">
            एक basic website 2-3 हफ्ते में तैयार हो जाती है। Complex projects में 1-3 महीने लग सकते हैं। 
            Timeline project की requirements पर depend करती है।
        </div>
    </div>
</div>
```

**Explanation:**
- दूसरे item में `collapsed` class है button पर, इसलिए यह by default closed रहेगा
- `show` class नहीं है collapse div में
- Browser में check करें - पहला open, दूसरा closed दिखना चाहिए

### Step 20: तीसरा और चौथा Accordion Item Add करें

```html
<div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
        <button class="accordion-button collapsed" type="button">
            क्या आप maintenance support भी देते हैं?
        </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse">
        <div class="accordion-body">
            जी हां, हम project delivery के बाद maintenance और support services भी provide करते हैं। 
            Monthly और yearly maintenance packages available हैं।
        </div>
    </div>
</div>

<div class="accordion-item">
    <h2 class="accordion-header" id="headingFour">
        <button class="accordion-button collapsed" type="button">
            Payment terms क्या हैं?
        </button>
    </h2>
    <div id="collapseFour" class="accordion-collapse collapse">
        <div class="accordion-body">
            आमतौर पर हम 50% advance और 50% project completion पर लेते हैं। 
            बड़े projects के लिए milestone-based payment भी possible है।
        </div>
    </div>
</div>
```

**Explanation:**
- Same structure के साथ 2 और accordion items add किए
- सभी items closed state में हैं (collapsed class के साथ)
- Browser में complete accordion दिखना चाहिए
- Note: Click करने पर items expand/collapse होंगे (यह Bootstrap की built-in CSS functionality है, JavaScript की जरूरत नहीं)

### Step 21: Footer Section (Optional)

Document के end में एक simple footer add करें:

```html
<footer class="bg-dark text-white text-center py-4 mt-5">
    <div class="container">
        <p class="mb-0">&copy; 2024 Your Company. All Rights Reserved.</p>
    </div>
</footer>
```

**Explanation:**
- `bg-dark` dark background color
- `text-white` white text color
- `text-center` content को center align करता है
- `py-4` padding top और bottom
- `mt-5` margin-top (section से gap)
- Browser में complete page test करें

---

## ✅ Complete HTML Code

नीचे पूरा code दिया गया है जो आप directly use कर सकते हैं:

```html
<!DOCTYPE html>
<html lang="hi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bootstrap 5 Project - Services, Gallery & FAQ</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>

    <!-- Services Section -->
    <section class="services py-5">
        <div class="container">
            <div class="text-center mb-5">
                <h2 class="display-4 fw-bold">हमारी सेवाएं</h2>
                <p class="text-muted">हम आपको बेहतरीन services प्रदान करते हैं</p>
            </div>
            
            <div class="row g-4">
                <div class="col-md-4">
                    <div class="card h-100 shadow">
                        <div class="card-body text-center">
                            <div class="mb-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-laptop text-primary" viewBox="0 0 16 16">
                                    <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"/>
                                </svg>
                            </div>
                            <h5 class="card-title">Web Development</h5>
                            <p class="card-text text-muted">Professional websites और web applications बनाते हैं</p>
                        </div>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="card h-100 shadow">
                        <div class="card-body text-center">
                            <div class="mb-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-palette text-success" viewBox="0 0 16 16">
                                    <path d="M8 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm4 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM5.5 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
                                </svg>
                            </div>
                            <h5 class="card-title">Graphic Design</h5>
                            <p class="card-text text-muted">Creative और attractive designs तैयार करते हैं</p>
                        </div>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="card h-100 shadow">
                        <div class="card-body text-center">
                            <div class="mb-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-phone text-danger" viewBox="0 0 16 16">
                                    <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/>
                                </svg>
                            </div>
                            <h5 class="card-title">Mobile Apps</h5>
                            <p class="card-text text-muted">Android और iOS के लिए apps develop करते हैं</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Gallery Section -->
    <section class="gallery py-5 bg-light">
        <div class="container">
            <div class="text-center mb-5">
                <h2 class="display-4 fw-bold">हमारी Gallery</h2>
                <p class="text-muted">हमारे कुछ बेहतरीन काम देखें</p>
            </div>

            <ul class="nav nav-tabs justify-content-center mb-4" id="galleryTabs">
                <li class="nav-item">
                    <a class="nav-link active" href="#all">सभी</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#web">Web</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#design">Design</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#mobile">Mobile</a>
                </li>
            </ul>

            <div class="row g-4">
                <div class="col-md-4">
                    <div class="card">
                        <img src="https://via.placeholder.com/400x300/0d6efd/ffffff?text=Project+1" class="card-img-top" alt="Project 1">
                        <div class="card-body">
                            <h5 class="card-title">Project 1</h5>
                            <p class="card-text"><span class="badge bg-primary">Web</span></p>
                        </div>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="card">
                        <img src="https://via.placeholder.com/400x300/198754/ffffff?text=Project+2" class="card-img-top" alt="Project 2">
                        <div class="card-body">
                            <h5 class="card-title">Project 2</h5>
                            <p class="card-text"><span class="badge bg-success">Design</span></p>
                        </div>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="card">
                        <img src="https://via.placeholder.com/400x300/dc3545/ffffff?text=Project+3" class="card-img-top" alt="Project 3">
                        <div class="card-body">
                            <h5 class="card-title">Project 3</h5>
                            <p class="card-text"><span class="badge bg-danger">Mobile</span></p>
                        </div>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="card">
                        <img src="https://via.placeholder.com/400x300/0d6efd/ffffff?text=Project+4" class="card-img-top" alt="Project 4">
                        <div class="card-body">
                            <h5 class="card-title">Project 4</h5>
                            <p class="card-text"><span class="badge bg-primary">Web</span></p>
                        </div>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="card">
                        <img src="https://via.placeholder.com/400x300/198754/ffffff?text=Project+5" class="card-img-top" alt="Project 5">
                        <div class="card-body">
                            <h5 class="card-title">Project 5</h5>
                            <p class="card-text"><span class="badge bg-success">Design</span></p>
                        </div>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="card">
                        <img src="https://via.placeholder.com/400x300/dc3545/ffffff?text=Project+6" class="card-img-top" alt="Project 6">
                        <div class="card-body">
                            <h5 class="card-title">Project 6</h5>
                            <p class="card-text"><span class="badge bg-danger">Mobile</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- FAQ Section -->
    <section class="faq py-5">
        <div class="container">
            <div class="text-center mb-5">
                <h2 class="display-4 fw-bold">सामान्य प्रश्न (FAQ)</h2>
                <p class="text-muted">आपके कुछ सवालों के जवाब</p>
            </div>

            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="accordion" id="faqAccordion">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingOne">
                                <button class="accordion-button" type="button">
                                    आपकी services की कीमत क्या है?
                                </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show">
                                <div class="accordion-body">
                                    हमारी services की कीमत project की complexity और requirements पर निर्भर करती है। 
                                    एक basic website ₹15,000 से शुरू होती है। Custom projects के लिए हमसे संपर्क करें।
                                </div>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingTwo">
                                <button class="accordion-button collapsed" type="button">
                                    Project complete होने में कितना समय लगता है?
                                </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse">
                                <div class="accordion-body">
                                    एक basic website 2-3 हफ्ते में तैयार हो जाती है। Complex projects में 1-3 महीने लग सकते हैं। 
                                    Timeline project की requirements पर depend करती है।
                                </div>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingThree">
                                <button class="accordion-button collapsed" type="button">
                                    क्या आप maintenance support भी देते हैं?
                                </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse">
                                <div class="accordion-body">
                                    जी हां, हम project delivery के बाद maintenance और support services भी provide करते हैं। 
                                    Monthly और yearly maintenance packages available हैं।
                                </div>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingFour">
                                <button class="accordion-button collapsed" type="button">
                                    Payment terms क्या हैं?
                                </button>
                            </h2>
                            <div id="collapseFour" class="accordion-collapse collapse">
                                <div class="accordion-body">
                                    आमतौर पर हम 50% advance और 50% project completion पर लेते हैं। 
                                    बड़े projects के लिए milestone-based payment भी possible है।
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-dark text-white text-center py-4 mt-5">
        <div class="container">
            <p class="mb-0">&copy; 2024 Your Company. All Rights Reserved.</p>
        </div>
    </footer>

</body>
</html>
```

---

## 📝 Important Bootstrap Classes Summary

### Spacing Classes:
- `py-5` - Padding top और bottom (5 units)
- `mb-5` - Margin bottom (5 units)
- `mt-5` - Margin top (5 units)
- `g-4` - Gutter/spacing between columns

### Grid System:
- `container` - Responsive container
- `row` - Row for columns
- `col-md-4` - 4 columns width (out of 12) on medium+ screens

### Typography:
- `display-4` - Large display heading
- `fw-bold` - Font weight bold
- `text-center` - Text align center
- `text-muted` - Grey/muted text color

### Cards:
- `card` - Card container
- `card-body` - Card content area
- `card-title` - Card heading
- `card-text` - Card paragraph text
- `card-img-top` - Image at top of card

### Colors:
- `text-primary` - Blue color
- `text-success` - Green color
- `text-danger` - Red color
- `bg-light` - Light background
- `bg-dark` - Dark background

### Components:
- `shadow` - Box shadow effect
- `badge` - Small label/tag
- `nav nav-tabs` - Navigation tabs
- `accordion` - Accordion/collapse component

---

## 🎓 Key Learning Points

1. **Bootstrap Grid System** - `container`, `row`, `col-md-*` का use करके responsive layout बनाना
2. **Cards Component** - Services और gallery items display करने के लिए
3. **Navigation Tabs** - Gallery में filtering interface के लिए
4. **Accordion** - FAQ section में collapsible content के लिए
5. **Utility Classes** - Spacing, colors, text alignment के लिए Bootstrap की ready-made classes
6. **No JavaScript** - सभी functionality Bootstrap की built-in CSS से work कर रही है

---

## 🚀 Next Steps

1. इस code को अपनी `.html` file में save करें
2. Browser में open करके test करें
3. Placeholder images को real images से replace करें
4. Content को अपनी जरूरत के अनुसार customize करें
5. और Bootstrap components explore करें

**Happy Learning! 🎉**