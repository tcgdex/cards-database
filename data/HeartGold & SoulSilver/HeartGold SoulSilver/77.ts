import { Card } from '../../../interfaces'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		en: "Phanpy",
		fr: "Phanpy",
		de: "Phanpy"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		231,
	],

	hp: 70,

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
				en: "Flail",
				fr: "Fléau",
				de: "Dreschflegel"
			},
			effect: {
				en: "Does 10 damage times the number of damage counters on Phanpy.",
				fr: "Inflige 10 dégâts multipliés par le nombre de marqueurs de dégâts sur Phanpy.",
				de: "Dieser Angriff fügt 10 Schadenspunkte für jede Schadensmarke auf Phanpy zu."
			},
			damage: "10x",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		en: "It swings its long snout around playfully, but because it is so strong, that can be dangerous."
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse",
		},
		{
			type: "normal",
			stamp : ["ross-cawthorn"],
		}
	],

	thirdParty: {
		cardmarket: 279049,
		tcgplayer: 88003
	}
}

export default card
