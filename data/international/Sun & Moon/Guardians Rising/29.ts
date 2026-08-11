import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Wailmer",
		fr: "Wailmer",
		es: "Wailmer",
		it: "Wailmer",
		pt: "Wailmer",
		de: "Wailmer"
	},

	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		320,
	],

	hp: 120,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Splash",
				fr: "Trempette",
				es: "Salpicadura",
				it: "Splash",
				pt: "Borrifada",
				de: "Platscher"
			},

			damage: 20,

		},
		{
			cost: [
				"Water",
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Surf",
				fr: "Surf",
				es: "Surf",
				it: "Surf",
				pt: "Surfe",
				de: "Surfer"
			},

			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		en: "It loves to startle people. It fills itself up with seawater and plays by bouncing around like a ball.",
	},

	thirdParty: {
		cardmarket: 297491,
		tcgplayer: 130929
	}
}

export default card
