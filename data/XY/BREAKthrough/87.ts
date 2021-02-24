import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "Hawlucha",
		fr: "Brutalibré",
	},
	illustrator: "match",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		701,
	],
	hp: 80,
	types: [
		"Fightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fightning",
			],
			name: {
				en: "High Jump Kick",
				fr: "Pied Voltige",
			},

			damage: 20,

		},
		{
			cost: [
				"Fightning",
				"Fightning",
			],
			name: {
				en: "Skyward Kick",
				fr: "Coup d'Pied Aérien",
			},
			effect: {
				en: "This attack's damage isn't affected by Resistance.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
