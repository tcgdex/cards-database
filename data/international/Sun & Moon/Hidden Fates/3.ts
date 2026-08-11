import { Card } from '../../../interfaces'
import Set from '../Hidden Fates'

const card: Card = {
	name: {
		en: "Butterfree",
		fr: "Papilusion",
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		12,
	],

	hp: 130,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Metapod",
		fr: "Chrysacier",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Gust",
				fr: "Tornade",
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

	retreat: 1,

	description: {
		en: "Its wings are covered in toxic scales. If it finds bird Pokémon going after Caterpie, Butterfree sprinkles its scales on them to drive them off.",
	},

	thirdParty: {
		cardmarket: 394797,
		tcgplayer: 197645
	}
}

export default card
