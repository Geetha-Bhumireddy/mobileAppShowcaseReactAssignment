import styled from 'styled-components';

export const ContactSection = styled.section`
  padding: 50px 20px;
  background: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ContactContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  display: flex;
  flex-direction:row;
  justify-content:space-between;
  align-items: center;

  h2 {
    margin-bottom: 20px;
    font-size: 2.5em;
    color: #333;
  }

  @media (max-width: 768px) {
    padding: 20px;
    h2 {
      font-size: 2em;
    }
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

export const Label = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
  color: #555;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1em;
`;

export const TextArea = styled.textarea`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1em;
  resize: vertical;
`;

export const SubmitButton = styled.button`
  padding: 10px 20px;
  border: none;
  background: #333;
  color: white;
  border-radius: 5px;
  font-size: 1em;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #555;
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left:15px;
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  font-size: 1em;
  color: #333;

  p {
    margin: 0;
  }

  div {
    margin-left: 10px;
  }
`;

export const Icon = styled.div`
  background: #50c878;
  padding: 10px;
  border-radius: 50%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MapImage = styled.img`
  width: 60%;
  height: auto;
  margin-top: 15px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
`;

export const HeaderImage = styled.img`
  width: 150px;
  height: auto;
  border-radius: 50%;
  margin-bottom: 20px;
  display:flex;
  align-self:flex-start;
  margin-top:15px;
`;
