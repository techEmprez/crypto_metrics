import React from 'react';

const HomeList = () => {
  const [query, setQuery] = useState('');

  const onSearch = (event) => {
    setQuery(event.target.value);
  };

   const cryptos = useSelector((state) => state.crypto);

  const filteredCrypto = cryptos.filter((crypto) => (
    crypto.name.toLowerCase().includes(query.toLowerCase())
  ));

export default HomeList;
