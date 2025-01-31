const SkillCom = (props) => {
  const { name, level, image } = props?.skilldta?.data;
  return (
    <div className="text-center m-4 p-4 w-[250px] hover:bg-gray-200 bg-gray-100 rounded-lg shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] ">
      <img className="w-[220px] h-[150px] p-4 bg-gray-200 rounded-lg shadow-md " src={image} alt="" />
      <h1 className="mt-4">{name}</h1>
      <h2 className="mt-1">{level}</h2>
    </div>
  );
};
export default SkillCom;
