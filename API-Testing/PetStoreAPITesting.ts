import { Locator, Page, expect, request } from "@playwright/test";
import { api } from "../Utils/ENUM";

let globalpetId: number;


export default class PetStoreAPITesting {

    //Get the Pets according to the status
    async getPetFindByStatusAvailable(status: String) {
        try {
            const apiContext = await request.newContext();
            const response = await apiContext.get(`${api.BASE_URL}/pet/findByStatus?status=${status}`);
            expect(response.status()).toBe(200);
            const pets = await response.json();
            console.log(pets);
            expect(Array.isArray(pets)).toBeTruthy();
            if (pets.length > 0) {
                expect(pets[0]).toHaveProperty('id');
                expect(pets[0]).toHaveProperty('name');
                expect(pets[0]).toHaveProperty('status');
            }
        } catch (error) {
            // Handle errors here
            console.error("Error occurred:", error);
        }
    }

    //Add a new Pet to the PetStore
    async postPetToAddStore() {
        try {
            const newPet = {
                id: "4141414141414141414",
                name: "Faruk",
                photoUrls: ["https://example.com/photo"],
                tags: [{ id: 1, name: "test" }],
                status: "available"
            };
            const apiContext = await request.newContext();
            const response = await apiContext.post(`${api.BASE_URL}/pet`, {
                data: newPet,
                headers: { 'Content-Type': 'application/json' }
            });

            console.log('POST /pet response status:', response.status());
            const createdPet = await response.json();
            console.log('POST /pet response body:', createdPet);
            console.log("ID " + createdPet.id)
            expect(response.status()).toBe(200);
            expect(createdPet.name).toBe(newPet.name);
            expect(createdPet.photoUrls).toEqual(newPet.photoUrls);
            expect(createdPet.status).toBe(newPet.status);
        }
        catch (error) {
            // Handle errors here
            console.error("Error occurred:", error);
        }

    }

    //Get the Pet by ID
    async getPetFindByID() {
        try {
            const petId = "4141414141414141414"; // The ID of the pet added previously
            const apiContext = await request.newContext();
            const response = await apiContext.get(`${api.BASE_URL}/pet/${petId}`);

            expect(response.status()).toBe(200);
            const pet = await response.json();
            console.log(pet);
            // expect(pet.id).toBe(petId);
            expect(pet).toHaveProperty('name');
            expect(pet).toHaveProperty('status');
        } catch (error) {
            // Handle errors here
            console.error("Error occurred:", error);
        }
    }


    //Update the Pet
    async putUpdateToExistingPet() {
        try {
            const updatedPet = {
                id: "4141414141414141414",
                name: "UpdatedTestPet",
                photoUrls: ["https://example.com/photo-updated"],
                tags: [{ id: 1, name: "test" }],
                status: "sold"
            };

            const apiContext = await request.newContext();
            const response = await apiContext.put(`${api.BASE_URL}/pet`, {
                data: updatedPet,
                headers: { 'Content-Type': 'application/json' }
            });

            expect(response.status()).toBe(200);
            const pet = await response.json();
            console.log(pet);
            expect(pet.name).toBe(updatedPet.name);
            expect(pet.photoUrls).toEqual(updatedPet.photoUrls);
            expect(pet.status).toBe(updatedPet.status);
        } catch (error) {
            // Handle errors here
            console.error("Error occurred:", error);
        }
    }

    //Delete the Pet
    async deleteThePet() {
        try {
            const petId = "4141414141414141414"; // The ID of the pet to delete
            const apiContext = await request.newContext();
            const response = await apiContext.delete(`${api.BASE_URL}/pet/${petId}`);
            expect(response.status()).toBe(200);

            // Verify the pet is deleted
            const getResponse = await apiContext.get(`${api.BASE_URL}/pet/${petId}`);
            expect(getResponse.status()).toBe(404);


            const errorResponse = await getResponse.json();
            console.log(`GET /pet/${petId} after DELETE response body:`, errorResponse);

            expect(getResponse.status()).toBe(404);
            expect(errorResponse).toMatchObject({
                code: 1,
                type: "error",
                message: "Pet not found"
            });
        } catch (error) {
            // Handle errors here
            console.error("Error occurred:", error);
        }
    }

    async getAllStoreInventory() {
        try {
            const apiContext = await request.newContext();
            const response = await apiContext.get(`${api.BASE_URL}/store/inventory`);
            expect(response.status()).toBe(200);
            const inventory = await response.json();
            console.log(inventory);
            return inventory;
        } catch (error) {
            console.error("Error occurred:", error);
            return { error: "An error occurred while fetching inventory." };
        }
    }

}