# Amazon Prime Video Homepage - Step by Step Tutorial
## Amazon Prime Video होमपेज - Step by Step ट्यूटोरियल

---

## Step 1: Basic HTML Structure (बेसिक HTML structure)

**Create this first and test it:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Amazon Prime Video - Homepage</title>
</head>
<body>
    <h1>Prime Video Homepage</h1>
    <p>Testing basic structure</p>
</body>
</html>
```

**Test Result:** Simple white page with black text
**यह क्या करता है:** Basic HTML structure बनाता है

---

## Step 2: Add Dark Theme CSS (Dark theme CSS जोड़ें)

**Add `<style>` tag in head:**

```html
<head>
    <!-- previous content -->
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            background-color: #0f171e;
            color: white;
            font-family: 'Amazon Ember', Arial, sans-serif;
            line-height: 1.6;
        }
    </style>
</head>
```

**Test Result:** Page now has dark background with white text
**यह क्या करता है:** 
- Dark blue background color set करता है
- White text color और font family set करता है

---

## Step 3: Create Main Container (Main container बनाएं)

**Update body content:**

```html
<body>
    <div class="page-container">
        <section class="rental-section">
            <h2>Movie rentals on Prime Video</h2>
            <p>Early Access to new movies, before digital subscription</p>
        </section>
    </div>
</body>
```

**Add this CSS:**

```css
.page-container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 40px 20px;
}

.rental-section {
    background-color: #000000;
    border-radius: 8px;
    overflow: hidden;
}
```

**Test Result:** Container appears with black background
**यह क्या करता है:** 
- Main container बनाता है जो content को center में रखता है
- Section को black background देता है

---

## Step 4: Create Two Column Layout (Two column layout बनाएं)

**Update rental-section HTML:**

```html
<section class="rental-section">
    <div class="section-content">
        <div class="text-content">
            <h2>Movie rentals on Prime Video</h2>
            <p>Early Access to new movies, before digital subscription</p>
            <button class="rent-btn">Rent now</button>
        </div>
        <div class="movie-grid">
            <!-- Movies will go here -->
        </div>
    </div>
</section>
```

**Add this CSS:**

```css
.section-content {
    display: flex;
    align-items: center;
    padding: 60px;
    gap: 60px;
}

.text-content {
    flex: 1;
    max-width: 450px;
}

.movie-grid {
    flex: 1;
    min-height: 400px;
    background-color: #1a1a1a;
}
```

**Test Result:** Content splits into two columns - text on left, empty space on right
**यह क्या करता है:**
- Flexbox use करके two-column layout बनाता है
- Left side में text content, right side में movies के लिए space

---

## Step 5: Style Text Content (Text content को style करें)

**Add this CSS:**

```css
.text-content h2 {
    font-size: 42px;
    font-weight: 700;
    margin-bottom: 20px;
    line-height: 1.2;
    color: #ffffff;
}

.text-content p {
    font-size: 18px;
    color: #cccccc;
    margin-bottom: 30px;
    line-height: 1.5;
}

