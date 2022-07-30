const comments = [];
const userComment = [
  {
    item_id: '1',
    username: 'Maria',
    comment: 'Yummy',
  },
];

const displayPopup = () => {
  comments.push(userComment);
  return comments.length;
};

export default displayPopup;