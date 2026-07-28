import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Golem E4",
		fr: "Grolem  Niv. 52",
		de: "Geowaz 4"
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [76],
	hp: 110,
	types: [
		"Fighting"
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rage",
				fr: "Frénésie",
				de: "Raserei"
			},
			effect: {
				en: "Does 20 damage plus 10 more damage for each damage counter on Golem GL.",
				fr: "Inflige 20 dégâts plus 10 dégâts supplémentaires pour chaque marqueur de dégât sur Grolem ",
				de: "Dieser Angriff fügt 20 Schadenspunkte plus 10 weitere Schadenspunkte für jede Schadensmarke auf Geowaz 4 zu."
			},
			damage: "20+",

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Double-edge",
				fr: "Damoclès",
				de: "Risikotackle"
			},
			effect: {
				en: "Golem E4 does 60 damage to itself.",
				fr: "Grolem  s'inflige 60 dégâts.",
				de: "Geowaz 4 fügt sich selbst 60 Schadenspunkte zu."
			},
			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],
	retreat: 4,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 278597,
				tcgplayer: 85830
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278597,
				tcgplayer: 85830
			}
		},
	],

}

export default card
