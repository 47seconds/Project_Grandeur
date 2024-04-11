const PlaceModel = require('../model/Place-model');
const CityModel = require('../model/City-model');

const Place = PlaceModel.Place;
const City = CityModel.City;


// Will return JSON of all city names for dropdown menu in frontend
exports.getCities = async (req, res) => {
    try{
        const cities = await City.find();
        res.status(200).json(cities);
    } catch (error) {
        res.status(404).json(error);
    }
}

// will return JSON of all places in the City
exports.getCityPlaces = async (req, res) => {
    try{
        const city = req.param.city;
        const places = Place.find({City:city});
        if(!places){
            res.status(404).send("City not found");
        } else {
            res.status(200).json(places);
        }
    } catch (error) {
        res.status(404).json(error);
    }
}
