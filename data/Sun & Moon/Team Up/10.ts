import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Shaymin ◇",
		fr: "Shaymin ",
	},
	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		492,
	],
	hp: 80,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Flower Storm",
				fr: "Règle pour les cartes  (Prisme Étoile)",
			},
			effect: {
				en: "This attack does 30 damage times the amount of basic Energy attached to all of your Pokémon.",
			},
			damage: 30,

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				fr: "Tempête de Fleurs",
			},
			effect: {
				fr: "Cette attaque inflige 30 dégâts multipliés par le nombre d’Énergies de base attachées à tous vos Pokémon.",
			},
			damage: "30×",

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],





}

export default card
