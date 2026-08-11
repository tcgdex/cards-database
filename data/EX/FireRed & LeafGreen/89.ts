import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "Energy Removal 2",
		fr: "Suppression d'Énergie 2",
		de: "Energie-Absauger 2"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Item",

	effect: {
		en: "Flip a coin. If heads, choose 1 Energy card attached to 1 of your opponent's Pokémon and discard it.",
		fr: "Lancez une pièce. Si c'est face, choisissez 1 carte Énergie attachée à 1 des Pokémon de votre adversaire et défaussez-la.",
		de: "Flip a coin. If heads, choose 1 Energy card attached to 1 of your opponent's Pokémon and discard it."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 276265,
				tcgplayer: 85222
			},
		},
		{
			type: "reverse",
			foil: "energy",
			thirdParty: {
				cardmarket: 276265,
				tcgplayer: 85222
			},
		},
		{
			type: "normal",
			stamp: ["curran-hill"],
			thirdParty: {
				cardmarket: 871540,
				tcgplayer: 477519
			},
		},
	],
}

export default card
