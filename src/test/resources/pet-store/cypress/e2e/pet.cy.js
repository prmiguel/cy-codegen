import { PetRequests } from "../support/request/pet.request";

context("Pet", () => {
  it("Get", () => {
    PetRequests.get(20).then((res) => {
      expect(res.status).to.eq(200);
    });
  });

  it("Post", () => {
    const user = {
      id: 20,
      name: "doggie",
      category: {
        id: 1,
        name: "Dogs",
      },
      tags: [
        {
          id: 0,
          name: "abc",
        },
      ],
      status: "available",
    };

    PetRequests.post(user).then((res) => {
      expect(res.status).to.eq(200);
    });
  });
});
