import { Card } from '../../../interfaces'
import Set from '../Radiant Collection'

const card: Card = {
	name: {
		en: "M Gardevoir EX",
		es: "M Gardevoir-EX",
	},

	illustrator: "Megumi Mizutani",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		282,
	],

	hp: 210,

	types: [
		"Fairy",
	],

	evolveFrom: {
		en: "Gardevoir-EX",
		es: "Gardevoir-EX",
	},

	stage: "MEGA",

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Fairy",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Brilliant Arrow",
				es: "Flecha Brillante",
			},
			effect: {
				en: "This attack does 30 damage times the amount of Fairy Energy attached to all of your Pokémon.",
				es: "Este ataque hace 30 puntos de daño por cada Energía Fairy unida a todos tus Pokémon.",
			},

			damage: "30×",
		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 2,

	thirdParty: {
		tcgplayer: 113773
	}
}

export default card
