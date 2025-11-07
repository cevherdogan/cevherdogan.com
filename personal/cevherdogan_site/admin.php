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
  <title>Admin Dashboard — Cevher Doğan</title>
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <link rel="stylesheet" href="assets/style.css">
</head>
<body>
  <header class="topbar">
    <div class="brand">CD Admin</div>
    <nav>
      <a href="index.php">View Site</a>
      <a href="logout.php" class="btn">Logout</a>
    </nav>
  </header>
  <main class="content">
    <section class="card">
      <h2>Welcome, Cevher 👋</h2>
      <p>This is your private area. From here you can add private notes, draft posts, or link to future CMS.</p>
      <p>Next steps you can add:</p>
      <ul>
        <li>Protected /private page list</li>
        <li>Upload media</li>
        <li>Link to Hostinger / phpMyAdmin</li>
      </ul>
    </section>
    <section class="card">
      <h3>Current domains</h3>
      <p>You can hardcode or fetch from DB later.</p>
      <ul>
        <li>cevherdogan.com</li>
        <li>foundral.tech</li>
        <li>previewhub-dev.com</li>
        <li>pepcubes-us.com</li>
      </ul>
    </section>
  </main>
</body>
</html>
