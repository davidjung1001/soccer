import TestComponent from "../../../components/TestComponent";

const dribblingDrills = [
  { title: "Cone Dribbling", description: "Enhance close control using cone-based drills.", link: "/individual-training/dribbling/cone-dribbling" },
  { title: "Speed Dribble", description: "Increase acceleration while keeping the ball close.", link: "/individual-training/dribbling/speed-dribble" },
];

const Dribbling = () => {
  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold">Dribbling Techniques</h1>
      <p className="mt-4 text-gray-600">Click a drill below to start training.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {dribblingDrills.map((drill, index) => (
          <TestComponent key={index} {...drill} />
        ))}
      </div>
    </div>
  );
};

export default Dribbling;