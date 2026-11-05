# Thedara Thisathmi Withana - Personal Portfolio Website

A modern, responsive, and high-performance personal portfolio website built with semantic HTML5, modern CSS3 (Custom Properties & Glassmorphism), and Vanilla JavaScript.

---

## 🌟 Features

- **Personalized Branding**: Highlighting **Thedara Thisathmi Withana** (IT undergraduate at **SLIIT – Faculty of Computing**, specializing in **Artificial Intelligence**).
- **Dark & Light Mode**: Seamless theme switching with local storage persistence.
- **Categorized Skills**: Visual skill chips for Python, Java, SQL, OOP, Data Structures & Algorithms, HTML/CSS, Git/GitHub, and Machine Learning.
- **Interactive Projects Showcase**:
  - 📊 **Study Performance Predictor** (Python + Machine Learning)
  - 🏨 **Hotel Room Reservation System** (University Group Project - 5 Members | Java, OOP & SQL)
  - 🎓 **EduFrame / Course Management System** (University Group Project - 5 Members | Java, Web & OOP)
  - 🌐 **Interactive Web-Based Projects** (HTML5, CSS3, JavaScript)
  - Interactive category filtering ("All", "AI / ML", "Software Dev", "Web Dev") and detailed feature modals.
- **Education & Certifications**:
  - SLIIT BSc (Hons) in Information Technology Specializing in Artificial Intelligence.
  - Cisco NetAcad, AWS, AI/ML courses, and industry certifications.
- **Direct Contact & Connect**:
  - Click-to-email (`thedarawithana2005@gmail.com`)
  - Direct phone / WhatsApp (`+94 77 127 1478`)
  - LinkedIn ([thedara-withana-55b571395](https://www.linkedin.com/in/thedara-withana-55b571395))
  - GitHub ([github.com/thedarawithana](https://github.com/thedarawithana))
  - Credly ([credly.com/users/thedara-withana](https://www.credly.com/users/thedara-withana))
  - Interactive email trigger form.
- **Zero Heavy Dependencies**: Pure frontend, ultra-fast loading, fully responsive across all desktop and mobile devices.

---

## 📁 Project Structure

```text
Profilo/
├── index.html     # Main HTML5 layout & content structure
├── style.css      # Design system, CSS variables, glassmorphism, responsive queries
├── script.js      # Theme toggle, filter buttons, modals, and contact handler
└── README.md      # Documentation and deployment guide
```

---

## 🚀 How to Run Locally

### Option 1: Direct Browser Launch
Simply double-click `index.html` in your file explorer, or right-click and choose **Open with > Chrome / Edge / Firefox**.

### Option 2: Using Python Simple Server (Optional)
If you have Python installed, open PowerShell in this directory and run:
```powershell
python -m http.server 8000
```
Then visit: `http://localhost:8000` in your browser.

---

## 🌐 How to Deploy to GitHub Pages (Free Hosting)

1. Create a repository on your GitHub account ([github.com/thedarawithana](https://github.com/thedarawithana)) named `portfolio` or `thedarawithana.github.io`.
2. Push this project code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/thedarawithana/<your-repo-name>.git
   git push -u origin main
   ```
3. In your GitHub repository:
   - Go to **Settings** > **Pages**.
   - Under **Build and deployment**, select **Deploy from a branch**.
   - Select Branch: `main` and Folder: `/ (root)`.
   - Click **Save**.
4. Your website will be live in a few moments at:  
   `https://thedarawithana.github.io/<your-repo-name>/` (or `https://thedarawithana.github.io` if named `thedarawithana.github.io`).

---

## 📝 Customization

- **Profile Picture**: To replace the avatar initials `TW` with your personal photo, edit the `.avatar-circle` in `index.html` and replace the initials span with `<img src="your-photo.jpg" alt="Thedara Thisathmi Withana" style="width:100%;height:100%;border-radius:50%;object-fit:cover;">`.
- **Project Repositories**: Replace any placeholder repository links in `index.html` and `script.js` with direct repository URLs (e.g., `https://github.com/thedarawithana/study-performance-predictor`).
- **Resume/CV**: Place your `resume.pdf` in the root folder and add a link in the navbar or hero section.
