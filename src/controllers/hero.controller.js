import { Hero } from "../models/Hero.js";
import { Publisher } from "../models/Publisher.js";

export async function getHeroes(req, res) {
  try {
    const heroes = await Hero.findAll();
    res.json(heroes);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}


export async function createHero(req, res) {
  const { alt_img,
    superhero,
    publisherId,
    alter_ego,
    first_appearance,
    characters, } = req.body;
  try {
    let newHero = await Hero.create(
      {
        alt_img,
        superhero,
        publisherId,
        alter_ego,
        first_appearance,
        characters,
      }
    );
    return res.json(newHero);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
  res.json("received");
}
export async function bulkCreateHero(req, res) {
  const heroes = req.body.heroes;

  console.log("all the heroes", heroes);
  try {
    let newHeroes = await Hero.bulkCreate(heroes);
    return res.json(newHeroes);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
  res.json("received");
}

export async function getHero(req, res) {
  const { id } = req.params;
  try {
    const hero = await Hero.findOne({
      where: {
        id,
      },
    });
    if (!hero) {
      res.status(404).json({
        message: "Hero Not Found",
      });
    }
    res.json(hero);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export const updateHero = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      alt_img,
      superhero,
      publisherId,
      alter_ego,
      first_appearance,
      characters,
    } = req.body;

    const hero = await Hero.findByPk(id);
    hero.alt_img = alt_img;
    hero.superhero = superhero;
    hero.publisherId = publisherId;
    hero.alter_ego = alter_ego;
    hero.first_appearance = first_appearance;
    hero.characters = characters;
    await hero.save();

    res.json(hero);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export async function deleteHero(req, res) {
  const { id } = req.params;
  try {
    await Hero.destroy({
      where: {
        id,
      },
    });
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

}
