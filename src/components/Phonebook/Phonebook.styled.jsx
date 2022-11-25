import styled from 'styled-components';
import  {style}  from 'styled-system';


export const ContactBox = styled.div`

`;

export const ContactList = styled.ul`
margin: ${p => p.theme.space[0]}px;
font-size: ${p => p.theme.fontSizes.s}px;
color: ${p => p.theme.colors.text};
`;

export const ContactItem = styled.li`
    margin-bottom: ${p => p.theme.space[0]}px;
`;
    
export const ContactName = styled.p`
margin: ${p => p.theme.space[0]}px;
font-size: ${p => p.theme.fontSizes.m}px;
color: ${p => p.theme.colors.text};
`;
