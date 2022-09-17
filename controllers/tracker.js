import TrackerData from '../models/tracker.js';

export const getStats = async (req, res, next) => {
    try {
        const stats = await TrackerData.find();

        res.status(200).json(stats);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createStats = async (req, res, next) => {
    const stat = req.body

    const newStat = new TrackerData(stat);
    try {

        await newStat.save();
        res.status(201).json(newStat);
    } catch (error) {
        res.status(409).json({message: error.message});
        
    }
}
