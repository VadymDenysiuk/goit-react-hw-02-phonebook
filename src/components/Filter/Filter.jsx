import PropTypes from 'prop-types';
import { Input } from './Filter.styled';

const Filter = ({ value, onChange }) => {
  return <Input type="text" value={value} onChange={onChange} />;
};

export default Filter;
