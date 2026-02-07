import { Card } from '../../../interfaces'
import Set from '../POP Series 9'

const card: Card = {
	name: {
		en: "Gible",
		fr: "Griknot"
	},

	illustrator: "Hiroki Fuchino",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		443,
	],

	hp: 50,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Push Down",
				fr: "Enfoncer"
			},
			effect: {
				en: "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon.",
				fr: "Votre adversaire échange le Pokémon Défenseur avec 1 de ses Pokémon de Banc."
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
		en: "Its nests is small, horizontal holes in cave walls. It pounces to catch prey that stray too close.",
		fr: "Il niche dans les petits trous horizontaux des murs des grottes. Il bondit pour saisir sa proie."
	},

	retreat: 1,

	variants: [
		{ type: 'normal', size: 'standard' }
	],

	thirdParty: {
		cardmarket: 278565,
		tcgplayer: 85700
	}
}

export default card
