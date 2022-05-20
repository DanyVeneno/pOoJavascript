// composition is a strong type of aggregation.
// each component has no independent life withot his owner

const person = {
  name: "Ryan",
  surname: "Ray",
  address: { // this object depends on his owner, if the person is deleted also this object
    street: "123 Baker Street",
    city: "London",
    country: "United Kingdom",
  },
};
