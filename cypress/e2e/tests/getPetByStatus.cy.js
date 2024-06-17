import { petApi } from '../services/PetApi';
import { petData, invalidPetData } from '../../fixtures/pets.json';


describe('Get Pet by Status', () => {
  before(() => {
    petApi.createPet(petData);
  });

  it('should successfully get pets by status', () => {
    const status = petData.status;
    petApi.getPetByStatus(status).then((response) => {
      expect(response.status).to.eq(200);
      cy.wrap(response.body).each((pet) => {
        expect(pet).to.have.property('status', status);
      });
    });
  });

  it('should return empty list for invalid status', () => {
    const status = invalidPetData.status;
    petApi.getPetByStatus(status).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an('array').that.is.empty;
    });
  });
});
