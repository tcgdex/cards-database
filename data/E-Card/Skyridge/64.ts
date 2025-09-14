import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Heracross",
		de: "Skaraborn"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		214,
	],

	hp: 60,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Slash",
				de: "Schlitzer"
			},

			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],

			name: {
				en: "Angry Horn",
				de: "Wütendes Horn"
			},

			effect: {
				en: "If there are 4 or more damage counters on Heracross, this attack's base damage is 50 instead of 30.",
				de: "Liegen auf Skaraborn 4 oder mehr Schadensmarken, beträgt der Basisschaden dieses Angriffs 50 anstatt 30."
			},

			damage: 30
		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 275322,
		tcgplayer: 86061
	},

	variants: [
		{
			type: 'normal',
		},
		{
			type: 'reverse',
		}
	]
}

export default card
