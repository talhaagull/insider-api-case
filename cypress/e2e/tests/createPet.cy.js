import { petApi } from '../services/PetApi';
import { petData, invalidPetData } from '../../fixtures/pets.json';

describe('Create Pet', () => {
  it('should create a pet successfully', () => {
    petApi.createPet(petData).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.id).to.equal(petData.id);
      expect(response.body.name).to.equal(petData.name);
      expect(response.body.category.id).to.equal(petData.category.id);
      expect(response.body.category.name).to.equal(petData.category.name);
      expect(response.body.status).to.equal(petData.status);
    });
  });

  it('should fail to create a pet with invalid data', () => {
    petApi.createPet(invalidPetData).then((response) => {
      expect(response.status).to.eq(500);
    });
  });

});
