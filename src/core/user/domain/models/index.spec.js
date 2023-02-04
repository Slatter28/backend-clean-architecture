const chai = require("chai");
const expect = chai.expect;
const makeUser = require("./index");

describe("makeUser", () => {
  it("should return a valid user", () => {
    let errorMessages = [
      "Name is required",
      "Email is required",
      "Password is required",
      "Is active is required",
      "Google is required",
    ].join("\n");

    expect(() =>
      UserSchema.validate({
        name: "Roger",
        email: "es.pi25@hotmail.com",
        password: "Soslito28*",
        is_active: true,
        google: false,
      })
    ).to.throw(errorMessages);
  });
  it("must have a name", () => {
    let user = makeUser({
      name: "Roger",
    });

    let input = user.getName();
    let actual = "Roger";

    expect(input).to.equal(actual);
  });
  it("must have a email", () => {
    let user = makeUser({
      email: "es.pi25@hotmail.com",
    });

    let input = user.getEmail();
    let actual = "es.pi25@hotmail.com";

    expect(input).to.equal(actual);
  });
});
