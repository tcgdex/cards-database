import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "Houndoom EX",
		fr: "Démolosse-EEX",
	},

	illustrator: "Eske Yoshinob",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		229,
	],

	hp: 170,

	types: [
		"Fire",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Melting Horn",
				fr: "Corne de Fusion",
			},
			effect: {
				en: "Discard the top 2 cards of your opponent's deck.",
				fr: "Défaussez les 2 cartes du dessus du deck de votre adversaire.",
			},

		},
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				en: "Grand Flame",
				fr: "Flamme Colossale",
			},
			effect: {
				en: "Attach a Fire Energy card from your discard pile to 1 of your Benched Pokémon.",
				fr: "Attachez une carte Énergie Fire de votre pile de défausse à l'un de vos Pokémon de Banc.",
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,
	stage: "Basic"
}

export default card
