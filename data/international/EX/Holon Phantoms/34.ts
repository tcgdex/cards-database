import { Card } from '../../../interfaces'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		en: "Zangoose",
		fr: "Mangriff",
		de: "Sengo"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		335,
	],

	hp: 70,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Scratch",
				fr: "Griffe",
				de: "Kratzer"
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Fury Cutter",
				fr: "Taillade",
				de: "Zornklinge"
			},
			effect: {
				en: "Flip 3 coins. If 1 of them is heads, this attack does 10 damage plus 10 more damage. If 2 of them are heads, this attack does 10 damage plus 20 more damage. If all of them are heads, this attack does 10 damage plus 40 more damage.",
				fr: "Lancez 3 pièces. Si vous obtenez 1 face, cette attaque inflige 10 dégâts plus 10 dégâts supplémentaires. Si vous obtenez 2 faces, cette attaque inflige 10 dégâts plus 20 dégâts supplémentaires. Si vous n'obtenez que des faces, cette attaque inflige 10 dégâts plus 40 dégâts supplémentaires.",
				de: "Wirf 3 Münzen. Bei 1 mal \"Kopf\" fügt dieser Angriff 10 Schadenspunkte plus 10 weitere Schadenspunkte zu. Bei 2 mal \"Kopf\" fügt dieser Angriff 10 Schadenspunkte plus 20 weitere Schadenspunkte zu. Bei 3 mal \"Kopf\" fügt dieser Angriff 10 Schadenspunkte plus 40 weitere Schadenspunkte zu."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 277004,
		tcgplayer: 90704
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		},
	]
}

export default card
