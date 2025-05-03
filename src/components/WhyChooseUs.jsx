import tickerIcon from "../assets/img/Iconsax.svg";

const Service_WhyChooseUs = [
  "Monitor school performance with analytics",
  "Support training for administration",
  "Teachers can communicate with parents and colleagues",
  "Monitor child performance and behavior",
  "View schedules, assignments and grades",
  "Improve academic outcomes with data-driven decision",
  "Manage school tasks efficiently",
  "Centralized oversight and configuration",
  "Track student progress effectively",
  "Access resources to support learning",
  "Access a calendar of school events",
  "Help in seeking academic assistance when needed",
  "Manage user accounts, roles, and permission within the institution",
  "Manage database, backups and data storage",
  "Customization options, integration and security protocols",
  "Transparent Communication",
];

const WhyChooseUs = () => {
  return (
    <div className="py-16 bg-white font-plus-jakarta-sans">
      <h1 className="text-center text-2xl font-semibold mb-10">
        Why Choose Us
      </h1>
      <div className="max-w-6xl mx-auto px-4">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8 text-[12px]">
          {Service_WhyChooseUs.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <img src={tickerIcon} alt="tick icon" className="w-5 h-5 mt-1" />
              <span className="text-gray-700 text-[12px] leading-6">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WhyChooseUs;
