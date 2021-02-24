import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Chansey",
		fr: "Leveinard",
	},
	illustrator: "Megumi Mizutani",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		113,
	],
	hp: 110,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Bind Wound",
				fr: "Blessure Pansée",
			},
			effect: {
				en: "Flip a coin. If heads, heal 30 damage from 1 of your Pokémon.",
				fr: "Lancez une pièce. Si c’est face, soignez 30 dégâts à l’un de vos Pokémon.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hammer In",
				fr: "Enfoncement",
			},

			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
