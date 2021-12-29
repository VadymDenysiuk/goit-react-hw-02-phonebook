import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => {
  return <input type="text" value={value} onChange={onChange} />;
};

export default Filter;
