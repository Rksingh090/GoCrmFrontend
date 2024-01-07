import React from 'react'
import "../../styles/admin/support.css";

const Support = () => {
  return (
    <div className='AdminSupportPage'>
      <h2 className="textEmphasis fontXXXL">Support Center</h2>
      <div className="AdminSupportPageContainer">

        <h4 className="fontLG mt2">
          1. Frequently Asked Questions (FAQs)
        </h4>
        <p className='text-subtle'>
          General Queries: Answers to common questions about our product/service, billing, and account management.
          Troubleshooting: Solutions to frequently encountered issues and how-tos for resolving them
        </p>

        <h4 className="fontLG mt2">2. Getting Started Guide</h4>

        <p className="text-subtle">
          Onboarding: Step-by-step instructions for new users to set up their accounts and begin using the product.
          Tutorials: Video or text guides illustrating key features and functionalities.
        </p>
        <h4 className="fontLG mt2">
          3. Contact Us
        </h4>
        <p className="text-subtle">
          Support Tickets: Access our ticketing system to submit specific issues or requests for personalized assistance.
          Live Chat: Connect with our support team in real-time for immediate help during operating hours.
          Email Support: Reach out to our support team via email for non-urgent inquiries.
        </p>
        <h4 className="fontLG mt2">
          4. Community Forums
        </h4>
        <p className="text-subtle">
          Discussion Boards: Engage with other users, share tips, and seek advice within our community forums.
          Knowledge Sharing: Access user-generated content, guides, and troubleshooting tips from the community.
        </p>
        <h4 className="fontLG mt2">
          5. Updates and Announcements
        </h4>
        <p className="text-subtle">
          Product Updates: Stay informed about new features, enhancements, and changes to the product/service.
          Maintenance Alerts: Notifications about scheduled maintenance or downtimes.
        </p>
        <h4 className="fontLG mt2">
          6. Documentation and Resources
        </h4>
        <p className="text-subtle">
          User Manuals: Detailed documentation outlining product features, settings, and best practices.
          API Documentation: Information for developers integrating with our product/service.
        </p>
        <h4 className="fontLG mt2">
          7. Feedback and Suggestions
        </h4>
        <p className="text-subtle">
          Feedback Form: Share your thoughts, suggestions, or report issues to help us improve our product/service.
        </p>
        <h4 className="fontLG mt2">
          8. Accessibility Information
        </h4>
        <p className="text-subtle">
          Accessibility Features: Information about accessibility options available in our product/service.
        </p>
        <h4 className="fontLG mt2">
          9. Privacy and Terms
        </h4>
        <p className="text-subtle">
          Privacy Policy: Details about how we handle user data and privacy concerns.
          Terms of Service: Information regarding the terms and conditions for using our product/service.
        </p>
      </div>
    </div>
  )
}

export default Support