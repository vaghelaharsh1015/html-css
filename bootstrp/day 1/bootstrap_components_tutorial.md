# Bootstrap Navbar & Carousel Tutorial

## Part 1: Header & Navbar

### Step 1: Basic HTML Setup

सबसे पहले Bootstrap के साथ basic HTML structure बनाते हैं:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bootstrap Navbar</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <h1>Navbar Tutorial</h1>
</body>
</html>
```

**Test करें:** Basic page दिखेगा।

**Explanation:** Bootstrap CDN से attach किया है। अब Bootstrap classes काम करेंगे।

---

### Step 2: Basic Navbar Structure

Basic navbar बनाते हैं:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Basic Navbar</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <nav class="navbar">
        <div class="container">
            <a class="navbar-brand" href="#">My Website</a>
        </div>
    </nav>
    
    <div class="container mt-5">
        <h1>Welcome</h1>
    </div>
</body>
</html>
```

**Test करें:** Simple navbar दिखेगा।

**Explanation:** `.navbar` class basic navbar structure बनाती है। `.navbar-brand` logo/brand name के लिए है।

---

### Step 3: Add Background Color

Navbar में background color add करते हैं:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Colored Navbar</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <nav class="navbar navbar-dark bg-primary">
        <div class="container">
            <a class="navbar-brand" href="#">My Website</a>
        </div>
    </nav>
    
    <div class="container mt-5">
        <h1>Navbar with Background Color</h1>
    </div>
</body>
</html>
```

**Test करें:** Blue background वाला navbar दिखेगा।

**Explanation:** 
- `.bg-primary` - Blue background
- `.navbar-dark` - Dark navbar के लिए white text

---

### Step 4: Add Navigation Links

Navigation links add करते हैं:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Navbar with Links</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container">
            <a class="navbar-brand" href="#">My Website</a>
            
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Services</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Contact</a>
                </li>
            </ul>
        </div>
    </nav>
</body>
</html>
```

**Test करें:** Navigation links दिखेंगे।

**Explanation:**
- `.navbar-expand-lg` - Large screens पर horizontal expand होगा
- `.navbar-nav` - Navigation list container
- `.nav-item` - Individual nav item
- `.nav-link` - Nav link styling

---

### Step 5: Add Toggle Button for Mobile

Mobile के लिए toggle button add करते हैं:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Navbar with Toggle</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container">
            <a class="navbar-brand" href="#">My Website</a>
            
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link active" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Services</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    
    <!-- Bootstrap JS for toggle functionality -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

**Test करें:** Mobile view में hamburger icon दिखेगा।

**Explanation:**
- `.navbar-toggler` - Mobile toggle button
- `.collapse` - Collapsible content
- `data-bs-toggle` & `data-bs-target` - Toggle functionality के लिए
- `.ms-auto` - Links को right side में push करता है

---

### Step 6: Add Dropdown Menu

Dropdown menu add करते हैं:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Navbar with Dropdown</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <a class="navbar-brand" href="#">My Website</a>
            
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link active" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">About</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
                            Services
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Web Design</a></li>
                            <li><a class="dropdown-item" href="#">Development</a></li>
                            <li><a class="dropdown-item" href="#">SEO</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

**Test करें:** Services पर hover/click करने पर dropdown menu दिखेगा।

**Explanation:**
- `.dropdown` - Dropdown container
- `.dropdown-toggle` - Dropdown trigger
- `.dropdown-menu` - Dropdown menu container
- `.dropdown-item` - Menu items

---

### Step 7: Add Button in Navbar

Navbar में button add करते हैं:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Navbar with Button</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container">
            <a class="navbar-brand" href="#">My Website</a>
            
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto me-3">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Contact</a>
                    </li>
                </ul>
                
                <button class="btn btn-warning">Sign Up</button>
            </div>
        </div>
    </nav>
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

**Test करें:** Yellow "Sign Up" button navbar में दिखेगा।

**Explanation:** `.btn btn-warning` yellow button बनाता है। `.me-3` navbar-nav को button से separate करता है।

---

### Step 8: Add Shadow to Navbar

