import { Card } from '../../../interfaces'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		en: "Dragonair",
		fr: "Draco",
	},
	illustrator: "Mizue",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		148,
	],
	hp: 80,
	types: [
		"Dragon",
	],
	evolveFrom: {
		en: "Dratini",
		fr: "Minidraco",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Shed Skin",
				fr: "Mue",
			},
			effect: {
				en: "Heal 30 damage from this Pokémon.",
				fr: "Soignez 30 dégâts à ce Pokémon.",
			},

		},
		{
			cost: [
				"Grass",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Slam",
				fr: "Souplesse",
			},
			effect: {
				en: "Flip 2 coins. This attack does 60 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 60 dégâts multipliés par le nombre de côtés face.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
