function Input({ required, type, placeholder, value, handleOnKeyDown }) {
  return (
    <input
      {...value}
      placeholder={placeholder}
      type={type}
      min={1}
      required={required}
      className="w-full px-[20px] py-[10px] rounded-md"
    />
  );
}

export default Input;
