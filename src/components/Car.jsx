import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';

const CarRentalPage = () => {
    const [availableCars, setAvailableCars] = useState([
      { id: 1, brand: 'Toyota', model: 'Tundra TRD Pro', year: 2024, dailyRate: 150 },
      { id: 2, brand: 'Nissan', model: 'GTR Nismo', year: 2018, dailyRate: 190},
      { id: 3, brand: 'Porsche', model: 'Taycan Turbo', year: 2020, dailyRate: 180 },
      { id: 4, brand: 'Dodge', model: 'Ram TRX', year: 2021, dailyRate: 150},
      { id: 5, brand: 'Toyota', model: 'Supra A91-CF', year: 2022, dailyRate: 110},
      { id: 6, brand: 'BMW', model: 'M4', year: 2016, dailyRate: 120},
      { id: 7, brand: 'Acura', model: 'NSX', year: 2019, dailyRate: 200},
      { id: 8, brand: 'Lexus', model: 'LFA', year: 2012, dailyRate: 200},
      { id: 9, brand: 'Dodge', model: 'Viper ACR', year: 2017, dailyRate: 120 },
      { id: 10, brand: 'Jeep', model: 'Wrangler Rubicon 392', year: 2024, dailyRate: 150 },
      { id: 11, brand: 'Porcshe', model: '911 GT3RS', year: 2023, dailyRate: 200},
      { id: 12, brand: 'Acura', model: 'Integra Type-R', year: 2001, dailyRate: 100 },
      { id: 13, brand: 'Lamborhini', model: 'Hurucan STO', year: 2024, dailyRate: 250},
      { id: 14, brand: 'Ferrari', model: 'SF90 Stradale', year: 2022, dailyRate: 300},
      { id: 15, brand: 'Aston', model: 'Martin DB11', year: 2023, dailyRate: 150},
    ]);
  
    const [selectedCar, setSelectedCar] = useState(null);
    const [userInformation, setUserInformation] = useState({
      name: '',
      phoneNumber: '',
      email: '',
      rentalStartDate: '',
      rentalEndDate: '',
    });
  
    const handleSelectCar = (car) => {
      setSelectedCar(car);
    };
  
    const handleUserInformationChange = (event) => {
      const { name, value } = event.target;
      setUserInformation((prevUserInformation) => ({
        ...prevUserInformation,
        [name]: value,
      }));
    };
  
    return (
        <div>
            {availableCars.map((car) => (
            <div key={car.id}>
                <p>{car.brand} {car.model}</p>
                <p>Year: {car.year}</p>
                <p>Daily Rate: {car.dailyRate}</p>
                <button onClick={() => handleSelectCar(car)}>Select Car</button>
            </div>
            ))};
        </div>
    );
}