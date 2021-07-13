export function increaseCounter(number) {
  console.log("found a number in actions", number);

  return {
    type: "INCREMENT",
    payload: number + 1
  };
}

export const getUserData = async db => {
  var userDataArray = [];

  //on refresh
  // console.log(db);
  let userData = await db.get().then(function(snapshot) {
    snapshot.forEach(function(doc) {
      userData = doc.data();
      userDataArray.push(doc.data());
    });
  });
  console.log("found user datas inside action", userData);
  return {
    type: "USER_DATA",
    payload: userDataArray
  };
};
