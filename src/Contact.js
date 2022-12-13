import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    height: 100vh;
    padding: 9rem 0rem 95rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
    <Wrapper>
      <h2 className="common-heading">Contact Us</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31236.411035341822!2d75.35235326895445!3d11.866643811587236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba422b9b2aca753%3A0x380605a11ce24f6c!2sKannur%2C%20Kerala!5e0!3m2!1sen!2sin!4v1670510543594!5m2!1sen!2sin"
        width="100%"
        height="350"
        title="myFrame"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/xnqregae"
            method="POST"
            className="contact-inputs"
          >
            <input
              type="text"
              name="Username"
              placeholder="Username"
              required
              autoComplete="off"
            />
            <input
              type="email"
              name="Email"
              placeholder="Email"
              required
              autoComplete="off"
            />
            <textarea
              name="Message"
              cols="30"
              rows="10"
              style={{ overflow: "auto", resize: "none" }}
              placeholder="Message"
              required
              autoComplete="off"
            ></textarea>
            <input type="submit" value="send" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
