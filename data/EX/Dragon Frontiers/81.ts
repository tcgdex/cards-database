import { Card } from '../../../interfaces'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		en: "Strength Charm",
		fr: "Fétiche de force"
	},

	illustrator: "Shizurow",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Tool",

	effect: {
		fr: "Attachez Fétiche de force à 1 de vos Pokémon qui ne possède pas déjà d'Outil Pokémon. Si ce Pokémon est mis K.O, défaussez cette carte.\n\nLorsqu'une attaque du Pokémon auquel Fétiche de force est attachée inflige des dégâts au Pokémon Actif, cette attaque inflige 10 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance). Défaussez Fétiche de force à la fin du tour au cours duquel ce Pokémon attaque."
	}
}

export default card
