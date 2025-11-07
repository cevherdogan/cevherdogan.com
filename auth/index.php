<?php
session_start();
$is_admin = isset($_SESSION['logged_in']) && $_SESSION['logged_in'] === true;
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Cevher Doğan — Cloud, AI & Automation</title>
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <link rel="stylesheet" href="assets/style.css">
</head>
<body>
  <header class="topbar">
    <div class="brand">cevherdogan.com</div>
    <nav>
      <a href="#about">About</a>
      <a href="#work">Work</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
      <?php if ($is_admin): ?>
        <a class="btn" href="admin.php">Admin</a>
        <a href="logout.php">Logout</a>
      <?php else: ?>
        <a class="btn" href="login.php">Admin Login</a>
      <?php endif; ?>
    </nav>
  </header>
  <main class="main">
    <section class="hero" id="top">
      <p class="badge">Public area</p>
      <h1>Hello, I'm Cevher.</h1>
      <p>Cloud platform engineer based in PA, building AI-backed automations, commerce, and health projects.</p>
      <div class="badges">
        <span class="badge">Cloud</span>
        <span class="badge">Automation</span>
        <span class="badge">AI / GPT</span>
        <span class="badge">E-commerce</span>
      </div>
    </section>

    <section id="about" class="cards">
      <div class="card">
        <h2>About</h2>
        <p>I design and deliver practical, automated solutions — from Shopify/WooCommerce to API-first health and travel services.</p>
      </div>
      <div class="card">
        <h2>Current focus</h2>
        <p>PepCubes, health product distribution, GPT safety (SafeGPT), and cloud modernization content for Medium.</p>
      </div>
      <div class="card">
        <h2>Location</h2>
        <p>Pennsylvania, USA — working with US/Turkey connections.</p>
      </div>
    </section>

    <section id="projects" class="card" style="margin-top:1rem;">
      <h2>Selected projects</h2>
      <ul>
        <li><strong>PepCubes</strong> — healthy snack product & WooCommerce automation</li>
        <li><strong>PreviewHub</strong> — microsite & prototype hosting</li>
        <li><strong>Foundral</strong> — automation and service integration</li>
        <li><strong>SafeGPT</strong> — test GPTs for privacy & leakage</li>
      </ul>
    </section>

    <section id="contact" class="card" style="margin-top:1rem;">
      <h2>Contact</h2>
      <p>Email: <a href="mailto:cevherd@gmail.com">cevherd@gmail.com</a></p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/cevherdogan/" target="_blank">linkedin.com/in/cevherdogan</a></p>
      <p>GitHub: <a href="https://github.com/cevherdogan" target="_blank">github.com/cevherdogan</a></p>
    </section>
  </main>
  <footer class="footer">
    <p>© <?php echo date('Y'); ?> cevherdogan.com — public view</p>
  </footer>
</body>
</html>
