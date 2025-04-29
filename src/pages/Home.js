import TestComponent from "../components/TestComponent";

const Home = () => {
  const trainingCategories = [
    {
      title: "Rehab & Recovery",
      description: "Guided rehab programs for injury prevention and recovery.",
      link: "/rehab"
    },
    {
      title: "Individual Training",
      description: "Enhance dribbling, ball control, and explosiveness.",
      link: "/individual-training",
    },
    {
      title: "Team Drills",
      description: "Strategic team exercises to improve coordination and tactics.",
      link: "/team-drills",
    },
  ];

  return (
    <div className="p-6 text-center">
      <h1 className="text-4xl font-bold">Welcome to Soccer Training Hub</h1>
      <p className="mt-4 text-gray-600">Select a training category to get started.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {trainingCategories.map((category, index) => (
          <TestComponent key={index} {...category} />
        ))}
      </div>
    </div>
  );
};

export default Home;