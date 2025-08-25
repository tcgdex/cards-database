import { Card } from '../../../interfaces'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		en: "Krabby",
		fr: "Krabby",
		es: "Krabby",
		it: "Krabby",
		pt: "Krabby",
		de: "Krabby"
	},

	illustrator: "kirisAki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		98,
	],

	hp: 70,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Vice Grip",
				fr: "Force Poigne",
				es: "Agarre",
				it: "Presa",
				pt: "Agarramento Viciado",
				de: "Klammer"
			},

			damage: 10,

		},
		{
			cost: [
				"Water",
				"Water",
				"Water",
			],
			name: {
				en: "Crabhammer",
				fr: "Pince-Masse",
				es: "Martillazo",
				it: "Martellata",
				pt: "Martelo Caranguejo",
				de: "Krabbhammer"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 281816,
		tcgplayer: 94146
	}
}

export default card
