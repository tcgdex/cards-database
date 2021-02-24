import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Kecleon",
		fr: "Kecleon Niv. 34",
	},
	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		352,
	],
	hp: 70,
	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Colorful Body",
				fr: "Corps coloré",
			},
			effect: {
				en: "Kecleon's type is Grass Fire Water Lightning Psychic Fighting Darkness Metal Colorless.",
				fr: "Kecleon est de type GrassFireWaterLightningPsychicFightingDarknessMetalColorless.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Triple Smash",
				fr: "Triple éclate",
			},
			effect: {
				en: "Flip 3 coins. This attack does 10 damage plus 20 more damage for each heads.",
				fr: "Lancez 3 pièces. Cette attaque inflige 10 dégâts plus 20 dégâts supplémentaires pour chaque face.",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "+20"
		},
	],

	retreat: 1,



}

export default card
