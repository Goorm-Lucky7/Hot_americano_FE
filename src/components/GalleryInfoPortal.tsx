import { galleryInfoStore } from '@/stores/modal';
import { createPortal } from 'react-dom';
import { GalleryInfo } from '@/pages/main/components';

const GalleryInfoPortal = () => {
  const { galleryInfoValue, close } = galleryInfoStore();
  const $portal_root = document.getElementById('gallery-info-portal');

  const handleClose = () => {
    close();
  };

  return (
    <>
      {$portal_root
        ? createPortal(
            <div style={{
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex:'10'
          }}>
              {galleryInfoValue.open && (
                <GalleryInfo close={handleClose} {...galleryInfoValue} />
              )}
            </div>,
            $portal_root,
          )
        : null}
    </>
  );
};

export default GalleryInfoPortal;