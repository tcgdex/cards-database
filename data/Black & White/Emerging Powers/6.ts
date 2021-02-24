import { Card } from '../../../interfaces'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		en: "Swadloon",
		fr: "Couverdure",
	},
	illustrator: "MAHOU",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		541,
	],
	hp: 70,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Sewaddle",
		fr: "Larveyette",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Grass Cocooning",
				fr: "Cocon Vert",
			},
			effect: {
				en: "Heal 40 damage from this Pokémon.",
				fr: "Soignez 40 dégâts à ce Pokémon.",
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Razor Leaf",
				fr: "Tranch'Herbe",
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
