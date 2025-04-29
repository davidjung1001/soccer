import TestComponent from "../../../../components/TestComponent";

const coneDribblingDrills = [
  { title: "Inside-Outside Dribble", description: "Improve foot control and agility.", link: "/individual-training/dribbling/cone-dribbling/inside-outside" },
  { title: "Speed Cone Weave", description: "Develop quick directional changes.", link: "/individual-training/dribbling/cone-dribbling/speed-weave" },
];

const ConeDribbling = () => {
  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold">Cone Dribbling Drills</h1>
      <p className="mt-4 text-gray-600">Select a drill to start training.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {coneDribblingDrills.map((drill, index) => (
          <TestComponent key={index} {...drill} />
        ))}
      </div>
    </div>
  );
};

export default ConeDribbling;