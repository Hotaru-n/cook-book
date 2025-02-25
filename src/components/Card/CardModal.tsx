import { CloseOutlined } from "@ant-design/icons";

const CardModal = ({ onClose, children }) => {
  return (
    <>
      <div className="modal">
        <div className="modal-wrapper">
          <div className="modal__card-content">
            <div className="modal__close-button">
              <CloseOutlined
                onClick={onClose}
                type="button"
                style={{
                  fontSize: "30px",
                }}
              />
            </div>
            <div className="modal__content-wrapper">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardModal;
