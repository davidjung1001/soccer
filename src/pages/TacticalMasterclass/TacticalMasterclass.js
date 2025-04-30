import TestComponent from "../../components/TestComponent";

const tacticsMasterclassSections = [
  { title: "Formations", description: "Master tight ball control techniques.", link: "/tacticalmasterclass/formations" },
  { title: "Off Ball Movement", description: "Improve ball control and agility.", link: "/tacticalmasterclass/bypostion" },
];

const TacticalMasterclass = () => {
  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold">Become a Tactical Genius</h1>
      <p className="mt-4 text-gray-600">Select area of knowledge.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {tacticsMasterclassSections.map((section, index) => (
          <TestComponent key={index} {...section} />
        ))}
      </div>
    </div>
  );
};

export default TacticalMasterclass;