import { useRef } from "react";

interface SelectRoomPropsInterface {
  setRoomId: Function;
  setName: Function;
}

const SelectRoom = ({ setRoomId, setName }: SelectRoomPropsInterface) => {
  const roomIdInputRef = useRef<HTMLInputElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (
      roomIdInputRef.current?.value !== "" &&
      nameInputRef.current?.value !== ""
    ) {
      setRoomId(roomIdInputRef.current?.value);
      setName(nameInputRef.current?.value);
    }
  };

  return (
    <div className="room">
      <div className="room__container">
        <form onSubmit={handleSubmit}>
          <h3 className="room__heading">Chat With ActiveMQ</h3>
          <input
            className="room__input"
            placeholder="Enter Name"
            type="text"
            ref={nameInputRef}
          />
          <input
            className="room__input"
            placeholder="Enter room id"
            type="number"
            ref={roomIdInputRef}
          />
          <input className="room__button" type="submit" value="Enter" />
          <p className="room__note">
            If you do not have a room id, just create your own
          </p>
        </form>
      </div>
    </div>
  );
};

export default SelectRoom;
