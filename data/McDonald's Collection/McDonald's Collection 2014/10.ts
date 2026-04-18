import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2014'

const card: Card = {
	dexId: [
		659,
	],
	illustrator: "5ban Graphics",
	description: {
		en: "They use their large ears to dig burrows. They will dig the whole night through."
	},
	set: Set,
	name: {
		en: "Bunnelby",
		fr: "Sapereau",
	},
	rarity: "None",
	category: "Pokemon",
	hp: 60,
	types: [
		"Colorless",
	],
	stage: "Basic",
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tackle",
				fr: "Charge",
			},
			damage: "20",
		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	resistances: [

	],
	retreat: 2,
	variants: [
		{
			type: 'holo',
			stamp: ["mcdonalds"],

			thirdParty: {
				cardmarket: 281662,
				tcgplayer: 110415
			}
		}
	]
}

export default card

