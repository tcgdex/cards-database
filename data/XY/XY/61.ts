import { Card } from '../../../interfaces'
import Set from '../XY'

const card: Card = {
	name: {
		en: "Rhydon",
		fr: "Rhinoféros",
	},
	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		112,
	],
	hp: 100,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Rhyhorn",
		fr: "Rhinocorne",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Horn Drill",
				fr: "Empal'Korne",
			},

			damage: 50,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Mad Mountain",
				fr: "Montagne Enragée",
			},
			effect: {
				en: "Flip 2 coins. If both are heads, discard the top card of your opponent’s deck for each damage counter on this Pokémon.",
				fr: "Lancez 2 pièces. Si vous obtenez 2 côtés face, défaussez la carte du dessus du deck de votre adversaire pour chaque marqueur de dégâts placé sur ce Pokémon.",
			},

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
