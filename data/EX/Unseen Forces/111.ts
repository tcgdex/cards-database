import { Card } from '../../../interfaces'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		en: "Tyranitar ex",
		fr: "Tyranocif ex"
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		248,
	],
	hp: 160,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Pupitar",
	},

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Shatter",
				fr: "Fracasser"
			},
			effect: {
				en: "Discard any Stadium card in play.",
				fr: "Défaussez n'importe quelle carte Stade en jeu."
			},
			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Derail",
				fr: "Dérailler"
			},
			effect: {
				en: "Discard a Special Energy card, if any, attached to the Defending Pokémon.",
				fr: "Défaussez une carte Énergie spéciale attachée au Pokémon Défenseur, s'il en a."
			},
			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Mix-Up",
				fr: "Mélange"
			},
			effect: {
				en: "Your opponent discards the top card of his or her deck.",
				fr: "Votre adversaire défausse la carte du dessus de son deck."
			},
			damage: 70,

		},
		{
			cost: [
				"Fighting",
				"Darkness",
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Losing Control",
				fr: "Perdre contrôle"
			},
			effect: {
				en: "Discard the top 3 cards of your deck.",
				fr: "Défaussez les 3 cartes du dessus de votre deck."
			},
			damage: 120,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
		{
			type: "Fighting",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],




}

export default card
