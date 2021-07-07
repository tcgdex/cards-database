import { Card } from '../../../interfaces'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		en: "Exeggutor",
		fr: "Noadkoko",
	},
	illustrator: "Shin Nagasawa",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		103,
	],
	hp: 120,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Exeggcute",
		fr: "Noeunoeuf",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Shake It Off",
				fr: "Bon Débarras",
			},
			effect: {
				en: "This attack does 20 damage times the number of Colorless Pokémon your opponent has in play.",
				fr: "Cette attaque inflige 20 dégâts multipliés par le nombre de Pokémon Colorless que votre adversaire a en jeu.",
			},
			damage: "20×",

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Seed Bomb",
				fr: "Canon Graine",
			},

			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
