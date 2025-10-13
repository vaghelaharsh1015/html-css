# Bootstrap Complete Tutorial

## Introduction
इस tutorial में हम Bootstrap framework सीखेंगे। Bootstrap एक popular CSS framework है जो responsive websites बनाने में help करता है।

---

## Step 1: Basic HTML Structure

सबसे पहले basic HTML structure बनाते हैं:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Bootstrap Tutorial</title>
</head>
<body>
    <h1>Hello World</h1>
</body>
</html>
```

**Test करें:** Simple HTML page दिखेगा।

**Explanation:** यह basic HTML structure है। अभी Bootstrap attach नहीं किया है।

---

## Step 2: Add Viewport Meta Tag

Viewport meta tag add करते हैं:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bootstrap Tutorial</title>
</head>
<body>
    <h1>Hello World</h1>
</body>
</html>
```

**Test करें:** Mobile में properly render होगा।

**Explanation:** `viewport` meta tag responsive design के लिए जरूरी है। `width=device-width` device की actual width use करता है।

---

## Step 3: Attach Bootstrap CSS (Online CDN)

Bootstrap CSS CDN से attach करते हैं:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bootstrap Tutorial</title>
    
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <h1>Hello Bootstrap</h1>
    <button class="btn btn-primary">Click Me</button>
</body>
</html>
```

**Test करें:** Button styled दिखेगा blue color में।

**Explanation:** Bootstrap CSS CDN से attach किया। अब Bootstrap classes काम करेंगे। `btn btn-primary` Bootstrap की classes हैं।

---

## Step 4: Bootstrap Container - Basic

Bootstrap container add करते हैं:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bootstrap Container</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container">
        <h1>Container Example</h1>
        <p>यह content container के अंदर है।</p>
    </div>
</body>
</html>
```

**Test करें:** Content centered होगा with margins।

**Explanation:** `.container` class responsive fixed-width container बनाता है। Screen size के according width adjust होती है।

---

## Step 5: Container Fluid

Container-fluid का use करते हैं:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Container Fluid</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        .container { background-color: lightblue; padding: 20px; margin-bottom: 20px; }
        .container-fluid { background-color: lightgreen; padding: 20px; }
    </style>
</head>
<body>
    <div class="container">
        <h2>Container</h2>
        <p>Fixed width container</p>
    </div>
    
    <div class="container-fluid">
        <h2>Container Fluid</h2>
        <p>Full width container</p>
    </div>
</body>
</html>
```

**Test करें:** Container fluid full width लेगा।

**Explanation:** `.container-fluid` always 100% width होता है। `.container` breakpoints के according width लेता है।

---

## Step 6: Container Breakpoints

Different container breakpoints test करते हैं:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Container Breakpoints</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        div[class*="container"] {
            background-color: #f0f0f0;
            padding: 20px;
            margin-bottom: 15px;
            border: 2px solid #333;
        }
    </style>
</head>
<body>
    <div class="container-sm">
        <strong>container-sm</strong> - Small और बड़ी screens पर 100% width
    </div>
    
    <div class="container-md">
        <strong>container-md</strong> - Medium और बड़ी screens पर fixed width
    </div>
    
    <div class="container-lg">
        <strong>container-lg</strong> - Large और बड़ी screens पर fixed width
    </div>
    
    <div class="container-xl">
        <strong>container-xl</strong> - Extra large screens पर fixed width
    </div>
    
    <div class="container-xxl">
        <strong>container-xxl</strong> - Extra extra large screens पर fixed width
    </div>
</body>
</html>
```

**Test करें:** Browser resize करके different containers का behavior देखें।

**Explanation:** Different container classes different breakpoints पर responsive बनते हैं।

---

## Step 7: Grid System - Single Row

Bootstrap grid system का basic use:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bootstrap Grid</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        .row > div {
            background-color: lightblue;
            border: 1px solid #333;
            padding: 15px;
            text-align: center;
        }
    </style>
</head>
<body>
    <div class="container">
        <h2>Bootstrap Grid System</h2>
        <div class="row">
            <div class="col">Column 1</div>
            <div class="col">Column 2</div>
            <div class="col">Column 3</div>
        </div>
    </div>
