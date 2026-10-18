import { Card } from '../../../interfaces'
import Set from '../Radiant Collection'

const card: Card = {
	name: {
		en: "Gardevoir EX",
		es: "Gardevoir-EX",
	},

	illustrator: "Mizue",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		282,
	],

	hp: 170,

	types: [
		"Fairy",
	],

	stage: "Basic",

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				en: "Life Leap",
				es: "Salto Vital",
			},
			effect: {
				en: "Heal from this Pokémon the same amount of damage you did to your opponent's Active Pokémon.",
				es: "Cura a este Pokémon el mismo número de puntos de daño que hayas infligido al Pokémon Activo de tu rival.",
			},

			damage: 20,
		},
		{
			cost: [
				"Fairy",
				"Fairy",
				"Fairy",
			],
			name: {
				en: "Shining Wind",
				es: "Viento Brillante",
			},
			effect: {
				en: "During your opponent's next turn, this Pokémon has no Weakness.",
				es: "Durante el próximo turno de tu rival, este Pokémon no tiene ninguna Debilidad.",
			},

			damage: 100,
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
		tcgplayer: 113772
	}
}

export default card