Navbar में shadow effect add करते हैं:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Navbar with Shadow</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-light bg-light shadow">
        <div class="container">
            <a class="navbar-brand fw-bold" href="#">My Website</a>
            
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link active" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Services</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    
    <div class="container mt-5">
        <h1>Navbar with Shadow Effect</h1>
    </div>
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

**Test करें:** Navbar के नीचे shadow दिखेगा।

**Explanation:**
- `.shadow` - Shadow effect add करता है
- `.navbar-light` - Light navbar (dark text)
- `.fw-bold` - Font weight bold

---

## Part 2: Carousel

### Step 9: Basic Carousel

Basic carousel बनाते हैं:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bootstrap Carousel</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container mt-5">
        <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="https://via.placeholder.com/800x400/667eea/ffffff?text=Slide+1" class="d-block w-100" alt="Slide 1">
                </div>
                <div class="carousel-item">
                    <img src="https://via.placeholder.com/800x400/f093fb/ffffff?text=Slide+2" class="d-block w-100" alt="Slide 2">
                </div>
                <div class="carousel-item">
                    <img src="https://via.placeholder.com/800x400/4facfe/ffffff?text=Slide+3" class="d-block w-100" alt="Slide 3">
                </div>
            </div>
        </div>
    </div>
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

**Test करें:** Carousel automatically slide करेगा।

**Explanation:**
- `.carousel` - Carousel container
- `.carousel-inner` - Slides container
- `.carousel-item` - Individual slide
- `.active` - First slide को active बनाना जरूरी है
- `data-bs-ride="carousel"` - Auto-slide enable करता है

---

### Step 10: Add Carousel Controls

Previous/Next buttons add करते हैं:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Carousel with Controls</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container mt-5">
        <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="https://via.placeholder.com/800x400/667eea/ffffff?text=Slide+1" class="d-block w-100" alt="Slide 1">
                </div>
                <div class="carousel-item">
                    <img src="https://via.placeholder.com/800x400/f093fb/ffffff?text=Slide+2" class="d-block w-100" alt="Slide 2">
                </div>
                <div class="carousel-item">
                    <img src="https://via.placeholder.com/800x400/4facfe/ffffff?text=Slide+3" class="d-block w-100" alt="Slide 3">
                </div>
            </div>
            
            <!-- Previous button -->
            <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon"></span>
            </button>
            
            <!-- Next button -->
            <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                <span class="carousel-control-next-icon"></span>
            </button>
        </div>
    </div>
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

**Test करें:** Left/Right arrows से slides navigate कर सकते हैं।

**Explanation:**
- `.carousel-control-prev` - Previous button
- `.carousel-control-next` - Next button
- `data-bs-target` - Carousel ID specify करता है
- `data-bs-slide` - Direction (prev/next)

---

### Step 11: Add Carousel Indicators

Indicator dots add करते हैं:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Carousel with Indicators</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container mt-5">
        <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
            
            <!-- Indicators -->
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2"></button>
            </div>
            
            <!-- Slides -->
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="https://via.placeholder.com/800x400/667eea/ffffff?text=Slide+1" class="d-block w-100" alt="Slide 1">
                </div>
                <div class="carousel-item">
                    <img src="https://via.placeholder.com/800x400/f093fb/ffffff?text=Slide+2" class="d-block w-100" alt="Slide 2">
                </div>
                <div class="carousel-item">
                    <img src="https://via.placeholder.com/800x400/4facfe/ffffff?text=Slide+3" class="d-block w-100" alt="Slide 3">
                </div>
            </div>
            
            <!-- Controls -->
            <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon"></span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                <span class="carousel-control-next-icon"></span>
            </button>
        </div>
    </div>
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

**Test करें:** Bottom में dots indicators दिखेंगे।

**Explanation:**
- `.carousel-indicators` - Indicators container
- `data-bs-slide-to` - Slide number (0-based index)
- First indicator को `.active` class चाहिए

---

### Step 12: Add Captions to Carousel

