import React from 'react';

type option = {
  value: string,
  label: string,
}

type Options = {
  options: option[]
}

const Select = ({options}: Options) => {
  return (
    <div>
      {options.map(({ label, value }) => 
        (<button key={label}>{label}</button>)
      )}
    </div>
  );
};

export default Select;