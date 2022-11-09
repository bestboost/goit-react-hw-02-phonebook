import styled from 'styled-components';
import  {style}  from 'styled-system';

export const Tiltle = styled.h1`
margin: ${p => p.theme.space[3]}px;
margin-bottom: ${p => p.theme.space[5]}px;
color: ${p => p.theme.colors.title};
font-size: ${p =>p.theme.fontSizes.xl}px;

`;

export const Form = styled.div`
display: flex;
flex-direction: column;
aline-items: flex-start;
width: 450px;
margin: ${p => p.theme.space[3]}px;
margin-bottom: ${p => p.theme.space[5]}px;
padding: ${p => p.theme.space[4]}px;

border: ${p => p.theme.border.normal};
border-color: ${p => p.theme.colors.border};
border-radius: ${p => p.theme.radii.normal};
   
`;

export const CallToAction = styled.p`
margin: ${p => p.theme.space[0]}px;
margin-bottom: ${p => p.theme.space[3]}px;
color: ${p => p.theme.colors.title};
font-size: ${p =>p.theme.fontSizes.l}px;
`;

export const TypeName = styled.input`
width: 50%;
padding: ${p => p.theme.space[2]}px;
margin-bottom: ${p => p.theme.space[5]}px;
font-size: ${p => p.theme.fontSizes.m}px;
color: ${p => p.theme.colors.text};
border: ${p => p.theme.border.normal};
border-color: ${p => p.theme.colors.border};
border-radius: ${p => p.theme.radii.normal};

:hover, 
:focus: ${p => p.theme.colors.hover};

`;

export const AddButton = styled.button`
width: 40%;
margin: ${p => p.theme.space[0]}px;
    padding: ${p => p.theme.space[2]}px;
    font-size: ${p => p.theme.fontSizes.m}px;
    color: ${p => p.theme.colors.text};
    background-color: ${p => p.theme.colors.background};    
    border: ${p => p.theme.border.normal};
    border-color: ${p => p.theme.colors.border};
    border-radius: ${p => p.theme.radii.normal};
            
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