</body>
</html>
```

**Test करें:** तीन equal columns दिखेंगे।

**Explanation:** `.row` row बनाता है, `.col` equal width columns बनाता है। Bootstrap में 12-column grid system है।

---

## Step 8: Grid with Specific Widths

Specific column widths define करते हैं:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Column Widths</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        .row > div {
            background-color: lightgreen;
            border: 1px solid #333;
            padding: 15px;
            margin-bottom: 10px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h2>Column Widths</h2>
        
        <div class="row">
            <div class="col-4">col-4 (4/12)</div>
            <div class="col-8">col-8 (8/12)</div>
        </div>
        
        <div class="row">
            <div class="col-6">col-6 (6/12)</div>
            <div class="col-6">col-6 (6/12)</div>
        </div>
        
        <div class="row">
            <div class="col-3">col-3</div>
            <div class="col-3">col-3</div>
            <div class="col-3">col-3</div>
            <div class="col-3">col-3</div>
        </div>
    </div>
</body>
</html>
```

**Test करें:** Different width columns दिखेंगे।

**Explanation:** `col-4` means 4 out of 12 columns। Bootstrap 12-column grid system use करता है। Total columns का sum 12 होना चाहिए।

---

## Step 9: Responsive Columns

Responsive columns बनाते हैं:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Responsive Columns</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        .row > div {
            background-color: lightyellow;
            border: 1px solid #333;
            padding: 20px;
            margin-bottom: 10px;
            text-align: center;
        }
    </style>
</head>
<body>
    <div class="container">
        <h2>Responsive Columns</h2>
        
        <div class="row">
            <div class="col-12 col-md-6 col-lg-4">
                <strong>Column 1</strong><br>
                Mobile: 12 cols<br>
                Tablet: 6 cols<br>
                Desktop: 4 cols
            </div>
            <div class="col-12 col-md-6 col-lg-4">
                <strong>Column 2</strong><br>
                Mobile: 12 cols<br>
                Tablet: 6 cols<br>
                Desktop: 4 cols
            </div>
            <div class="col-12 col-md-6 col-lg-4">
                <strong>Column 3</strong><br>
                Mobile: 12 cols<br>
                Tablet: 6 cols<br>
                Desktop: 4 cols
            </div>
        </div>
    </div>
</body>
</html>
```

**Test करें:** Screen resize करें - mobile में 1 column, tablet में 2, desktop में 3 दिखेंगे।

**Explanation:** 
- `col-12` - Mobile पर full width
- `col-md-6` - Medium screens (tablets) पर half width
- `col-lg-4` - Large screens (desktop) पर one-third width

---

## Step 10: Bootstrap Typography

Bootstrap typography classes का use:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bootstrap Typography</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container mt-4">
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <h6>Heading 6</h6>
        
        <p class="lead">यह एक lead paragraph है - prominent text के लिए।</p>
        
        <p>Normal paragraph text। Bootstrap automatically typography style करता है।</p>
        
        <p class="text-muted">Muted text - light gray color में।</p>
        
        <p><mark>Highlighted text</mark> - yellow background के साथ।</p>
        
        <p><small>Small text - छोटे font size में।</small></p>
        
        <p><strong>Bold text</strong> और <em>Italic text</em></p>
    </div>
</body>
</html>
```

**Test करें:** Different typography styles दिखेंगे।

**Explanation:** Bootstrap में pre-styled typography classes हैं। `.lead` larger paragraph, `.text-muted` light text, `<mark>` highlight करता है।

---

## Step 11: Text Utilities

Text alignment और transform utilities:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Text Utilities</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        .demo-box {
            background-color: #f0f0f0;
            padding: 15px;
            margin: 10px 0;
            border: 1px solid #ddd;
        }
    </style>
</head>
<body>
    <div class="container mt-4">
        <h2>Text Alignment</h2>
        
        <div class="demo-box text-start">
            Left aligned text (text-start)
        </div>
        
        <div class="demo-box text-center">
            Center aligned text (text-center)
        </div>
        
        <div class="demo-box text-end">
            Right aligned text (text-end)
        </div>
        
        <h2 class="mt-4">Text Transform</h2>
        
        <p class="text-lowercase">LOWERCASE TEXT (text-lowercase)</p>
        <p class="text-uppercase">uppercase text (text-uppercase)</p>
        <p class="text-capitalize">capitalize each word (text-capitalize)</p>
        
        <h2 class="mt-4">Text Colors</h2>
        
        <p class="text-primary">Primary text color</p>
        <p class="text-success">Success text color</p>
        <p class="text-danger">Danger text color</p>
        <p class="text-warning">Warning text color</p>
        <p class="text-info">Info text color</p>
    </div>
