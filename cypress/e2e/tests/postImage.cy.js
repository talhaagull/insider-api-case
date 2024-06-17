import { petApi } from '../services/PetApi';
import { petData, invalidPetData } from '../../fixtures/pets.json';


describe('Post Pet Image', () => {
  const petId = petData.id;
  const invalidPetId = invalidPetData.id;
  const imagePath = 'pet.jpg';

  before(() => {
    petApi.createPet(petData);
  });

  it('should successfully upload an image', () => {
    petApi.postImage(petId, imagePath).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it('should fail to upload an image with invalid pet ID', () => {
    petApi.postImage(invalidPetId, imagePath).then((response) => {
      expect(response.status).to.eq(404);
    });
  });

});
