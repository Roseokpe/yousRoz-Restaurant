const divList = [];
const reservData = [
  {
    username: 'frank',
    date_start: '2022-09-22',
    date_end: '2022-09-21',
  },
];

const displayReservations = () => {
  divList.push(reservData);
  return divList.length;
};

export default displayReservations;