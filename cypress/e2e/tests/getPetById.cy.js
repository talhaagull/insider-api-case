import { petApi } from '../services/PetApi';
import { petData } from '../../fixtures/pets.json';


describe('Get Pet', () => {
  before(() => {
    petApi.createPet(petData);
  });

  it('should get a pet successfully', () => {
    petApi.getPetById(petData.id).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.id).to.equal(petData.id);
      expect(response.body.name).to.equal(petData.name);
      expect(response.body.category.id).to.equal(petData.category.id);
      expect(response.body.category.name).to.equal(petData.category.name);
      expect(response.body.status).to.equal(petData.status);
    });
  });

  it('should fail to get a pet with invalid ID', () => {
    petApi.getPetById(999999).then((response) => {
      expect(response.status).to.eq(404);
    });
  });
  
});
