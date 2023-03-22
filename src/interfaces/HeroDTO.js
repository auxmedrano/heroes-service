class HeroDTO{
    alt_img;
    superhero;
    publisher;
    alter_ego;
    first_appearance;
    characters;

    constructor(data){
    this.alt_img = data.alt_img;
    this.superhero = data.superhero;
    this.publisher = data.publisher;
    this.alter_ego = data.alter_ego;
    this.first_appearance = data.first_appearance;
    this.characters = data.characters;
    }
}