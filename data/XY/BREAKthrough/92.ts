import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "Zoroark BREAK",
		fr: "Zoroark TURBO",
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		571,
	],

	hp: 140,

	types: [
		"Darkness",
	],

	evolveFrom: {
		en: "Zoroark",
		fr: "Zoroark",
	},

	stage: "BREAK",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Foul Play",
				fr: "Tricherie",
			},
			effect: {
				en: "Choose 1 of your opponent's Active Pokémon's attacks and use it as this attack.",
				fr: "Choisissez l'une des attaques du Pokémon Actif de votre adversaire et utilisez-la en tant que cette attaque.",
			},

		},
	],

	retreat: 0
}

export default card