Slides में text captions add करते हैं:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Carousel with Captions</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container mt-5">
        <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
            
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2"></button>
            </div>
            
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="https://via.placeholder.com/800x400/667eea/ffffff?text=Slide+1" class="d-block w-100" alt="Slide 1">
                    <div class="carousel-caption">
                        <h3>पहली Slide</h3>
                        <p>यह पहली slide का description है।</p>
                    </div>
                </div>
                
                <div class="carousel-item">
                    <img src="https://via.placeholder.com/800x400/f093fb/ffffff?text=Slide+2" class="d-block w-100" alt="Slide 2">
                    <div class="carousel-caption">
                        <h3>दूसरी Slide</h3>
                        <p>यह दूसरी slide का description है।</p>
                    </div>
                </div>
                
                <div class="carousel-item">
                    <img src="https://via.placeholder.com/800x400/4facfe/ffffff?text=Slide+3" class="d-block w-100" alt="Slide 3">
                    <div class="carousel-caption">
                        <h3>तीसरी Slide</h3>
                        <p>यह तीसरी slide का description है।</p>
                    </div>
                </div>
            </div>
            
            <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon"></span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                <span class="carousel-control-next-icon"></span>
            </button>
        </div>
    </div>
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

**Test करें:** Slides पर text captions overlay में दिखेंगे।

**Explanation:** `.carousel-caption` class image के ऊपर text overlay करती है।

---

### Step 13: Add Search Box in Carousel

Carousel में search form add करते हैं:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Carousel with Search</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        .search-overlay {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 10;
            width: 80%;
            max-width: 600px;
        }
    </style>
</head>
<body>
    <div class="container mt-5">
        <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
            
            <!-- Search Box Overlay -->
            <div class="search-overlay">
                <form class="d-flex">
                    <input class="form-control form-control-lg me-2" type="search" placeholder="Search here..." aria-label="Search">
                    <button class="btn btn-primary btn-lg" type="submit">Search</button>
                </form>
            </div>
            
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2"></button>
            </div>
            
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="https://via.placeholder.com/800x400/667eea/ffffff?text=Welcome" class="d-block w-100" alt="Slide 1">
                </div>
                <div class="carousel-item">
                    <img src="https://via.placeholder.com/800x400/f093fb/ffffff?text=Explore" class="d-block w-100" alt="Slide 2">
                </div>
                <div class="carousel-item">
                    <img src="https://via.placeholder.com/800x400/4facfe/ffffff?text=Discover" class="d-block w-100" alt="Slide 3">
                </div>
            </div>
            
            <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon"></span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                <span class="carousel-control-next-icon"></span>
            </button>
        </div>
    </div>
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

**Test करें:** Carousel के center में search box दिखेगा।

**Explanation:**
- Custom `.search-overlay` class से search box को center में position किया
- `.form-control-lg` large input field बनाता है
- `.d-flex` flexbox layout के लिए

---

## Complete Reference Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Complete Bootstrap Navbar & Carousel</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        /* Search overlay styles */
        .search-overlay {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 10;
            width: 90%;
            max-width: 700px;
        }
        
        .search-overlay .form-control {
            background-color: rgba(255, 255, 255, 0.9);
            border: none;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        }
        
        .search-overlay .btn {
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        }
        
        /* Carousel caption custom style */
        .carousel-caption {
            background-color: rgba(0, 0, 0, 0.5);
            padding: 20px;
            border-radius: 10px;
        }
        
        /* Content sections */
        .content-section {
            padding: 60px 0;
        }
    </style>
