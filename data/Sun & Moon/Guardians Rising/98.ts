import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Jangmo-o",
		fr: "Bébécaille",
	},
	illustrator: "match",
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

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Bulletproof",
				fr: "Pare-Balles",
			},
			effect: {
				en: "This Pokémon takes 10 less damage from attacks (after applying Weakness and Resistance).",
				fr: "Ce Pokémon subit 10 dégâts de moins provenant des attaques(après application de la Faiblesse et de la Résistance).",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Lightning",
				"Fightning",
			],
			name: {
				en: "Dragon Claw",
				fr: "Dracogriffe",
			},

			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
