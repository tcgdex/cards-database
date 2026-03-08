import { Card } from '../../../interfaces'
import Set from '../Power Keepers'

const card: Card = {
	name: {
		en: "Anorith",
		fr: "Anorith",
		de: "Anorith"
	},

	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		347,
	],

	hp: 70,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Claw Fossil",
		fr: "Fossile griffe"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Solid Shell",
				fr: "Coquille dure",
				de: "Solider Panzer"
			},
			effect: {
				en: "Any damage done to Anorith by attacks is reduced by 10 (after applying Weakness and Resistance).",
				fr: "Tous dégâts infligés à Anorith par des attaques sont réduits de 10 (après application de la Faiblesse et de la Résistance).",
				de: "Jeder Schaden, der Anorith durch Angriffe zugefügt wird, wird um 10 reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Fury Cutter",
				fr: "Taillade",
				de: "Zornklinge"
			},
			effect: {
				en: "Flip 3 coins. If 1 of them is heads, this attack does 10 damage plus 10 more damage. If 2 of them are heads, this attack does 10 damage plus 30 more damage. If all of them are heads, this attack does 10 damage plus 50 more damage.",
				fr: "Lancez 3 pièces. S'il y a 1 face, cette attaque inflige 10 dégâts plus 10 dégâts supplémentaires. S'il y a 2 faces, cette attaque inflige 10 dégâts plus 30 dégâts supplémentaires. Si ce ne sont que des faces, cette attaque inflige 10 dégâts plus 50 dégâts supplémentaires.",
				de: "Wirf 3 Münzen. Bei 1 mal \"Kopf\" fügt dieser Angriff 10 Schadenspunkte plus 10 weitere Schadenspunkte zu. Bei 2 mal \"Kopf\" fügt dieser Angriff 10 Schadenspunkte plus 30 weitere Schadenspunkte zu. Bei 3 mal \"Kopf\" fügt dieser Angriff 10 Schadenspunkte plus 50 weitere Schadenspunkte zu."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 277332,
		tcgplayer: 83560
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card

