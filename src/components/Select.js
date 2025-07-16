import styled from 'styled-components';

export default styled.select`
  box-sizing: border-box;
  width: 100%;
  border: 2px solid #fff;
  height: 52px;
  background: #fff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
  border-radius: 4px;
  outline: none;
  padding: 8px 16px;
  font-size: 16px;
  transition: border-color 0.2s ease-in-out;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary.main};
  }
`;
