import styled from 'vue-styled-components';

const btnProps = {
  type: String,
};

const btnType = {
  primary: {
    background: '#6FB4E2',
    border: '1px solid #6FB4E2',
    color: 'white',
  },
  success: {
    background: '#71B65B',
    border: '1px solid #71B65B',
    color: 'white',
  },
  danger: {
    background: '#DC3958',
    border: '1px solid #DC3958',
    color: 'white',
  },
  default: {
    background: '#FFF',
    border: '1px solid #666',
    color: '#222',
  },
};

const getBtnType = (type) => type ? btnType[type] : btnType['default'];

const Button = styled('button', btnProps)`
  background: ${props => getBtnType(props.type).background};
  color: ${props => getBtnType(props.type).color};
  border: ${props => getBtnType(props.type).border};
  border-radius: 5px;
  margin: 5px;
`;

export default Button;
