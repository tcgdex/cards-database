import { Card } from 'models/database/card'
import Set from '../POP Series 9'

const card: Card = {
	name: {
		'en-us': "Gible",
		'fr-fr': "Griknot"
	},

	illustrator: "Hiroki Fuchino",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [443],

	hp: 50,

	types: [
		"Colorless"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Push Down",
				'fr-fr': "Enfoncer"
			},
			effect: {
				'en-us': "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon.",
				'fr-fr': "Votre adversaire échange le Pokémon Défenseur avec 1 de ses Pokémon de Banc."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Colorless",
			value: "+10"
		},
	],
	description: {
		'en-us': "Its nests is small, horizontal holes in cave walls. It pounces to catch prey that stray too close.",
		'fr-fr': "Il niche dans les petits trous horizontaux des murs des grottes. Il bondit pour saisir sa proie."
	},

	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85700,
				cardmarket: 278565
			},
		},
	],

}

export default card
