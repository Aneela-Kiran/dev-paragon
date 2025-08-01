const Button = ({ title, Icon }) => {
  return (
    <div>
      <a
        href="#"
        className="inline-flex items-center gap-1 bg-[#2374AB] text-white font-bold px-4 py-2 rounded-xl shadow-[0_0_20px_rgba(35,116,171,0.6)]"
      >
        {title}
        {Icon && <Icon className="text-white text-2xl w-8" />}
      </a>
    </div>
  );
};

export default Button;
