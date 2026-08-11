import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		en: "Wailord",
		fr: "Wailord",
		de: "Wailord"
	},

	illustrator: "Ken Sugimori",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [321],

	hp: 120,

	types: [
		"Water"
	],

	evolveFrom: {
		en: "Wailmer",
		fr: "Wailmer"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Take Down",
				fr: "Bélier",
				de: "Take Down"
			},
			effect: {
				en: "Wailord does 20 damage to itself.",
				fr: "Wailord s'inflige 20 dégâts.",
				de: "Wailord does 20 damage to itself."
			},
			damage: 50,

		},
		{
			cost: [
				"Water",
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Surf",
				fr: "Surf",
				de: "Surf"
			},

			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],


	retreat: 4,


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 275662,
				tcgplayer: 90457
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275662,
				tcgplayer: 90457
			}
		},
	],

}

export default card
