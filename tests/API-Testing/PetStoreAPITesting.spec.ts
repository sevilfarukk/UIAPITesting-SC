import { test } from "../../fixture/pomFixture"

test.describe("The aim of the tests is to verify that all the CRUD operations in the Pet Store API", async () => {
  test("should get All the Pets from PetStore with status Available", async ({ petStore }) => {
    await petStore.getPetFindByStatusAvailable("available")
  })

  test("should get All the Pets from PetStore with status Pending", async ({ petStore }) => {
    await petStore.getPetFindByStatusAvailable("pending")
  })

  test("should get All the Pets from PetStore with status Sold", async ({ petStore }) => {
    await petStore.getPetFindByStatusAvailable("sold")
  })

  test("should create a Pet to Add the PetStore", async ({ petStore }) => {
    await petStore.postPetToAddStore()
  })

  test("should get the pet by ID", async ({ petStore }) => {
    await petStore.getPetFindByID()
  })

  test("should update the existing pet", async ({ petStore }) => {
    await petStore.putUpdateToExistingPet()
  })

  test("should delete the pet from PetStore", async ({ petStore }) => {
    await petStore.deleteThePet()
  })

  test("should get the All Store Inventory", async ({ petStore }) => {
    await petStore.getAllStoreInventory()
  })

})