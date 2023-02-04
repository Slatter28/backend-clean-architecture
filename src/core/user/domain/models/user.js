let buildMakeUser = function (userValidator) {
  return ({
    id,
    name,
    email,
    password,
    is_active,
    google
  } = {}) => {
    let { error } = userValidator({
      id,
      name,
      email,
      password,
      is_active,
      google,
    });

    if (error) throw new Error(error);

    return {
      getId: () => id,
      getName: () => name,
      getEmail: () => email,
      getPassword: () => password,
      getIsActive: () => is_active,
      getGoogle: () => google
    };
  };
};

module.exports = buildMakeUser;
