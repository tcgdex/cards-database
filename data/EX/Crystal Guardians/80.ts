import { Card } from '../../../interfaces'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		en: "Memory Berry",
		fr: "Baie de mémoire"
	},

	illustrator: "Shizurow",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Tool",

	effect: {
		fr: "Attachez Baie de mémoire à 1 de vos Pokémon qui ne possède pas déjà d'Outil Pokémon. Si ce Pokémon est mis K.O, défaussez cette carte.\n\nLe Pokémon auquel cette carte est attachée peut utiliser n'importe quelle attaque de sa carte Pokémon de base ou de sa carte Évolution de Niveau 1. (Vous devez toujours payer le Coût en Énergie de cette attaque.) Si ce Pokémon attaque, défaussez cette carte à la fin du tour."
	}
}

export default card
