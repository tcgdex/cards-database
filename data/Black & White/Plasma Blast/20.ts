import { Card } from '../../../interfaces'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		en: "Suicune",
		fr: "Suicune",
	},
	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		245,
	],
	hp: 100,
	types: [
		"Water",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Safeguard",
				fr: "Rune Protect",
			},
			effect: {
				en: "Prevent all effects of attacks, including damage, done to this Pokémon by Pokémon-EX.",
				fr: "Évitez tous les effets d'attaques (y compris les dégâts) infligés à ce Pokémon par des Pokémon-EX.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Aurora Beam",
				fr: "Onde Boréale",
			},

			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
