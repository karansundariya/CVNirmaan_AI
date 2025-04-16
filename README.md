CVNirman_AI

A powerful AI-based tool that helps users generate professional resumes and cover letters effortlessly. Built using **ReactJS**, **TailwindCSS**, **Gemini API**, and **Firebase** for authentication, this project simplifies the job application process.

---

## Features ✨

- **AI-Powered Resume Builder**: Generate tailored resumes based on your input.
- **Cover Letter Generator**: Create personalized cover letters in seconds.
- **User Authentication**: 🔒 Secure login and registration using Firebase.
- **Responsive Design**: 📱 Mobile-first and fully responsive UI with TailwindCSS.
- **Modern Icons**: 🎨 Enhanced visual experience using React Icons.
- **Gemini API Integration**: 🚀 Leverages AI capabilities for resume and cover letter generation.

---

## Tech Stack 🛠️

- **Frontend**: ReactJS, TailwindCSS
- **Authentication**: Firebase
- **API**: Gemini API
- **Icons**: React Icons

---


## Installation 🖥️

Follow these steps to set up the project locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/AI-Resume-and-Cover-Letter-Builder.git
   cd AI-Resume-and-Cover-Letter-Builder
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Add Firebase configuration**:
   - Go to your Firebase console.
   - Create a new project and obtain the Firebase configuration.
   - Replace the Firebase config in `src/firebase.js` with your details.

4. **Run the application**:
   ```bash
   npm start
   ```

The app will be available at `http://localhost:3000`.

---

## Project Structure 📂

```
AI-Resume-and-Cover-Letter-Builder
├── src
│   ├── components   # Reusable UI components
│   ├── pages        # Application pages (Home, Dashboard, etc.)
│   ├── firebase.js  # Firebase configuration
│   ├── App.js       # Main app component
│   ├── index.js     # Entry point
│   └── assets       # Static assets (images, icons, etc.)
├── public           # Public files (index.html, etc.)
├── package.json     # Project dependencies and scripts
├── tailwind.config.js # TailwindCSS configuration
└── README.md        # Project documentation
```

---


---

## Deployment 🚀

The project can be deployed to platforms like **Vercel**, **Netlify**, or **Firebase Hosting**.

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Deploy to your preferred platform**:
   - For **Vercel**: Run `vercel deploy`.
   - For **Netlify**: Drag and drop the `build/` folder into the Netlify dashboard.
   - For **Firebase Hosting**:
     ```bash
     firebase init
     firebase deploy
     ```

---

## Contributions 🤝

Contributions are welcome! Feel free to open issues or submit pull requests.

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

---

## License 📜

This project is licensed under the [MIT License](LICENSE).


