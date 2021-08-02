import { Card } from '../../../interfaces'
import Set from '../Evolutions'

const card: Card = {
	name: {
		en: "Mewtwo EX",
		fr: "Mewtwo-EX",
	},
	illustrator: "Ryo Ueda",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		150,
	],
	hp: 180,
	types: [
		"Psychic",
	],


	suffix: "EX",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Energy Absorption",
				fr: "Absorption d'énergie",
			},
			effect: {
				en: "Attach an Energy card from your discard pile to this Pokémon.",
				fr: "Attachez une carte Énergie de votre pile de défausse à ce Pokémon.",
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Regeneration",
				fr: "Rétablissement",
			},
			effect: {
				en: "Heal 60 damage from this Pokémon.",
				fr: "Soignez 60 dégâts à ce Pokémon.",
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Psyburn",
				fr: "Brûlure Psy",
			},

			damage: 110,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
