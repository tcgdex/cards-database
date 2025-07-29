import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Kecleon",
		fr: "Kecleon Niv. 34",
		de: "Kecleon"
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
				de: "Farbenfroher Körper"
			},
			effect: {
				en: "Kecleon's type is Grass Fire Water Lightning Psychic Fighting Darkness Metal Colorless.",
				fr: "Kecleon est de type GrassFireWaterLightningPsychicFightingDarknessMetalColorless.",
				de: "Kecleons Typ ist		 ."
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
				de: "Dreifachschmetterer"
			},
			effect: {
				en: "Flip 3 coins. This attack does 10 damage plus 20 more damage for each heads.",
				fr: "Lancez 3 pièces. Cette attaque inflige 10 dégâts plus 20 dégâts supplémentaires pour chaque face.",
				de: "Wirf 3 Münzen. Dieser Angriff fügt 10 Schadenspunkte plus 20 weitere Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 278641
	}
}

export default card
