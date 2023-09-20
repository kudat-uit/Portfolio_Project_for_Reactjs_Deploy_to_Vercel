import React from 'react';
import './App.css';
import MyAvatar from './Avatar.jpg'; // Import your avatar image

function App() {
    return (
        <div className="App">
            {/* Header */}
            <header className="App-header">
                <div className="avatar-container">
                    <img src={MyAvatar} alt="My Avatar" className="avatar" />
                </div>
                <div className="header-content">
                    <h1>Thành - Đạt Phạm</h1>
                    <p>Data Analyst | Business Analyst</p>
                </div>
            </header>

            {/* About Me */}
            <section className="section">
                <h2 className="section-heading">About Me</h2>
                <div className="section-content">
                    <p className="section-text">
                        Hello! I'm Thành-Đạt Phạm, a senior at UIT-VNU. I am an individual full of ambition and passionate about data and business analysis. My goal is to become an expert in data analysis and business. In the next 2-3 years, I aim to progress further in the field of data science or artificial intelligence research. With a solid educational background in Information Systems, I am committed to giving my all and forming a long-term bond with the company if given the opportunity to work together. My enthusiasm, determination, and dedication to the developmental journey aligned with the company are factors I hope prospective employers would take into consideration.
                    </p>
                </div>
            </section>

            {/* Projects */}
            <section className="section">
                <h2 className="section-heading">Projects</h2>
                <div className="section-content">
                    <div className="project">
                        <h3 className="project-title">Predict Time-Series: Gold Prices (Leader)</h3>
                        <p className="project-description">This was my project for the Intermediate Statistical Analysis course. I predicted future 30 days from historical gold price datasets in Kaggle. Based on: Linear Regression, SVR, ARIMA, Prophet, LSTM, Bi-LSTM.</p>
                    </div>
                    <div className="project">
                        <h3 className="project-title">Future Sales Prediction: A Comparative Study of Various Deep Learning Models using BigDL (Leader)</h3>
                        <p className="project-description">In this project, I explored the implementation of Convolutional Neural Network (CNN), Long Short-Term Memory (LSTM), and Sequence-to-Sequence (Seq2Seq) models using BigDL-chronos framework to predict future sales based on a Kaggle dataset.</p>
                    </div>
                    {/* Add more projects as needed */}
                </div>
            </section>

            {/* Extracurricular Activities */}
            <section className="section">
                <h2 className="section-heading">Extracurricular Activities</h2>
                <div className="section-content">
                    <div className="activity">
                        <h3 className="activity-title">Youth Conservationists - Save the Wildlife</h3>
                        <p className="activity-description">U.S Embassy in Hanoi</p>
                    </div>
                    {/* Add more extracurricular activities as needed */}
                </div>
            </section>

            {/* Contact */}
            <section className="section">
                <h2 className="section-heading">Contact Me</h2>
                <div className="section-content">
                    <p className="section-text">If you'd like to get in touch with me, feel free to reach out via <a href="https://www.facebook.com/thanhdatpham.uit/" className="contact-link">Facebook</a>.</p>
                </div>
            </section>

            {/* Footer */}
            <footer className="App-footer">
                <p className="footer-text">&copy; {new Date().getFullYear()} - Phạm Thành Đạt</p>
            </footer>
        </div>
    );
}

export default App;
