import { Card } from '../../../interfaces'
import Set from '../Radiant Collection'

const card: Card = {
	name: {
		en: "Swablu",
		es: "Swablu",
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		333,
	],

	hp: 40,

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
				en: "Bind Wound",
				es: "Vendar Herida",
			},
			effect: {
				en: "Heal 20 damage from 1 of your Pokémon.",
				es: "Cura 20 puntos de daño a 1 de tus Pokémon.",
			},
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
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		en: "Wings and beaks. I like yours, and I like mine, too.",
		es: "Alas y picos. Me gustan los tuyos y también los míos.",
	},

	thirdParty: {
		tcgplayer: 113766
	}
}

export default card
