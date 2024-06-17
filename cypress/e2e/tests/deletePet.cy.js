import { petApi } from '../services/PetApi';
import { petData } from '../../fixtures/pets.json';


describe('Delete Pet', () => {
  before(() => {
    petApi.createPet(petData);
  });

  it('should delete a pet successfully', () => {
    petApi.deletePet(petData.id).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it('should fail to delete a pet with invalid ID', () => {
    petApi.deletePet(999999).then((response) => {
      expect(response.status).to.eq(404);
    });
  });
});
