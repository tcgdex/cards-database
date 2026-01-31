import { Card } from '../../../interfaces'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		en: "Baltoy",
		fr: "Balbuto",
		de: "Puppance"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		343,
	],

	hp: 50,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Headbutt",
				fr: "Coup d'boule",
				de: "Headbutt"
			},

			damage: 10,

		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				en: "Mud Slap",
				fr: "Coud'boue",
				de: "Mud Slap"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276126,
		tcgplayer: 83711
	},

	variants: [
		{
			type: "normal",
		}, {
			type: "holo",
			foil: "energy"
		}
	]
}

export default card
