import React, { useState } from 'react';

const agenciesData = [
  {
    "id": 1,
    "logoLink": "https://example.com/agency1-logo.png",
    "name": "Fire Department of Mumbai",
    "activePersonnel": 120,
    "location": "Mumbai",
    "locationMapLink": "https://maps.google.com/?q=19.075983,72.877655",
    "contact": {
      "phoneNumber": "+91 1234567890",
      "email": "mumbai.fire@example.com"
    }
  },
  {
    "id": 2,
    "logoLink": "https://example.com/agency2-logo.png",
    "name": "Delhi Police Department",
    "activePersonnel": 180,
    "location": "Delhi",
    "locationMapLink": "https://maps.google.com/?q=28.6139,77.2295",
    "contact": {
      "phoneNumber": "+91 9876543210",
      "email": "delhi.police@example.com"
    }
  },
  {
    "id": 3,
    "logoLink": "https://example.com/agency3-logo.png",
    "name": "Red Cross Society of Bangalore",
    "activePersonnel": 220,
    "location": "Bangalore",
    "locationMapLink": "https://maps.google.com/?q=12.9716,77.5946",
    "contact": {
      "phoneNumber": "+91 7890123456",
      "email": "bangalore.redcross@example.com"
    }
  },
  {
    "id": 4,
    "logoLink": "https://example.com/agency4-logo.png",
    "name": "Coast Guard of Chennai",
    "activePersonnel": 150,
    "location": "Chennai",
    "locationMapLink": "https://maps.google.com/?q=13.0827,80.2707",
    "contact": {
      "phoneNumber": "+91 9876543210",
      "email": "chennai.coastguard@example.com"
    }
  },
  {
    "id": 5,
    "logoLink": "https://example.com/agency5-logo.png",
    "name": "Medical Rescue of Kolkata",
    "activePersonnel": 90,
    "location": "Kolkata",
    "locationMapLink": "https://maps.google.com/?q=22.5726,88.3639",
    "contact": {
      "phoneNumber": "+91 1234567890",
      "email": "kolkata.medical@example.com"
    }
  },
  {
    "id": 6,
    "logoLink": "https://example.com/agency6-logo.png",
    "name": "Search and Rescue Team of Pune",
    "activePersonnel": 75,
    "location": "Pune",
    "locationMapLink": "https://maps.google.com/?q=18.5204,73.8567",
    "contact": {
      "phoneNumber": "+91 7890123456",
      "email": "pune.searchrescue@example.com"
    }
  },
  {
    "id": 7,
    "logoLink": "https://example.com/agency7-logo.png",
    "name": "Fire Department of Hyderabad",
    "activePersonnel": 110,
    "location": "Hyderabad",
    "locationMapLink": "https://maps.google.com/?q=17.3850,78.4867",
    "contact": {
      "phoneNumber": "+91 9876543210",
      "email": "hyderabad.fire@example.com"
    }
  },
  {
    "id": 8,
    "logoLink": "https://example.com/agency8-logo.png",
    "name": "Emergency Response Team of Ahmedabad",
    "activePersonnel": 60,
    "location": "Ahmedabad",
    "locationMapLink": "https://maps.google.com/?q=23.0225,72.5714",
    "contact": {
      "phoneNumber": "+91 1234567890",
      "email": "ahmedabad.emergency@example.com"
    }
  },
  {
    "id": 9,
    "logoLink": "https://example.com/agency9-logo.png",
    "name": "Police Department of Jaipur",
    "activePersonnel": 140,
    "location": "Jaipur",
    "locationMapLink": "https://maps.google.com/?q=26.9124,75.7873",
    "contact": {
      "phoneNumber": "+91 7890123456",
      "email": "jaipur.police@example.com"
    }
  },
  {
    "id": 10,
    "logoLink": "https://example.com/agency10-logo.png",
    "name": "Mountain Rescue Team of Shimla",
    "activePersonnel": 45,
    "location": "Shimla",
    "locationMapLink": "https://maps.google.com/?q=31.1048,77.2674",
    "contact": {
      "phoneNumber": "+91 9876543210",
      "email": "shimla.mountainrescue@example.com"
    }
  },
  {
    "id": 11,
    "logoLink": "https://example.com/agency11-logo.png",
    "name": "Marine Rescue Team of Goa",
    "activePersonnel": 65,
    "location": "Goa",
    "locationMapLink": "https://maps.google.com/?q=15.2993,74.1240",
    "contact": {
      "phoneNumber": "+91 1234567890",
      "email": "goa.marinerescue@example.com"
    }
  },
  {
    "id": 12,
    "logoLink": "https://example.com/agency12-logo.png",
    "name": "Ambulance Services of Lucknow",
    "activePersonnel": 95,
    "location": "Lucknow",
    "locationMapLink": "https://maps.google.com/?q=26.8467,80.9462",
    "contact": {
      "phoneNumber": "+91 7890123456",
      "email": "lucknow.ambulance@example.com"
    }
  },
  {
    "id": 13,
    "logoLink": "https://example.com/agency13-logo.png",
    "name": "Disaster Relief Team of Bhopal",
    "activePersonnel": 75,
    "location": "Bhopal",
    "locationMapLink": "https://maps.google.com/?q=23.2599,77.4126",
    "contact": {
      "phoneNumber": "+91 9876543210",
      "email": "bhopal.disasterrelief@example.com"
    }
  },
  {
    "id": 14,
    "logoLink": "https://example.com/agency14-logo.png",
    "name": "Emergency Medical Response of Chandigarh",
    "activePersonnel": 85,
    "location": "Chandigarh",
    "locationMapLink": "https://maps.google.com/?q=30.7333,76.7794",
    "contact": {
      "phoneNumber": "+91 1234567890",
      "email": "chandigarh.emergency@example.com"
    }
  },
  {
    "id": 15,
    "logoLink": "https://example.com/agency15-logo.png",
    "name": "Search and Rescue Team of Indore",
    "activePersonnel": 55,
    "location": "Indore",
    "locationMapLink": "https://maps.google.com/?q=22.7196,75.8577",
    "contact": {
      "phoneNumber": "+91 7890123456",
      "email": "indore.searchrescue@example.com"
    }
  },
  {
    "id": 16,
    "logoLink": "https://example.com/agency16-logo.png",
    "name": "Fire Department of Nagpur",
    "activePersonnel": 130,
    "location": "Nagpur",
    "locationMapLink": "https://maps.google.com/?q=21.1458,79.0882",
    "contact": {
      "phoneNumber": "+91 9876543210",
      "email": "nagpur.fire@example.com"
    }
  },
  {
    "id": 17,
    "logoLink": "https://example.com/agency17-logo.png",
    "name": "Mountain Rescue Team of Darjeeling",
    "activePersonnel": 50,
    "location": "Darjeeling",
    "locationMapLink": "https://maps.google.com/?q=27.0360,88.2627",
    "contact": {
      "phoneNumber": "+91 1234567890",
      "email": "darjeeling.mountainrescue@example.com"
    }
  },
  {
    "id": 18,
    "logoLink": "https://example.com/agency18-logo.png",
    "name": "Marine Rescue Team of Kochi",
    "activePersonnel": 75,
    "location": "Kochi",
    "locationMapLink": "https://maps.google.com/?q=9.9312,76.2673",
    "contact": {
      "phoneNumber": "+91 7890123456",
      "email": "kochi.marinerescue@example.com"
    }
  },
  {
    "id": 19,
    "logoLink": "https://example.com/agency19-logo.png",
    "name": "Ambulance Services of Guwahati",
    "activePersonnel": 65,
    "location": "Guwahati",
    "locationMapLink": "https://maps.google.com/?q=26.1445,91.7362",
    "contact": {
      "phoneNumber": "+91 9876543210",
      "email": "guwahati.ambulance@example.com"
    }
  },
  {
    "id": 20,
    "logoLink": "https://example.com/agency20-logo.png",
    "name": "Disaster Relief Team of Patna",
    "activePersonnel": 85,
    "location": "Patna",
    "locationMapLink": "https://maps.google.com/?q=25.5941,85.1376",
    "contact": {
      "phoneNumber": "+91 1234567890",
      "email": "patna.disasterrelief@example.com"
    }
  },
  {
    "id": 21,
    "logoLink": "https://example.com/agency21-logo.png",
    "name": "Emergency Medical Response of Raipur",
    "activePersonnel": 45,
    "location": "Raipur",
    "locationMapLink": "https://maps.google.com/?q=21.2514,81.6296",
    "contact": {
      "phoneNumber": "+91 7890123456",
      "email": "raipur.emergency@example.com"
    }
  },
  {
    "id": 22,
    "logoLink": "https://example.com/agency22-logo.png",
    "name": "Search and Rescue Team of Agra",
    "activePersonnel": 70,
    "location": "Agra",
    "locationMapLink": "https://maps.google.com/?q=27.1767,78.0081",
    "contact": {
      "phoneNumber": "+91 9876543210",
      "email": "agra.searchrescue@example.com"
    }
  },
  {
    "id": 23,
    "logoLink": "https://example.com/agency23-logo.png",
    "name": "Fire Department of Coimbatore",
    "activePersonnel": 110,
    "location": "Coimbatore",
    "locationMapLink": "https://maps.google.com/?q=11.0168,76.9558",
    "contact": {
      "phoneNumber": "+91 1234567890",
      "email": "coimbatore.fire@example.com"
    }
  },
  {
    "id": 24,
    "logoLink": "https://example.com/agency24-logo.png",
    "name": "Mountain Rescue Team of Manali",
    "activePersonnel": 40,
    "location": "Manali",
    "locationMapLink": "https://maps.google.com/?q=32.2396,77.1887",
    "contact": {
      "phoneNumber": "+91 7890123456",
      "email": "manali.mountainrescue@example.com"
    }
  },
  {
    "id": 25,
    "logoLink": "https://example.com/agency25-logo.png",
    "name": "Marine Rescue Team of Vizag",
    "activePersonnel": 90,
    "location": "Vizag",
    "locationMapLink": "https://maps.google.com/?q=17.6868,83.2185",
    "contact": {
      "phoneNumber": "+91 9876543210",
      "email": "vizag.marinerescue@example.com"
    }
  },
  {
    "id": 26,
    "logoLink": "https://example.com/agency26-logo.png",
    "name": "Ambulance Services of Bhubaneswar",
    "activePersonnel": 55,
    "location": "Bhubaneswar",
    "locationMapLink": "https://maps.google.com/?q=20.2961,85.8245",
    "contact": {
      "phoneNumber": "+91 1234567890",
      "email": "bhubaneswar.ambulance@example.com"
    }
  },
  {
    "id": 27,
    "logoLink": "https://example.com/agency27-logo.png",
    "name": "Police Department of Noida",
    "activePersonnel": 135,
    "location": "Noida",
    "locationMapLink": "https://maps.google.com/?q=28.5355,77.3910",
    "contact": {
      "phoneNumber": "+91 7890123456",
      "email": "noida.police@example.com"
    }
  },
  {
    "id": 28,
    "logoLink": "https://example.com/agency28-logo.png",
    "name": "Mountain Rescue Team of Mussoorie",
    "activePersonnel": 40,
    "location": "Mussoorie",
    "locationMapLink": "https://maps.google.com/?q=30.4591,78.0665",
    "contact": {
      "phoneNumber": "+91 9876543210",
      "email": "mussoorie.mountainrescue@example.com"
    }
  },
  {
    "id": 29,
    "logoLink": "https://example.com/agency29-logo.png",
    "name": "Marine Rescue Team of Puducherry",
    "activePersonnel": 75,
    "location": "Puducherry",
    "locationMapLink": "https://maps.google.com/?q=11.9139,79.8145",
    "contact": {
      "phoneNumber": "+91 1234567890",
      "email": "puducherry.marinerescue@example.com"
    }
  },
  {
    "id": 30,
    "logoLink": "https://example.com/agency30-logo.png",
    "name": "Ambulance Services of Dehradun",
    "activePersonnel": 65,
    "location": "Dehradun",
    "locationMapLink": "https://maps.google.com/?q=30.3165,78.0322",
    "contact": {
      "phoneNumber": "+91 7890123456",
      "email": "dehradun.ambulance@example.com"
    }
  },
  {
    "id": 31,
    "logoLink": "https://example.com/agency31-logo.png",
    "name": "Fire Department of Kanpur",
    "activePersonnel": 120,
    "location": "Kanpur",
    "locationMapLink": "https://maps.google.com/?q=26.4499,80.3319",
    "contact": {
      "phoneNumber": "+91 9876543210",
      "email": "kanpur.fire@example.com"
    }
  },
  {
    "id": 32,
    "logoLink": "https://example.com/agency32-logo.png",
    "name": "Mountain Rescue Team of Ooty",
    "activePersonnel": 45,
    "location": "Ooty",
    "locationMapLink": "https://maps.google.com/?q=11.4118,76.6957",
    "contact": {
      "phoneNumber": "+91 1234567890",
      "email": "ooty.mountainrescue@example.com"
    }
  },
  {
    "id": 33,
    "logoLink": "https://example.com/agency33-logo.png",
    "name": "Marine Rescue Team of Mangalore",
    "activePersonnel": 90,
    "location": "Mangalore",
    "locationMapLink": "https://maps.google.com/?q=12.9141,74.8550",
    "contact": {
      "phoneNumber": "+91 7890123456",
      "email": "mangalore.marinerescue@example.com"
    }
  },
  {
    "id": 34,
    "logoLink": "https://example.com/agency34-logo.png",
    "name": "Ambulance Services of Ranchi",
    "activePersonnel": 70,
    "location": "Ranchi",
    "locationMapLink": "https://maps.google.com/?q=23.3441,85.3096",
    "contact": {
      "phoneNumber": "+91 9876543210",
      "email": "ranchi.ambulance@example.com"
    }
  },
  {
    "id": 35,
    "logoLink": "https://example.com/agency35-logo.png",
    "name": "Police Department of Gurgaon",
    "activePersonnel": 130,
    "location": "Gurgaon",
    "locationMapLink": "https://maps.google.com/?q=28.4595,77.0266",
    "contact": {
      "phoneNumber": "+91 1234567890",
      "email": "gurgaon.police@example.com"
    }
  },
  {
    "id": 36,
    "logoLink": "https://example.com/agency36-logo.png",
    "name": "Mountain Rescue Team of Nainital",
    "activePersonnel": 60,
    "location": "Nainital",
    "locationMapLink": "https://maps.google.com/?q=29.3805,79.4637",
    "contact": {
      "phoneNumber": "+91 7890123456",
      "email": "nainital.mountainrescue@example.com"
    }
  },
  {
    "id": 37,
    "logoLink": "https://example.com/agency37-logo.png",
    "name": "Marine Rescue Team of Kochi",
    "activePersonnel": 75,
    "location": "Kochi",
    "locationMapLink": "https://maps.google.com/?q=9.9312,76.2673",
    "contact": {
      "phoneNumber": "+91 9876543210",
      "email": "kochi.marinerescue@example.com"
    }
  },
  {
    "id": 38,
    "logoLink": "https://example.com/agency38-logo.png",
    "name": "Ambulance Services of Guwahati",
    "activePersonnel": 65,
    "location": "Guwahati",
    "locationMapLink": "https://maps.google.com/?q=26.1445,91.7362",
    "contact": {
      "phoneNumber": "+91 1234567890",
      "email": "guwahati.ambulance@example.com"
    }
  },
  {
    "id": 39,
    "logoLink": "https://example.com/agency39-logo.png",
    "name": "Disaster Relief Team of Patna",
    "activePersonnel": 85,
    "location": "Patna",
    "locationMapLink": "https://maps.google.com/?q=25.5941,85.1376",
    "contact": {
      "phoneNumber": "+91 7890123456",
      "email": "patna.disasterrelief@example.com"
    }
  },
  {
    "id": 40,
    "logoLink": "https://example.com/agency40-logo.png",
    "name": "Emergency Medical Response of Raipur",
    "activePersonnel": 45,
    "location": "Raipur",
    "locationMapLink": "https://maps.google.com/?q=21.2514,81.6296",
    "contact": {
      "phoneNumber": "+91 7890123456",
      "email": "raipur.emergency@example.com"
    }
  },
  {
    "id": 41,
    "logoLink": "https://example.com/agency41-logo.png",
    "name": "Search and Rescue Team of Agra",
    "activePersonnel": 70,
    "location": "Agra",
    "locationMapLink": "https://maps.google.com/?q=27.1767,78.0081",
    "contact": {
      "phoneNumber": "+91 9876543210",
      "email": "agra.searchrescue@example.com"
    }
  },
  {
    "id": 42,
    "logoLink": "https://example.com/agency42-logo.png",
    "name": "Fire Department of Coimbatore",
    "activePersonnel": 110,
    "location": "Coimbatore",
    "locationMapLink": "https://maps.google.com/?q=11.0168,76.9558",
    "contact": {
      "phoneNumber": "+91 1234567890",
      "email": "coimbatore.fire@example.com"
    }
  },
  {
    "id": 43,
    "logoLink": "https://example.com/agency43-logo.png",
    "name": "Mountain Rescue Team of Manali",
    "activePersonnel": 40,
    "location": "Manali",
    "locationMapLink": "https://maps.google.com/?q=32.2396,77.1887",
    "contact": {
      "phoneNumber": "+91 7890123456",
      "email": "manali.mountainrescue@example.com"
    }
  },
  {
    "id": 44,
    "logoLink": "https://example.com/agency44-logo.png",
    "name": "Marine Rescue Team of Vizag",
    "activePersonnel": 90,
    "location": "Vizag",
    "locationMapLink": "https://maps.google.com/?q=17.6868,83.2185",
    "contact": {
      "phoneNumber": "+91 9876543210",
      "email": "vizag.marinerescue@example.com"
    }
  },
  {
    "id": 45,
    "logoLink": "https://example.com/agency45-logo.png",
    "name": "Ambulance Services of Bhubaneswar",
    "activePersonnel": 55,
    "location": "Bhubaneswar",
    "locationMapLink": "https://maps.google.com/?q=20.2961,85.8245",
    "contact": {
      "phoneNumber": "+91 1234567890",
      "email": "bhubaneswar.ambulance@example.com"
    }
  },
  {
    "id": 46,
    "logoLink": "https://example.com/agency46-logo.png",
    "name": "Police Department of Noida",
    "activePersonnel": 135,
    "location": "Noida",
    "locationMapLink": "https://maps.google.com/?q=28.5355,77.3910",
    "contact": {
      "phoneNumber": "+91 7890123456",
      "email": "noida.police@example.com"
    }
  },
  {
    "id": 47,
    "logoLink": "https://example.com/agency47-logo.png",
    "name": "Mountain Rescue Team of Mussoorie",
    "activePersonnel": 40,
    "location": "Mussoorie",
    "locationMapLink": "https://maps.google.com/?q=30.4591,78.0665",
    "contact": {
      "phoneNumber": "+91 9876543210",
      "email": "mussoorie.mountainrescue@example.com"
    }
  },
  {
    "id": 48,
    "logoLink": "https://example.com/agency48-logo.png",
    "name": "Marine Rescue Team of Puducherry",
    "activePersonnel": 75,
    "location": "Puducherry",
    "locationMapLink": "https://maps.google.com/?q=11.9139,79.8145",
    "contact": {
      "phoneNumber": "+91 1234567890",
      "email": "puducherry.marinerescue@example.com"
    }
  },
  {
    "id": 49,
    "logoLink": "https://example.com/agency49-logo.png",
    "name": "Ambulance Services of Dehradun",
    "activePersonnel": 65,
    "location": "Dehradun",
    "locationMapLink": "https://maps.google.com/?q=30.3165,78.0322",
    "contact": {
      "phoneNumber": "+91 7890123456",
      "email": "dehradun.ambulance@example.com"
    }
  },
  {
    "id": 50,
    "logoLink": "https://example.com/agency50-logo.png",
    "name": "Fire Department of Kanpur",
    "activePersonnel": 120,
    "location": "Kanpur",
    "locationMapLink": "https://maps.google.com/?q=26.4499,80.3319",
    "contact": {
      "phoneNumber": "+91 9876543210",
      "email": "kanpur.fire@example.com"
    }
  }
]

