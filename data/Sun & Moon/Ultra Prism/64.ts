import { Card } from '../../../interfaces'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		en: "Cranidos",
		fr: "Kranidos",
	},
	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		408,
	],
	hp: 90,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Unidentified Fossil",
		fr: "Fossile Inconnu",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fightning",
			],
			name: {
				en: "Corkscrew Punch",
				fr: "Poing Tire-Bouchon",
			},

			damage: 30,

		},
		{
			cost: [
				"Fightning",
				"Fightning",
			],
			name: {
				en: "Headstrike",
				fr: "Coup de Tête",
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

	retreat: 1,



}

export default card
