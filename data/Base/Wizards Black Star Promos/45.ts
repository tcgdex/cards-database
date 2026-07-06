import { Card } from '../../../interfaces'
import Set from '../Wizards Black Star Promos'

const card: Card = {
	name: {
		en: "Scyther",
	},
	illustrator: "Hironobu Yoshida",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		123,
	],
	hp: 60,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Slashing Strike",
			},
			effect: {
				en: "This attack can't be used during your next turn. (Benching Scyther ends this effect.)",
			},
			damage: 40,

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
			type: "Fighting",
			value: "-30"
		},
	],
	retreat: 1,


	description: {
		en: "With ninja-like agility and speed, it can create the illusion that there is more than one.",
	},

	thirdParty: {
		tcgplayer: 88993
	},

	variants: [
		{
			type: "normal",
		}
	]
}

export default card
