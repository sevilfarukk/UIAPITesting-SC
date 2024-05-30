import { test } from "../../fixture/pomFixture"

test.describe("Pet Store API", async () => {
  test("get All the Pets from PetStore with status Available", async ({ petStore }) => {
    await petStore.getPetFindByStatusAvailable("available")
  })

  test("get All the Pets from PetStore with status Pending", async ({ petStore }) => {
    await petStore.getPetFindByStatusAvailable("pending")
  })

  test("get All the Pets from PetStore with status Sold", async ({ petStore }) => {
    await petStore.getPetFindByStatusAvailable("sold")
  })

  test("Create a Pet to Add the PetStore", async ({ petStore }) => {
    await petStore.postPetToAddStore()
  })

  test("get the pet by ID", async ({ petStore }) => {
    await petStore.getPetFindByID()
  })

  test("update the existing pet", async ({ petStore }) => {
    await petStore.putUpdateToExistingPet()
  })

  test("delete the pet from PetStore", async ({ petStore }) => {
    await petStore.deleteThePet()
  })

  test("Get the All Store Inventory", async ({ petStore }) => {
    await petStore.getAllStoreInventory()
  })

})