</body>
</html>
```

**Test करें:** Different text alignments और colors दिखेंगे।

**Explanation:** Bootstrap में utility classes हैं text alignment, transform और colors के लिए।

---

## Step 12: Bootstrap Images

Images को responsive बनाना:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bootstrap Images</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container mt-4">
        <h2>Responsive Image</h2>
        <img src="https://via.placeholder.com/800x400" 
             class="img-fluid" 
             alt="Responsive image">
        
        <h2 class="mt-4">Image Thumbnails</h2>
        <div class="row">
            <div class="col-md-4">
                <img src="https://via.placeholder.com/300" 
                     class="img-thumbnail" 
                     alt="Thumbnail 1">
            </div>
            <div class="col-md-4">
                <img src="https://via.placeholder.com/300" 
                     class="img-thumbnail" 
                     alt="Thumbnail 2">
            </div>
            <div class="col-md-4">
                <img src="https://via.placeholder.com/300" 
                     class="img-thumbnail" 
                     alt="Thumbnail 3">
            </div>
        </div>
        
        <h2 class="mt-4">Rounded Images</h2>
        <img src="https://via.placeholder.com/200" 
             class="rounded" 
             alt="Rounded image">
        
        <img src="https://via.placeholder.com/200" 
             class="rounded-circle" 
             alt="Circle image">
    </div>
</body>
</html>
```

**Test करें:** Images responsive और styled दिखेंगे।

**Explanation:** 
- `.img-fluid` - Responsive image (max-width: 100%)
- `.img-thumbnail` - Bordered thumbnail style
- `.rounded` - Rounded corners
- `.rounded-circle` - Circular image

---

## Step 13: Bootstrap Tables - Basic

Basic Bootstrap table:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bootstrap Tables</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container mt-4">
        <h2>Basic Table</h2>
        <table class="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>City</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>राज कुमार</td>
                    <td>raj@example.com</td>
                    <td>दिल्ली</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>प्रिया शर्मा</td>
                    <td>priya@example.com</td>
                    <td>मुंबई</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>अमित पटेल</td>
                    <td>amit@example.com</td>
                    <td>अहमदाबाद</td>
                </tr>
            </tbody>
        </table>
    </div>
</body>
</html>
```

**Test करें:** Styled table दिखेगा।

**Explanation:** `.table` class basic Bootstrap table styling देती है।

---

## Step 14: Table Variations

Different table styles:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Table Variations</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container mt-4">
        <h2>Striped Table</h2>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>City</th>
                </tr>
            </thead>
            <tbody>
                <tr><td>राहुल</td><td>25</td><td>दिल्ली</td></tr>
                <tr><td>सीमा</td><td>28</td><td>मुंबई</td></tr>
                <tr><td>विक्रम</td><td>30</td><td>बैंगलोर</td></tr>
            </tbody>
        </table>
        
        <h2 class="mt-4">Bordered Table</h2>
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Stock</th>
                </tr>
            </thead>
            <tbody>
                <tr><td>Laptop</td><td>₹45,000</td><td>15</td></tr>
                <tr><td>Phone</td><td>₹25,000</td><td>30</td></tr>
                <tr><td>Tablet</td><td>₹15,000</td><td>20</td></tr>
            </tbody>
        </table>
        
        <h2 class="mt-4">Hover Table</h2>
        <table class="table table-hover">
            <thead>
                <tr>
                    <th>Course</th>
                    <th>Duration</th>
                    <th>Fee</th>
                </tr>
            </thead>
            <tbody>
                <tr><td>Web Design</td><td>3 months</td><td>₹10,000</td></tr>
                <tr><td>React JS</td><td>2 months</td><td>₹15,000</td></tr>
                <tr><td>Node JS</td><td>2 months</td><td>₹12,000</td></tr>
            </tbody>
        </table>
    </div>
</body>
</html>
```

**Test करें:** Different table styles दिखेंगे।

**Explanation:**
- `.table-striped` - Alternate row colors
- `.table-bordered` - Borders on all sides
- `.table-hover` - Row hover effect

---

## Step 15: Colored Table Rows

