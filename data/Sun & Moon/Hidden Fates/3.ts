import { Card } from '../../../interfaces'
import Set from '../Hidden Fates'

const card: Card = {
	name: {
		en: "Butterfree",
		fr: "Papilusion",
		de: "Smettbo"
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
		de: "Safcon"
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
				de: "Windstoß"
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
		de: "Sieht es ein Raupy, das von Vogel-Pokémon angegriffen wird, schlägt es diese mit seinem hochgiftigen Flügelstaub in die Flucht."
	},

	thirdParty: {
		cardmarket: 394797,
		tcgplayer: 197645
	}
}

export default card