</head>
<body>
    <!-- ========== NAVBAR ========== -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow sticky-top">
        <div class="container">
            <!-- Brand -->
            <a class="navbar-brand fw-bold fs-4" href="#">
                🚀 MyWebsite
            </a>
            
            <!-- Toggle button for mobile -->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>
            
            <!-- Navbar content -->
            <div class="collapse navbar-collapse" id="mainNavbar">
                <!-- Navigation links -->
                <ul class="navbar-nav ms-auto me-4">
                    <li class="nav-item">
                        <a class="nav-link active" href="#home">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#about">About</a>
                    </li>
                    
                    <!-- Dropdown menu -->
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
                            Services
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Web Design</a></li>
                            <li><a class="dropdown-item" href="#">Development</a></li>
                            <li><hr class="dropdown-divider"></li>
                            <li><a class="dropdown-item" href="#">SEO Services</a></li>
                        </ul>
                    </li>
                    
                    <li class="nav-item">
                        <a class="nav-link" href="#portfolio">Portfolio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#contact">Contact</a>
                    </li>
                </ul>
                
                <!-- Call-to-action buttons -->
                <div class="d-flex">
                    <button class="btn btn-outline-light me-2">Login</button>
                    <button class="btn btn-warning">Sign Up</button>
                </div>
            </div>
        </div>
    </nav>
    
    <!-- ========== CAROUSEL WITH SEARCH ========== -->
    <section id="home">
        <div id="heroCarousel" class="carousel slide" data-bs-ride="carousel">
            
            <!-- Search Box Overlay -->
            <div class="search-overlay">
                <div class="text-center text-white mb-4">
                    <h1 class="display-4 fw-bold">Find What You Need</h1>
                    <p class="lead">Search through thousands of resources</p>
                </div>
                <form class="d-flex">
                    <input class="form-control form-control-lg me-2" 
                           type="search" 
                           placeholder="What are you looking for?" 
                           aria-label="Search">
                    <button class="btn btn-primary btn-lg px-4" type="submit">
                        Search
                    </button>
                </form>
            </div>
            
            <!-- Carousel Indicators -->
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" class="active"></button>
                <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1"></button>
                <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="2"></button>
            </div>
            
            <!-- Carousel Items -->
            <div class="carousel-inner">
                <!-- Slide 1 -->
                <div class="carousel-item active">
                    <img src="https://via.placeholder.com/1200x500/667eea/ffffff?text=Welcome+to+Our+Website" 
                         class="d-block w-100" 
                         alt="Welcome Slide">
                    <div class="carousel-caption d-none d-md-block">
                        <h2>Welcome to Our Platform</h2>
                        <p>Discover amazing features and services</p>
                    </div>
                </div>
                
                <!-- Slide 2 -->
                <div class="carousel-item">
                    <img src="https://via.placeholder.com/1200x500/f093fb/ffffff?text=Explore+Our+Services" 
                         class="d-block w-100" 
                         alt="Services Slide">
                    <div class="carousel-caption d-none d-md-block">
                        <h2>Professional Services</h2>
                        <p>We provide world-class solutions for your business</p>
                    </div>
                </div>
                
                <!-- Slide 3 -->
                <div class="carousel-item">
                    <img src="https://via.placeholder.com/1200x500/4facfe/ffffff?text=Join+Us+Today" 
                         class="d-block w-100" 
                         alt="Join Slide">
                    <div class="carousel-caption d-none d-md-block">
                        <h2>Join Our Community</h2>
                        <p>Thousands of satisfied customers worldwide</p>
                    </div>
                </div>
            </div>
            
            <!-- Carousel Controls -->
            <button class="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </section>
    
    <!-- ========== CONTENT SECTIONS ========== -->
    <section id="about" class="content-section bg-light">
        <div class="container">
            <h2 class="text-center mb-5">About Us</h2>
            <div class="row">
                <div class="col-md-6">
                    <h3>Who We Are</h3>
                    <p class="lead">हम एक professional team हैं जो quality services provide करते हैं।</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div class="col-md-6">
                    <h3>Our Mission</h3>
                    <p class="lead">हमारा mission है customers को best solutions provide करना।</p>
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
        </div>
    </section>
    
    <section id="portfolio" class="content-section">
        <div class="container">
            <h2 class="text-center mb-5">Our Portfolio</h2>
            <div class="row g-4">
                <div class="col-md-4">
                    <div class="card">
                        <img src="https://via.placeholder.com/400x300/667eea/ffffff?text=Project+1" 
                             class="card-img-top" 
                             alt="Project 1">
                        <div class="card-body">
                            <h5 class="card-title">Project One</h5>
                            <p class="card-text">Amazing web design project</p>
                            <a href="#" class="btn btn-primary">View Details</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                        <img src="https://via.placeholder.com/400x300/f093fb/ffffff?text=Project+2" 
                             class="card-img-top" 
                             alt="Project 2">
                        <div class="card-body">
                            <h5 class="card-title">Project Two</h5>
                            <p class="card-text">Mobile app development</p>
                            <a href="#" class="btn btn-primary">View Details</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                        <img src="https://via.placeholder.com/400x300/4facfe/ffffff?text=Project+3" 
                             class="card-img-top" 
                             alt="Project 3">
                        <div class="card-body">
                            <h5 class="card-title">Project Three</h5>
                            <p class="card-text">E-commerce solution</p>
                            <a href="#" class="btn btn-primary">View Details</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <section id="contact" class="content-section bg-dark text-white">
        <div class="container">
            <h2 class="text-center mb-5">Contact Us</h2>
            <div class="row justify-content-center">
                <div class="col-md-6">
                    <form>
                        <div class="mb-3">
                            <label class="form-label">Name</label>
                            <input type="text" class="form-control" placeholder="Your name">
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Email</label>
                            <input type="email" class="form-control" placeholder="your@email.com">
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Message</label>
                            <textarea class="form-control" rows="4" placeholder="Your message"></textarea>
                        </div>
                        <button type="submit" class="btn btn-warning btn-lg w-100">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
    
    <!-- ========== FOOTER ========== -->
    <footer class="bg-dark text-white text-center py-4">
        <div class="container">
            <p class="mb-0">&copy; 2024 MyWebsite. All rights reserved.</p>
        </div>
    </footer>
    
    <!-- Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