Table rows को color करना:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Colored Tables</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container mt-4">
        <h2>Colored Table Rows</h2>
        <table class="table">
            <thead>
                <tr>
                    <th>Status</th>
                    <th>Order ID</th>
                    <th>Customer</th>
                </tr>
            </thead>
            <tbody>
                <tr class="table-primary">
                    <td>Primary</td>
                    <td>#1001</td>
                    <td>राज कुमार</td>
                </tr>
                <tr class="table-success">
                    <td>Success</td>
                    <td>#1002</td>
                    <td>सीमा शर्मा</td>
                </tr>
                <tr class="table-danger">
                    <td>Danger</td>
                    <td>#1003</td>
                    <td>अमित पटेल</td>
                </tr>
                <tr class="table-warning">
                    <td>Warning</td>
                    <td>#1004</td>
                    <td>प्रिया गुप्ता</td>
                </tr>
                <tr class="table-info">
                    <td>Info</td>
                    <td>#1005</td>
                    <td>विक्रम सिंह</td>
                </tr>
            </tbody>
        </table>
    </div>
</body>
</html>
```

**Test करें:** Colored rows दिखेंगे।

**Explanation:** Bootstrap में contextual color classes हैं table rows के लिए।

---

## Complete Reference Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Complete Bootstrap Guide</title>
    
    <!-- Bootstrap CSS CDN -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    
    <style>
        .demo-section {
            margin-bottom: 50px;
            padding: 30px;
            background-color: #f8f9fa;
            border-radius: 10px;
        }
        
        .grid-demo > div {
            background-color: #e9ecef;
            border: 2px solid #495057;
            padding: 15px;
            margin-bottom: 10px;
            text-align: center;
            border-radius: 5px;
        }
    </style>
</head>
<body>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container">
            <a class="navbar-brand" href="#">Bootstrap Tutorial</a>
        </div>
    </nav>
    
    <!-- Main Content -->
    <div class="container mt-5">
        
        <!-- Section 1: Containers -->
        <section class="demo-section">
            <h1 class="text-primary mb-4">1. Bootstrap Containers</h1>
            
            <div class="alert alert-info">
                <strong>Container Types:</strong> Bootstrap में तीन main container types हैं
            </div>
            
            <h3>Regular Container</h3>
            <div class="container border border-primary p-3 mb-3">
                <p class="mb-0">यह .container class है - responsive fixed-width container</p>
            </div>
            
            <h3>Fluid Container</h3>
            <div class="container-fluid border border-success p-3 mb-3">
                <p class="mb-0">यह .container-fluid class है - 100% width container</p>
            </div>
            
            <h3>Responsive Containers</h3>
            <div class="container-md border border-warning p-3">
                <p class="mb-0">यह .container-md है - medium breakpoint पर responsive</p>
            </div>
        </section>
        
        <!-- Section 2: Grid System -->
        <section class="demo-section">
            <h1 class="text-primary mb-4">2. Grid System (12 Columns)</h1>
            
            <h3>Equal Width Columns</h3>
            <div class="row grid-demo mb-4">
                <div class="col">Col 1</div>
                <div class="col">Col 2</div>
                <div class="col">Col 3</div>
            </div>
            
            <h3>Specific Width Columns</h3>
            <div class="row grid-demo mb-4">
                <div class="col-4">col-4</div>
                <div class="col-8">col-8</div>
            </div>
            
            <div class="row grid-demo mb-4">
                <div class="col-6">col-6</div>
                <div class="col-6">col-6</div>
            </div>
            
            <h3>Responsive Columns</h3>
            <div class="row grid-demo">
                <div class="col-12 col-md-6 col-lg-4">
                    <strong>Responsive Col 1</strong><br>
                    Mobile: 12, Tablet: 6, Desktop: 4
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                    <strong>Responsive Col 2</strong><br>
                    Mobile: 12, Tablet: 6, Desktop: 4
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                    <strong>Responsive Col 3</strong><br>
                    Mobile: 12, Tablet: 6, Desktop: 4
                </div>
            </div>
        </section>
        
        <!-- Section 3: Typography -->
        <section class="demo-section">
            <h1 class="text-primary mb-4">3. Typography</h1>
            
            <h1>Heading 1</h1>
            <h2>Heading 2</h2>
            <h3>Heading 3</h3>
            <h4>Heading 4</h4>
            <h5>Heading 5</h5>
            <h6>Heading 6</h6>
            
            <hr>
            
            <p class="lead">यह एक lead paragraph है - prominent text।</p>
            <p>Normal paragraph text with Bootstrap styling.</p>
            <p class="text-muted">Muted text - light gray color में।</p>
            <p><mark>Highlighted text</mark> with yellow background।</p>
            <p><small>Small text - reduced font size।</small></p>
            
            <hr>
            
            <h3>Text Alignment</h3>
            <p class="text-start">Left aligned text</p>
            <p class="text-center">Center aligned text</p>
            <p class="text-end">Right aligned text</p>
            
            <hr>
            
            <h3>Text Colors</h3>
            <p class="text-primary">Primary color text</p>
            <p class="text-success">Success color text</p>
            <p class="text-danger">Danger color text</p>
            <p class="text-warning">Warning color text</p>
            <p class="text-info">Info color text</p>
        </section>
        
        <!-- Section 4: Images -->
        <section class="demo-section">
            <h1 class="text-primary mb-4">4. Images</h1>
            
            <h3>Responsive Image</h3>
            <img src="https://via.placeholder.com/800x300/667eea/ffffff?text=Responsive+Image" 
                 class="img-fluid mb-4" 
                 alt="Responsive">
            
            <h3>Image Thumbnails</h3>
            <div class="row mb-4">
                <div class="col-md-3">
                    <img src="https://via.placeholder.com/200/f093fb/ffffff?text=Thumb+1" 
                         class="img-thumbnail" 
                         alt="Thumb 1">
                </div>
                <div class="col-md-3">
                    <img src="https://via.placeholder.com/200/4facfe/ffffff?text=Thumb+2" 
                         class="img-thumbnail" 
                         alt="Thumb 2">
                </div>
                <div class="col-md-3">
                    <img src="https://via.placeholder.com/200/43e97b/ffffff?text=Thumb+3" 
                         class="img-thumbnail" 
                         alt="Thumb 3">
                </div>
                <div class="col-md-3">
                    <img src="https://via.placeholder.com/200/fa709a/ffffff?text=Thumb+4" 
                         class="img-thumbnail" 
                         alt="Thumb 4">
                </div>
            </div>
            
            <h3>Rounded Images</h3>
            <img src="https://via.placeholder.com/150/667eea/ffffff?text=Rounded" 
                 class="rounded me-3" 
                 alt="Rounded">
            
            <img src="https://via.placeholder.com/150/f093fb/ffffff?text=Circle" 
                 class="rounded-circle" 
                 alt="Circle">
        </section>
        
        <!-- Section 5: Tables -->
        <section class="demo-section">
            <h1 class="text-primary mb-4">5. Tables</h1>
            
            <h3>Basic Table</h3>
            <table class="table mb-4">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>राज कुमार</td>
                        <td>raj@example.com</td>
                        <td>दिल्ली</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>प्रिया शर्मा</td>
                        <td>priya@example.com</td>
                        <td>मुंबई</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>अमित पटेल</td>
                        <td>amit@example.com</td>
                        <td>बैंगलोर</td>
                    </tr>
                </tbody>
            </table>
            
            <h3>Striped Table with Hover</h3>
            <table class="table table-striped table-hover mb-4">
                <thead class="table-dark">
                    <tr>
                        <th>Product</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Stock</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Laptop</td>
                        <td>Electronics</td>
                        <td>₹45,000</td>
                        <td>15</td>
                    </tr>
                    <tr>
                        <td>Phone</td>
                        <td>Electronics</td>
                        <td>₹25,000</td>
                        <td>30</td>
                    </tr>
                    <tr>
                        <td>Tablet</td>
                        <td>Electronics</td>
                        <td>₹15,000</td>
                        <td>20</td>
                    </tr>
                    <tr>
                        <td>Headphones</td>
                        <td>Accessories</td>
                        <td>₹2,500</td>
                        <td>50</td>
                    </tr>
                </tbody>
            </table>
            
            <h3>Colored Table Rows</h3>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>Status</th>
                        <th>Order ID</th>
                        <th>Customer</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="table-success">
                        <td>Delivered</td>
                        <td>#1001</td>
                        <td>राहुल गुप्ता</td>
                        <td>₹5,000</td>
                    </tr>
                    <tr class="table-warning">
                        <td>Pending</td>
                        <td>#1002</td>
                        <td>सीमा वर्मा</td>
                        <td>₹3,500</td>
                    </tr>
                    <tr class="table-danger">
                        <td>Cancelled</td>
                        <td>#1003</td>
                        <td>विक्रम सिंह</td>
                        <td>₹2,000</td>
                    </tr>
                    <tr class="table-info">
                        <td>Processing</td>
                        <td>#1004</td>
                        <td>प्रिया शर्मा</td>
                        <td>₹7,500</td>
                    </tr>
                </tbody>
            </table>
        </section>
        
        <!-- Section 6: Breakpoints Reference -->
        <section class="demo-section">
            <h1 class="text-primary mb-4">6. Bootstrap Breakpoints Reference</h1>
            
            <div class="table-responsive">
                <table class="table table-bordered">
                    <thead class="table-dark">
                        <tr>
                            <th>Breakpoint</th>
                            <th>Class Infix</th>
                            <th>Screen Width</th>
                            <th>Container Width</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Extra Small</td>
                            <td><code>xs</code></td>
                            <td>&lt;576px</td>
                            <td>100%</td>
                        </tr>
                        <tr>
                            <td>Small</td>
                            <td><code>sm</code></td>
                            <td>≥576px</td>
                            <td>540px</td>
                        </tr>
                        <tr>
                            <td>Medium</td>
                            <td><code>md</code></td>
                            <td>≥768px</td>
                            <td>720px</td>
                        </tr>
                        <tr>
                            <td>Large</td>
                            <td><code>lg</code></td>
                            <td>≥992px</td>
                            <td>960px</td>
                        </tr>
                        <tr>
                            <td>Extra Large</td>
                            <td><code>xl</code></td>
                            <td>≥1200px</td>
                            <td>1140px</td>
                        </tr>
                        <tr>
                            <td>Extra Extra Large</td>
                            <td><code>xxl</code></td>
                            <td>≥1400px</td>
                            <td>1320px</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
        
    </div>
    
    <!-- Footer -->
    <footer class="bg-dark text-white text-center py-4 mt-5">
        <div class="container">
            <p class="mb-0">&copy; 2024 Bootstrap Tutorial. All rights reserved.</p>
        </div>
    </footer>
</body>
</html>
```