;

function AgencyList() {
  const [filters, setFilters] = useState({
    search: '',
    location: 'All',
    minActivePersonnel: 0,
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const filteredAgencies = agenciesData.filter((agency) => {
    const { search, location, minActivePersonnel } = filters;
    const agencyName = agency.name.toLowerCase();

    // Apply filters
    const nameMatch = agencyName.includes(search.toLowerCase());
    const locationMatch =
      location === 'All' || agency.location.toLowerCase() === location.toLowerCase();
    const activePersonnelMatch =
      agency.activePersonnel >= minActivePersonnel;

    return nameMatch && locationMatch && activePersonnelMatch;
  });

  return (
    <div className="p-4">
      <div className="mb-4 flex space-x-4">
        {/* Search Input */}
        <input
          type="text"
          name="search"
          placeholder="Search by agency name"
          className="w-1/4 p-2 border rounded-md"
          value={filters.search}
          onChange={handleFilterChange}
        />

        {/* Location Filter */}
        <select
          name="location"
          className="w-1/4 p-2 border rounded-md"
          value={filters.location}
          onChange={handleFilterChange}
        >
          <option value="All">All Locations</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Delhi">Delhi</option>
          <option value="Bangalore">Bangalore</option>
          <option value="Chennai">Chennai</option>
          <option value="Kolkata">Kolkata</option>
          <option value="Pune">Pune</option>
          <option value="Hyderabad">Hyderabad</option>
          <option value="Ahmedabad">Ahmedabad</option>
          <option value="Jaipur">Jaipur</option>
          <option value="Shimla">Shimla</option>
          <option value="Goa">Goa</option>
          <option value="Lucknow">Lucknow</option>
          <option value="Bhopal">Bhopal</option>
          <option value="Chandigarh">Chandigarh</option>
          <option value="Indore">Indore</option>
          <option value="Nagpur">Nagpur</option>
          <option value="Darjeeling">Darjeeling</option>
          <option value="Kochi">Kochi</option>
          <option value="Guwahati">Guwahati</option>
          <option value="Patna">Patna</option>
          <option value="Raipur">Raipur</option>
          <option value="Agra">Agra</option>
          <option value="Coimbatore">Coimbatore</option>
          <option value="Manali">Manali</option>
          <option value="Vizag">Vizag</option>
          <option value="Bhubaneswar">Bhubaneswar</option>
          <option value="Noida">Noida</option>
          <option value="Mussoorie">Mussoorie</option>
          <option value="Puducherry">Puducherry</option>
          <option value="Dehradun">Dehradun</option>
          <option value="Kanpur">Kanpur</option>

          {/* Add more location options here */}
        </select>

        {/* Active Personnel Filter */}
        <input
          type="number"
          name="minActivePersonnel"
          placeholder="Min Active Personnel"
          className="w-1/4 p-2 border rounded-md"
          value={filters.minActivePersonnel}
          onChange={handleFilterChange}
        />
      </div>

      {/* Agency Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Logo
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Location
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Active Personnel
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Contact
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredAgencies.map((agency) => (
              <tr key={agency.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <img
                    src={agency.logoLink}
                    alt={agency.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {agency.name}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{agency.location}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">
                    {agency.activePersonnel}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-blue-500">
                    <a href={`mailto:${agency.contact.email}`}>
                      {agency.contact.email}
                    </a>
                  </div>
                  <div className="text-sm text-gray-500">
                    {agency.contact.phoneNumber}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AgencyList;
