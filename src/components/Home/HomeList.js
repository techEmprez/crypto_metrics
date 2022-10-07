import React from 'react';

const HomeList = () => {
  const [query, setQuery] = useState('');

  const onSearch = (event) => {
    setQuery(event.target.value);
  };

export default HomeList;
