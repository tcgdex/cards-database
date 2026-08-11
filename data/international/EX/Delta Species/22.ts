import { Card } from 'models/database/card'
import Set from '../Delta Species'

const card: Card = {
	name: {
		'en-us': "Holon's Magneton",
		'fr-fr': "Magneton d'Holon",
		'de-de': "Holon-Magneton"
	},

	illustrator: "Katsura Tabata",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		82,
	],

	hp: 70,

	types: [
		"Metal",
	],

	evolveFrom: {
		'en-us': "Holon's Magnemite",
		'fr-fr': "Magneti d'Holon"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Extra Ball",
				'fr-fr': "Boule supplémentaire",
				'de-de': "Extra-Ball"
			},
			effect: {
				'en-us': "If the Defending Pokémon is Pokémon-ex, this attack does 30 damage plus 20 more damage.",
				'fr-fr': "Si le Pokémon Défenseur est un Pokémon-ex, cette attaque inflige 30 dégâts plus 20 dégâts supplémentaires.",
				'de-de': "Wenn das Verteidigende Pokémon ein Pokémon-ex ist, fügt dieser Angriff 30 Schadenspunkte plus 20 weitere Schadenspunkte zu."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],


	retreat: 1,

	thirdParty: {
		cardmarket: 276785,
		tcgplayer: 86157
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		},
		{
			type: "normal",
			stamp: ["hiroki-yano"]
		},
		{
			type: "normal",
			stamp: ["jason-klaczynski"]
		},
		{
			type: "normal",
			stamp: ["jeremy-scharff-kim"]
		},

	]
}

export default card