## Summary

### **1. Bootstrap Setup**

**CDN Link (Online):**
```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
```

**Required Meta Tag:**
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### **2. Containers**

| Class | Description | Width |
|-------|-------------|-------|
| `.container` | Responsive fixed-width | Changes at breakpoints |
| `.container-fluid` | Full width | 100% always |
| `.container-sm` | Responsive from SM | 100% until SM |
| `.container-md` | Responsive from MD | 100% until MD |
| `.container-lg` | Responsive from LG | 100% until LG |

### **3. Grid System**

**Basic Structure:**
```html
<div class="container">
    <div class="row">
        <div class="col">Column</div>
    </div>
</div>
```

**Column Classes:**
- `.col` - Equal width
- `.col-4` - 4 out of 12 columns
- `.col-md-6` - 6 columns on medium+ screens

**Responsive Pattern:**
```html
<div class="col-12 col-md-6 col-lg-4">
    <!-- Mobile: full width -->
    <!-- Tablet: half width -->
    <!-- Desktop: one-third width -->
</div>
```

### **4. Typography Classes**

| Class | Purpose |
|-------|---------|
| `.lead` | Prominent paragraph |
| `.text-muted` | Light gray text |
| `.text-start` | Left align |
| `.text-center` | Center align |
| `.text-end` | Right align |
| `.text-primary` | Primary color |
| `.text-success` | Success color |
| `.text-danger` | Danger color |

