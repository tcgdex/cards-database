import { Card } from '../../../interfaces'
import Set from '../Evolutions'

const card: Card = {
	name: {
		en: "M Pidgeot-EX",
		fr: "M-Roucarnage-EX",
	},
	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		18,
	],
	hp: 220,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Pidgeot-EX",
		fr: "Roucarnage-EX",
	},
	stage: "MEGA",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mach Cyclone",
				fr: "Mach Cyclone",
			},
			effect: {
				en: "You may have your opponent switch his or her Active Pokémon with 1 of his or her Benched Pokémon.",
				fr: "Vous pouvez demander à votre adversaire d’échanger son Pokémon Actif avec l’un de ses Pokémon de Banc.",
			},
			damage: 130,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-20"
		},
	],




}

export default card
