import TestComponent from "../../components/TestComponent";

const individualTrainingSections = [
  { title: "Ball Control", description: "Master tight ball control techniques.", link: "/individual-training/ball-control" },
  { title: "Dribbling", description: "Improve ball control and agility.", link: "/individual-training/dribbling" },
];

const IndividualTraining = () => {
  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold">Individual Training Modules</h1>
      <p className="mt-4 text-gray-600">Select a drill to begin training.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {individualTrainingSections.map((section, index) => (
          <TestComponent key={index} {...section} />
        ))}
      </div>
    </div>
  );
};

export default IndividualTraining;
