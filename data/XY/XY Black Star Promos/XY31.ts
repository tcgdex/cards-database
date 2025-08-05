import { Card } from '../../../interfaces'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		en: "Xerneas",
		fr: "Xerneas",
	},

	illustrator: "Masakazu Fukuda",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [
		716,
	],

	hp: 130,

	types: [
		"Fairy",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fairy",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Aurora Gain",
				fr: "Puissance Boréale",
			},
			effect: {
				en: "During your opponent's next turn, this Pokémon has no Weakness.",
				fr: "Pendant le prochain tour de votre adversaire, ce Pokémon n'a pas de Faiblesse.",
			},
			damage: 50,

		},
		{
			cost: [
				"Fairy",
				"Fairy",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Light of Life",
				fr: "Lumière de l'Existence",
			},
			effect: {
				en: "If your opponent has Yveltal (including Yveltal-EX) in play, this attack does 40 more damage.",
				fr: "Si votre adversaire a Yveltal (y compris Yveltal-EX) en jeu, cette attaque inflige 40 dégâts supplémentaires.",
			},
			damage: "80＋",

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
			value: "−20"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 281317
	}
}

export default card
