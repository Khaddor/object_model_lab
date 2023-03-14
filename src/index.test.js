const fs = require('fs').promises;

import { version } from '.';
import { TEMPERATURE, HUMIDITY, LIGHT, SWITCH, DOOR, TimeSeries, Data, Datum, Sensor } from './index.js';

let data;
beforeAll(async () => {
  data = await fs.readFile('./resources/sensors_data.json', {
    encoding: 'utf8',
  });
  data = JSON.parse(data);
});

describe('Sensor model tests', () => {
  describe('Dummy tests', () => {
    test('data is loaded with 3 elements', () => {
      expect(data.length).toBe(3);
    });
    test('version number from the model', () => {
      expect(version()).toBe('1.0.0');
    });
  });
  /* TODO: Écrire ici la suite de tests pour le modèle objet.*/


  // Define a test suite for the Sensor class and its subclasses
  describe('Sensor', () => {
    // Define a test for the constructor
    test('constructor sets properties correctly', () => {
      // Create a new temperature sensor with some data
      const tempSensor = new TEMPERATURE('temp1', 'Temperature Sensor 1', { values: [20, 22, 24], labels: ['10:00', '10:05', '10:10'] });

      // Check that the properties are set correctly
      expect(tempSensor.id).toBe('temp1');
      expect(tempSensor.name).toBe('Temperature Sensor 1');
      expect(tempSensor.data.values).toEqual([20, 22, 24]);
      expect(tempSensor.data.labels).toEqual(['10:00', '10:05', '10:10']);

      // Create a new humidity sensor with a single value
      const humidSensor = new HUMIDITY('humid1', 'Humidity Sensor 1', { value: 50 });

      // Check that the properties are set correctly
      expect(humidSensor.id).toBe('humid1');
      expect(humidSensor.name).toBe('Humidity Sensor 1');
      expect(humidSensor.data.value).toBe(50);
    });

    // Define tests for the methods to set and get the id and name properties
    test('setId and getId methods work correctly', () => {
      const lightSensor = new LIGHT('light1', 'Light Sensor 1', { value: true });

      // Set the id and check that it is set correctly
      lightSensor.setId('newId');
      expect(lightSensor.getId()).toBe('newId');
    });

    test('setName and getName methods work correctly', () => {
      const doorSensor = new DOOR('door1', 'Door Sensor 1', { value: 'open' });

      // Set the name and check that it is set correctly
      doorSensor.setName('New Name');
      expect(doorSensor.getName()).toBe('New Name');
    });
  });

  // Define a separate test suite for the TimeSeries and Datum classes
  describe('Data', () => {
    test('TimeSeries stores values and labels correctly', () => {
      const ts = new TimeSeries([1, 2, 3], ['A', 'B', 'C']);
      expect(ts.getValues()).toEqual([1, 2, 3]);
      expect(ts.getLabels()).toEqual(['A', 'B', 'C']);
    });

    test('Datum stores value correctly', () => {
      const d = new Datum(42);
      expect(d.getValue()).toBe(42);
    });
  });



  //
});
