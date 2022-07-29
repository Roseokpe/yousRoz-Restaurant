const comments = [];
const userComment = [
  {
    item_id: '1',
    username: 'Maria',
    comment: 'Yummy',
  },
];

export const displayPopup = () => {
  comments.push(userComment);
  return comments.length;
};
