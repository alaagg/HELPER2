<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Helpar</title>
  <!-- ربط ملف CSS -->
  <link rel="stylesheet" href="styles.css" />
</head>
<body>

  <!-- هنا تحط زر اللغات وزر الأفاتار -->
  <div class="icon-btn" id="lang-btn" style="left:0">
    <div style="font-size:24px">🌐</div>
    <div class="label" id="lang-label">Languages</div>
    <div class="dropdown" id="lang-dropdown">
      <div onclick="setLanguage('en')">English</div>
      <div onclick="setLanguage('ar')">العربية</div>
    </div>
  </div>

  <div class="icon-btn" id="avatar-btn" style="right:0">
    <div style="font-size:24px">👤</div>
    <div class="label" id="avatar-label">Avatar</div>
    <div class="dropdown" id="avatar-dropdown">
      <div onclick="switchAvatar(1)">Avatar&nbsp;1</div>
      <div onclick="switchAvatar(2)">Avatar&nbsp;2</div>
      <div onclick="switchAvatar(3)">Avatar&nbsp;3</div>
      <div onclick="switchAvatar(4)">Avatar&nbsp;4</div>
    </div>
  </div>

  <!-- ربط ملف JS -->
  <script src="script.js"></script>
</body>
</html>
