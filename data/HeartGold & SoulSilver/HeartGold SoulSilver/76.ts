import { Card } from '../../../interfaces'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		en: "Paras",
		fr: "Paras",
		de: "Paras"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		46,
	],

	hp: 50,

	types: [
		"Grass",
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
				"Grass",
				"Colorless",
			],
			name: {
				en: "Double-edge Claw",
				fr: "Griffe Damoclès",
				de: "Zweischneidige Klaue"
			},
			effect: {
				en: "Paras does 10 damage to itself.",
				fr: "Paras s’inflige 10 dégâts.",
				de: "Paras fügt sich selbst 10 Schadenspunkte zu."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "As its body grows large, large mushrooms named tochukaso start sprouting out of its back."
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
			stamp : ["snow-flake"],
			languages: ["de"]
		},
	],

	thirdParty: {
		cardmarket: 279020,
		tcgplayer: 87953
	}
}

export default card