## Summary

### **1. Navbar Components**

**Basic Structure:**
```html
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
        <a class="navbar-brand" href="#">Brand</a>
        <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#nav">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="nav">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
```

**Key Classes:**
- `.navbar` - Main navbar container
- `.navbar-expand-lg` - Responsive breakpoint
- `.navbar-dark` / `.navbar-light` - Color scheme
- `.navbar-brand` - Logo/brand name
- `.navbar-toggler` - Mobile menu button
- `.navbar-nav` - Navigation links container
- `.nav-item` - Single nav item
- `.nav-link` - Link styling

### **2. Navbar Colors**

| Class | Color |
|-------|-------|
| `.bg-primary` | Blue |
| `.bg-dark` | Dark gray/black |
| `.bg-light` | Light gray |
| `.bg-success` | Green |
| `.bg-danger` | Red |
| `.bg-warning` | Yellow |

### **3. Dropdown Menu**

```html
<li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
        Menu
    </a>
    <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">Item 1</a></li>
        <li><a class="dropdown-item" href="#">Item 2</a></li>
    </ul>
</li>
```

### **4. Carousel Components**

**Basic Structure:**
```html
<div id="carousel" class="carousel slide" data-bs-ride="carousel">
    <!-- Indicators -->
    <div class="carousel-indicators">
        <button data-bs-target="#carousel" data-bs-slide-to="0" class="active"></button>
    </div>
    
    <!-- Slides -->
    <div class="carousel-inner">
        <div class="carousel-item active">
            <img src="..." class="d-block w-100" alt="...">
            <div class="carousel-caption">
                <h3>Title</h3>
                <p>Description</p>
            </div>
        </div>
    </div>
    
    <!-- Controls -->
    <button class="carousel-control-prev" data-bs-target="#carousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon"></span>
    </button>
    <button class="carousel-control-next" data-bs-target="#carousel" data-bs-slide="next">
        <span class="carousel-control-next-icon"></span>
    </button>
</div>
```

### **5. Important Carousel Classes**

- `.carousel` - Main container
- `.carousel-slide` - Enable sliding
- `.carousel-inner` - Slides wrapper
- `.carousel-item` - Individual slide
- `.carousel-caption` - Text overlay
- `.carousel-indicators` - Dot indicators
- `.carousel-control-prev/next` - Arrow buttons

### **6. Utility Classes Used**

| Class | Purpose |
|-------|---------|
| `.shadow` | Add shadow |
| `.sticky-top` | Sticky navbar |
| `.ms-auto` | Margin start auto (push right) |
| `.me-2` | Margin end 2 units |
| `.fw-bold` | Font weight bold |
| `.d-flex` | Display flex |
| `.text-center` | Center text |
| `.w-100` | Width 100% |

### **7. Search Form in Carousel**

```html
<div class="search-overlay">
    <form class="d-flex">
        <input class="form-control form-control-lg" type="search" placeholder="Search...">
        <button class="btn btn-primary btn-lg" type="submit">Search</button>
    </form>
</div>
```

Position with custom CSS:
```css
.search-overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
}
```

यह complete Bootstrap Navbar और Carousel tutorial है!