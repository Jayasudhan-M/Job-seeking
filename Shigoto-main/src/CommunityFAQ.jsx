import React from 'react';
import './CommunityFAQ.css';

const faqs = [
  {
    question: "How do I create an account?",
    answer: "To create an account, click on the 'Sign Up' button on the top right corner of the homepage. Fill out the required information and follow the prompts to complete your registration."
  },
  {
    question: "How can I apply for a job?",
    answer: "Once you've found a job listing that interests you, click on the 'Apply' button on the job post page. Follow the instructions to submit your application, which may include uploading your resume and cover letter."
  },
  {
    question: "How do I reset my password?",
    answer: "If you've forgotten your password, click on the 'Forgot Password' link on the login page. Enter your email address, and you'll receive instructions to reset your password."
  },
  {
    question: "Can I update my profile information?",
    answer: "Yes, you can update your profile information at any time. Log in to your account, go to your profile settings, and make the necessary changes."
  },
  {
    question: "How can I contact customer support?",
    answer: "If you need assistance, you can contact our customer support team through the 'Contact Us' page. Fill out the contact form with your query, and we'll get back to you as soon as possible."
  }
];

const CommunityFAQ = () => {
  return (
    <section className="community-faq">
      <div className="container">
        <h2>Community FAQ</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <h3 className="faq-question">{faq.question}</h3>
              <p className="faq-answer">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityFAQ;
