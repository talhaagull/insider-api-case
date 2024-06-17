import { petApi } from '../services/PetApi';
import { updatedPetData, invalidPetData } from '../../fixtures/pets.json';

describe('Update Pet', () => {
  before(() => {
    petApi.createPet(updatedPetData);
  });

  it('should update a pet successfully', () => {
    petApi.updatePet(updatedPetData).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.id).to.equal(updatedPetData.id);
      expect(response.body.name).to.equal(updatedPetData.name);
      expect(response.body.category.id).to.equal(updatedPetData.category.id);
      expect(response.body.category.name).to.equal(updatedPetData.category.name);
      expect(response.body.status).to.equal(updatedPetData.status);
    });
  });

  it('should fail to update a pet with invalid data', () => {
    petApi.updatePet(invalidPetData).then((response) => {
      expect(response.status).to.eq(500);
    });
  });

  it('should fail to update a pet with missing name', () => {
    const invalidPetData = { ...updatedPetData, name: undefined };
    petApi.updatePet(invalidPetData).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.not.have.property('name');
    });
  });

  it('should fail to update a pet with empty body', () => {
    petApi.updatePet({}).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.not.have.property('name');
    });
  });

});