.rent-btn {
    background-color: #ffffff;
    color: #000000;
    border: none;
    padding: 12px 30px;
    font-size: 16px;
    font-weight: 600;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.rent-btn:hover {
    background-color: #e6e6e6;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(255, 255, 255, 0.3);
}
```

**Test Result:** Heading, subtitle, and button now look professional
**यह क्या करता है:**
- Typography को properly style करता है
- White button with hover effect add करता है

---

## Step 6: Create Movie Grid Structure (Movie grid structure बनाएं)

**Update movie-grid HTML:**

```html
<div class="movie-grid">
    <div class="grid-row-1">
        <img src="https://via.placeholder.com/200x120/FF6B6B/ffffff?text=Movie+1" alt="Movie 1">
        <img src="https://via.placeholder.com/200x120/4ECDC4/ffffff?text=Movie+2" alt="Movie 2">
        <img src="https://via.placeholder.com/200x120/45B7D1/ffffff?text=Movie+3" alt="Movie 3">
    </div>
    <div class="grid-row-2">
        <img src="https://via.placeholder.com/200x120/FFA07A/ffffff?text=Movie+4" alt="Movie 4">
        <img src="https://via.placeholder.com/200x120/98D8C8/ffffff?text=Movie+5" alt="Movie 5">
    </div>
    <div class="grid-row-3">
        <img src="https://via.placeholder.com/200x120/F7DC6F/000000?text=Movie+6" alt="Movie 6">
        <img src="https://via.placeholder.com/200x120/BB8FCE/ffffff?text=Movie+7" alt="Movie 7">
    </div>
</div>
```

**Test Result:** Movies appear but need proper grid styling
**यह क्या करता है:** Movie posters के लिए structure बनाता है

---

## Step 7: Style Movie Grid (Movie grid को style करें)

**Add this CSS:**

```css
.movie-grid {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.grid-row-1,
.grid-row-2,
.grid-row-3 {
    display: flex;
    gap: 12px;
}

.movie-grid img {
    width: 100%;
    height: auto;
    border-radius: 6px;
    object-fit: cover;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
}

.movie-grid img:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 24px rgba(255, 255, 255, 0.2);
}

.grid-row-1 {
    justify-content: flex-start;
}

.grid-row-1 img:nth-child(1) {
    flex: 0 0 35%;
}

.grid-row-1 img:nth-child(2) {
    flex: 0 0 30%;
}

.grid-row-1 img:nth-child(3) {
    flex: 0 0 30%;
}

.grid-row-2 {
    justify-content: flex-end;
}

.grid-row-2 img {
    flex: 0 0 48%;
}

.grid-row-3 {
    justify-content: space-between;
}

.grid-row-3 img {
    flex: 0 0 48%;
}
```

**Test Result:** Movie grid now arranged in creative layout with hover effects
**यह क्या करता है:**
- Movies को creative grid layout में arrange करता है
- Hover effects add करता है
- Different sizes के posters create करता है

---

## Step 8: Add Blue Top Border (Blue top border जोड़ें)

**Add this CSS to rental-section:**

```css
.rental-section {
    background-color: #000000;
    border-radius: 8px;
    overflow: hidden;
    border-top: 4px solid #146eb4;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}
```

**Test Result:** Blue border appears at top of section like in image
**यह क्या करता है:** 
- Top पर blue border add करता है
- Box shadow से depth add करता है

---

## Step 9: Create Subscriptions Section (Subscriptions section बनाएं)

**Add this HTML after rental-section:**

```html
<section class="subscription-section">
    <div class="section-content">
        <div class="text-content">
            <h2>Your favorite subscriptions all in one place</h2>
            <p>Customers can subscribe to get access to a variety of premium and specialty content, easily accessible within the Prime Video app</p>
        </div>
        <div class="subscription-grid">
            <!-- Subscription logos will go here -->
        </div>
    </div>
</section>
```

**Add this CSS:**

```css
.subscription-section {
    background-color: #000000;
    border-radius: 8px;
    overflow: hidden;
    margin-top: 40px;
}

.subscription-section .section-content {
    display: flex;
    align-items: center;
    padding: 60px;
    gap: 80px;
}
```

**Test Result:** Second section appears below first one
**यह क्या करता है:** Subscriptions section के लिए structure बनाता है

---

## Step 10: Add Subscription Logos (Subscription logos add करें)

**Update subscription-grid HTML:**

```html
<div class="subscription-grid">
    <div class="sub-logo">
        <img src="https://via.placeholder.com/150x80/1E1E1E/00A8E1?text=Apple+TV%2B" alt="Apple TV+">
    </div>
    <div class="sub-logo">
        <img src="https://via.placeholder.com/150x80/1E1E1E/FF6B00?text=Crunchyroll" alt="Crunchyroll">
    </div>
    <div class="sub-logo">
        <img src="https://via.placeholder.com/150x80/1E1E1E/F39C12?text=Lionsgate" alt="Lionsgate">
    </div>
    <div class="sub-logo">
        <img src="https://via.placeholder.com/150x80/1E1E1E/3498DB?text=Discovery%2B" alt="Discovery+">
    </div>
    <div class="sub-logo">
        <img src="https://via.placeholder.com/150x80/1E1E1E/E74C3C?text=Anime+Times" alt="Anime Times">
    </div>
    <div class="sub-logo">
        <img src="https://via.placeholder.com/150x80/1E1E1E/9B59B6?text=Manorama" alt="Manorama MAX">
    </div>
    <div class="sub-logo">
        <img src="https://via.placeholder.com/150x80/1E1E1E/1ABC9C?text=Chaupal" alt="Chaupal">
    </div>
    <div class="sub-logo">
        <img src="https://via.placeholder.com/150x80/1E1E1E/34495E?text=BBC+Player" alt="BBC Player">
    </div>
    <div class="sub-logo">
        <img src="https://via.placeholder.com/150x80/1E1E1E/E67E22?text=Fancode" alt="Fancode">
    </div>
</div>
```

**Test Result:** Subscription logos appear but need grid styling
**यह क्या करता है:** Different subscription services के logos add करता है

---

## Step 11: Style Subscription Grid (Subscription grid को style करें)

**Add this CSS:**

```css
.subscription-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    max-width: 550px;
}

.sub-logo {
    background: linear-gradient(135deg, #1a2633 0%, #0f1a24 100%);
    border-radius: 8px;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    border: 1px solid #2a3441;
}

.sub-logo:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(20, 110, 180, 0.3);
    border-color: #146eb4;
}

.sub-logo img {
    width: 100%;
    height: auto;
    max-height: 40px;
    object-fit: contain;
}
```

**Test Result:** Subscription logos now in 3x3 grid with hover effects
**यह क्या करता है:**
- 3 columns में grid layout बनाता है
- Each logo को card style देता है
- Hover effects add करता है

---

## Step 12: Add Footer (Footer add करें)

**Add this HTML at the end of page-container:**

```html
<footer class="footer">
    <div class="footer-logo">prime video</div>
    <div class="footer-links">
        <a href="#">Terms and Privacy Notice</a>
        <a href="#">Send us feedback</a>
        <a href="#">Help</a>
    </div>
    <p class="copyright">© 1996-2025, Amazon.com, Inc. or its affiliates</p>
</footer>
```

**Add this CSS:**

```css
.footer {
    text-align: center;
    padding: 60px 20px 40px;
    margin-top: 60px;
    border-top: 1px solid #2a2a2a;
}

.footer-logo {
    font-size: 20px;
    font-weight: bold;
    color: #00a8e1;
    margin-bottom: 20px;
}

.footer-links {
    display: flex;
    justify-content: center;
    gap: 30px;
    margin-bottom: 20px;
    flex-wrap: wrap;
}

.footer-links a {
    color: #cccccc;
    text-decoration: none;
    font-size: 14px;
    transition: color 0.3s ease;
}

.footer-links a:hover {
    color: #00a8e1;
}

.copyright {
    color: #666666;
    font-size: 12px;
}
```

**Test Result:** Footer appears with links and copyright
**यह क्या करता है:**
- Footer section add करता है Prime Video logo के साथ
- Links और copyright information add करता है

---

## Step 13: Add Responsive Design (Responsive design add करें)

**Add this CSS:**

```css
/* Responsive Design */
@media (max-width: 1024px) {
    .section-content {
        padding: 40px !important;
        gap: 40px !important;
    }
    
    .text-content h2 {
        font-size: 36px;
    }
}

@media (max-width: 768px) {
    .section-content {
        flex-direction: column !important;
        text-align: center;
        padding: 30px !important;
    }
    
    .text-content {
        max-width: 100%;
    }
    
    .text-content h2 {
        font-size: 28px;
    }
    
    .movie-grid {
        width: 100%;
    }
    
    .subscription-grid {
        grid-template-columns: repeat(2, 1fr);
        max-width: 100%;
    }
    
    .footer-links {
        flex-direction: column;
        gap: 15px;
    }
}

@media (max-width: 480px) {
    .text-content h2 {
        font-size: 24px;
    }
    
    .text-content p {
        font-size: 16px;
    }
    
    .subscription-grid {
        grid-template-columns: 1fr;
    }
    
    .grid-row-1,
    .grid-row-2,
    .grid-row-3 {
        flex-direction: column;
    }
    
    .grid-row-1 img,
    .grid-row-2 img,
    .grid-row-3 img {
        flex: 1 1 100% !important;
    }
}
```

**Test Result:** Layout adjusts perfectly for mobile and tablet
**यह क्या करता है:**
- Different screen sizes के लिए layout optimize करता है
- Mobile पर single column layout बनाता है

---

## Step 14: Add Smooth Animations (Smooth animations add करें)

**Add this CSS:**

```css
/* Smooth Animations */
.rental-section,
.subscription-section {
    animation: fadeInUp 0.8s ease-out;
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.rent-btn {
    position: relative;
    overflow: hidden;
}

.rent-btn::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.1);
    transform: translate(-50%, -50%);
    transition: width 0.5s, height 0.5s;
}

