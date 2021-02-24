import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Jangmo-o",
		fr: "Bébécaille",
	},
	illustrator: "AKIRA EGAWA",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		782,
	],
	hp: 60,
	types: [
		"Dragon",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Lightning",
				"Fightning",
			],
			name: {
				en: "Raging Claws",
				fr: "Griffes Enragées",
			},
			effect: {
				en: "This attack does 10 more damage for each damage counter on this Pokémon.",
				fr: "Cette attaque inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts placé sur ce Pokémon.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
