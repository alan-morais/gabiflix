import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FormFieldWrapper = styled.input`

`;

const Label = styled.label`

`;

const Input = styled.input`

`;
function FormField({
  label, type, name, value, onChange,
}) {
  const fieldId = `id_${name}`;
  const isTextarea = type === 'textarea';
  const tag = isTextarea ? 'textarea' : 'input';
  return (
    <FormFieldWrapper>
      <Label htmlFor={fieldId}>
        {label}
        :
        <Input
          as={tag}
          id={fieldId}
          type={type}
          value={value}
          name={name}
          onChange={onChange}
        />
      </Label>
    </FormFieldWrapper>
  );
}

FormField.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => {},
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
};
export default FormField;
