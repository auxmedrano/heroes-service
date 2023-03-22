import { Publisher } from "../models/Publisher.js";
import { Hero } from "../models/Hero.js";
export async function createPublisher(req, res) {
  try {
    const { name } = req.body;
    const newPublisher = await Publisher.create({
      name,
    });
    res.json(newPublisher);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function getPublishers(req, res) {
  try {
    const publishers = await Publisher.findAll();
    res.json(publishers);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function updatePublisher(req, res) {
  const { id } = req.params;
  try {
    const publisher = await Publisher.findOne({
      where: { id },
    });

    publisher.set(req.body);

    await publisher.save();

    res.json(publisher);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function deletePublisher(req, res) {
  const { id } = req.params;
  try {
    await Publisher.destroy({
      where: { id },
    });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function getPublisher(req, res) {
  const { id } = req.params;
  try {
    const publisher = await Publisher.findOne({
      where: { id },
    });
    res.json(publisher);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function getPublisherHeroes(req, res) {
  const { id } = req.params;
  try {
    const heroes = await Hero.findAll({
      // attributes: ["id", "projectId", "name", "done"],
      where: { publisherId: id },
    });
    res.json(heroes);
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
}