### **5. Image Classes**

| Class | Effect |
|-------|--------|
| `.img-fluid` | Responsive image |
| `.img-thumbnail` | Thumbnail border |
| `.rounded` | Rounded corners |
| `.rounded-circle` | Circular image |

### **6. Table Classes**

| Class | Effect |
|-------|--------|
| `.table` | Basic table |
| `.table-striped` | Striped rows |
| `.table-bordered` | All borders |
| `.table-hover` | Hover effect |
| `.table-success` | Green row |
| `.table-danger` | Red row |
| `.table-warning` | Yellow row |

### **7. Breakpoints**

| Size | Prefix | Screen Width |
|------|--------|--------------|
| Extra Small | xs | <576px |
| Small | sm | ≥576px |
| Medium | md | ≥768px |
| Large | lg | ≥992px |
| Extra Large | xl | ≥1200px |
| XX Large | xxl | ≥1400px |

### **8. Common Patterns**

**Responsive Card Grid:**
```html
<div class="row">
    <div class="col-12 col-md-6 col-lg-4">Card 1</div>
    <div class="col-12 col-md-6 col-lg-4">Card 2</div>
    <div class="col-12 col-md-6 col-lg-4">Card 3</div>
</div>
```

**Two Column Layout:**
```html
<div class="row">
    <div class="col-md-8">Main Content</div>
    <div class="col-md-4">Sidebar</div>
</div>
```

यह complete Bootstrap basics tutorial है!