import React from "react";
import {TypeName, InputName, FilterBox} from './Filter.styled'

const Filter = ({value, onChange}) => (
            <FilterBox>
              <TypeName>Find contacts by name</TypeName>
              <InputName type="text" value={value} onChange={onChange}/>
            </FilterBox>  
);

export default Filter;