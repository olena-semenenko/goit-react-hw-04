import { useState } from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement('#root');

export const ImageModal = ({ isOpen, onRequestClose, onOpenButton, content }) => {
  //   const [modalIsOpen, setIsOpen] = useState(false);

  //   function openModal() {
  //     setIsOpen(true);
  //   }

  function afterOpenModal() {}

  //   function closeModal() {
  //     setIsOpen(false);
  //   }

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={onRequestClose}
        style={customStyles}
        contentLabel="Modal"
      >
        <div>
          <img src={content} alt="" width={400} />
        </div>
      </Modal>
    </div>
  );
};
