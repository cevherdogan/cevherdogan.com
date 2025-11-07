<?php
session_start();
$is_admin = isset($_SESSION['logged_in']) && $_SESSION['logged_in'] === true;
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Cevher Doğan — Personal Site</title>
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <link rel="stylesheet" href="assets/style.css">
</head>
<body>
  <header class="topbar">
    <div class="brand">Cevher Doğan</div>
    <nav>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
      <?php if ($is_admin): ?>
        <a class="admin-link" href="admin.php">Admin</a>
        <a class="admin-link" href="logout.php">Logout</a>
      <?php else: ?>
        <a class="btn" href="login.php">Admin Login</a>
      <?php endif; ?>
    </nav>
  </header>
  <main class="content">
    <section id="hero">
      <h1>Hello, I'm Cevher.</h1>
      <p>Cloud platform engineer, builder, and entrepreneur. I like to ship things fast and automate everything.</p>
    </section>
    <section id="about" class="card">
      <h2>About</h2>
      <p>This is my public page. I am based in Pennsylvania, USA, and I build cloud, automation, AI and commerce solutions.</p>
    </section>
    <section id="projects" class="card">
      <h2>Highlighted Projects</h2>
      <ul>
        <li>PepCubes — healthy snacks e-commerce</li>
        <li>PreviewHub — micro-site & prototype host</li>
        <li>Foundral — automation & cloud tooling</li>
      </ul>
    </section>
    <section id="contact" class="card">
      <h2>Contact</h2>
      <p>Email: <a href="mailto:cevherd@gmail.com">cevherd@gmail.com</a></p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/cevherdogan/" target="_blank">linkedin.com/in/cevherdogan</a></p>
    </section>
  </main>
  <footer class="footer">
    <p>© <?php echo date('Y'); ?> Cevher Doğan</p>
  </footer>
</body>
</html>
