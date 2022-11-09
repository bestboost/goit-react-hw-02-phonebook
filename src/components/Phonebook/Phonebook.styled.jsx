import styled from 'styled-components';
import  {style}  from 'styled-system';

export const Tiltle = styled.h1`
margin: ${p => p.theme.space[3]}px;
margin-bottom: ${p => p.theme.space[5]}px;
color: ${p => p.theme.colors.title};
font-size: ${p =>p.theme.fontSizes.xl}px;
`;

export const Contacts = styled.h2`
margin: ${p => p.theme.space[3]}px;
color: ${p => p.theme.colors.title};
font-size: ${p =>p.theme.fontSizes.xl}px;
`;

export const ContactBox = styled.div`
margin: ${p => p.theme.space[4]}px;
padding: ${p => p.theme.space[3]}px;

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
