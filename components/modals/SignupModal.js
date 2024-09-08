import { closeSignupModal, openSignupModal } from "@/redux/modalSlice";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";

export default function SignupModal() {
  const isOpen = useSelector((state) => state.modals.signupModalOpen);
  const dispatch = useDispatch();

  return (
    <>
      <button
        className="bg-white text-black w-[160px] rounded-full 
        h-[40px] hover:bg-[#cbd2d7]"
        onClick={() => dispatch(openSignupModal())}
      >
        Sign Up
      </button>
      <Modal
        open={isOpen}
        onClose={() => dispatch(closeSignupModal())}
        className="flex justify-center items-center"
      >
        <div className="w-[90%] h-fit bg-black text-white md:w-[560px] md:h-[600px]">
          Sign up over here
        </div>
      </Modal>
    </>
  );
}