.rent-btn:active::before {
    width: 300px;
    height: 300px;
}

/* Stagger animation for subscription logos */
.sub-logo {
    animation: fadeIn 0.6s ease-out backwards;
}

.sub-logo:nth-child(1) { animation-delay: 0.1s; }
.sub-logo:nth-child(2) { animation-delay: 0.2s; }
.sub-logo:nth-child(3) { animation-delay: 0.3s; }
.sub-logo:nth-child(4) { animation-delay: 0.4s; }
.sub-logo:nth-child(5) { animation-delay: 0.5s; }
.sub-logo:nth-child(6) { animation-delay: 0.6s; }
.sub-logo:nth-child(7) { animation-delay: 0.7s; }
.sub-logo:nth-child(8) { animation-delay: 0.8s; }
.sub-logo:nth-child(9) { animation-delay: 0.9s; }

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: scale(0.9);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
}
```

**Test Result:** Smooth animations on page load and interactions
**यह क्या करता है:**
- Page load पर fade-in animations add करता है
- Button click पर ripple effect
- Subscription logos stagger animation के साथ appear होते हैं

---

## Step 15: Final Polish and Styling (Final polish और styling)

**Add these final touches:**

```css
/* Final Polish */
body {
    background: linear-gradient(135deg, #0a0e13 0%, #0f171e 50%, #1a1f26 100%);
    min-height: 100vh;
}

.page-container {
    animation: pageLoad 1s ease-out;
}

@keyframes pageLoad {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

/* Improve text content styling */
.text-content h2 {
    background: linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

/* Better shadows */
.rental-section,
.subscription-section {
    box-shadow: 
        0 4px 20px rgba(0, 0, 0, 0.3),
        0 0 40px rgba(20, 110, 180, 0.1);
}

/* Smooth scroll behavior */
html {
    scroll-behavior: smooth;
}

/* Selection color */
::selection {
    background-color: #146eb4;
    color: white;
}
```

**Test Result:** Final polished version with all effects
**यह क्या करता है:**
- Gradient background add करता है
- Text में gradient effect
- Better shadows और polish

---

## Testing Instructions / कैसे Test करें:

1. **Complete HTML file** को copy करके save करें
2. **Browser में open करें**
3. **सभी hover effects test करें**:
   - Movie posters पर hover करें (zoom effect)
   - Subscription logos पर hover करें (lift effect)
   - Buttons पर hover करें
4. **Responsive test करें** - browser window resize करें
5. **Animations check करें** - page refresh करके देखें

## Key Features Implemented:

✅ **Two-Column Layout** - Text content left, visuals right
✅ **Creative Movie Grid** - Different sized posters in rows
✅ **Subscription Grid** - 3x3 grid with hover effects
✅ **Smooth Animations** - Fade-in, hover, and click effects
✅ **Responsive Design** - Mobile, tablet, desktop support
✅ **Dark Theme** - Amazon Prime Video style
✅ **Footer Section** - With links and copyright

यह layout बिल्कुल Amazon Prime Video homepage जैसा दिखेगा!