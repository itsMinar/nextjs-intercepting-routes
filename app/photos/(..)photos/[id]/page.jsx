import Modal from '@/components/Modal';
import PhotoCard from '@/components/PhotoCard';
import photos from '@/data/photos';

export default function PhotoModalPage({ params: { id } }) {
  const photo = photos.find((p) => p.id === id);

  return (
    <Modal>
      <PhotoCard photo={photo} />
    </Modal>
  );
}
