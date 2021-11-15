import { Card } from '../../../interfaces'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		en: "Crystal Shard",
		fr: "Écharde de cristal"
	},

	illustrator: "Takumi Akabane",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Tool",

	effect: {
		fr: "Attachez Écharde de cristal à 1 de vos Pokémon qui ne possède pas déjà d'Outil Pokémon. Si ce Pokémon est mis K.O, défaussez cette carte.\n\nTant qu'Écharde de cristal est attachée à un Pokémon, ce Pokémon est de type . S'il attaque, défaussez cette carte à la fin du tour."
	}
}

export default card
