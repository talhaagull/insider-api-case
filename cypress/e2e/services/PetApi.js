import { baseUrl } from '../../fixtures/data.json';

class PetApi {
   
    createPet(petData) {
      return cy.request({
        method: 'POST',
        url: baseUrl,
        body: petData,
        failOnStatusCode: false
      });
    }
  
    getPetById(petId) {
      return cy.request({
        method: 'GET',
        url: baseUrl + `/${petId}`,
        failOnStatusCode: false
      });
    }

    getPetByStatus(petStatus) {
      return cy.request({
          method: 'GET',
          url: baseUrl + `/findByStatus?status=${petStatus}`,
          failOnStatusCode: false,
      });
    }
  
    updatePet(petData) {
      return cy.request({
        method: 'PUT',
        url: baseUrl,
        body: petData,
        failOnStatusCode: false
      });
    }
  
    deletePet(petId) {
      return cy.request({
        method: 'DELETE',
        url: baseUrl + `/${petId}`,
        failOnStatusCode: false
      });
    }

    postImage(petId, imagePath) {
      return cy.fixture(`images/${imagePath}`, 'binary').then(fileContent => {
          const formData = new FormData();
          formData.append('file', new Blob([fileContent]), imagePath);
          return cy.request({
              method: 'POST',
              url: baseUrl + `/${petId}/uploadImage`,
              headers: {
                  'Content-Type': 'multipart/form-data',
              },
              body: formData,
              encoding: 'binary',
              failOnStatusCode: false
          });
      });
    }

  
}
  
 export const petApi = new PetApi();
  