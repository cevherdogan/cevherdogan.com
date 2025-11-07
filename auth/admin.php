<?php
session_start();
if (!isset($_SESSION['logged_in']) || $_SESSION['logged_in'] !== true) {
  header('Location: login.php');
  exit;
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Admin Dashboard — cevherdogan.com</title>
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <link rel="stylesheet" href="assets/style.css">
</head>
<body>
  <header class="topbar">
    <div class="brand">CD Admin</div>
    <nav>
      <a href="index.php">Public Site</a>
      <a href="logout.php" class="btn">Logout</a>
    </nav>
  </header>
  <main class="main">
    <section class="card">
      <h2>Private Dashboard</h2>
      <p>Welcome, Cevher. This is the private side (not visible to public). Here you can later add:</p>
      <ul>
        <li>Private notes / drafts</li>
        <li>Links to Hostinger panels</li>
        <li>Internal project status (PepCubes, PreviewHub, Foundral)</li>
      </ul>
    </section>
    <section class="card">
      <h3>Quick links</h3>
      <table class="table">
        <tr><th>Resource</th><th>URL</th></tr>
        <tr><td>Public site</td><td><a href="index.php">index.php</a></td></tr>
        <tr><td>Admin</td><td><a href="admin.php">admin.php</a></td></tr>
        <tr><td>GitHub</td><td><a href="https://github.com/cevherdogan" target="_blank">github.com/cevherdogan</a></td></tr>
      </table>
    </section>
  </main>
  <footer class="footer">
    <p>Private area — do not share.</p>
  </footer>
</body>
</html>
