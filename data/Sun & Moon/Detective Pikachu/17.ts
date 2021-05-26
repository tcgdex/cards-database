import { Card } from '../../../interfaces'
import Set from '../Detective Pikachu'

const card: Card = {
	name: {
		en: "Ditto",
		fr: "Métamorph",
	},
	illustrator: undefined,
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		132,
	],
	hp: 60,
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
				en: "Copy Anything",
				fr: "Copie Tout",
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon's attacks and use it as this attack. If this Pokémon doesn't have the necessary Energy to use that attack, this attack does nothing.",
				fr: "Choisissez l’une des attaques des Pokémon de votre adversaire et utilisez-la en tant que cette attaque. Si ce Pokémon n’a pas l’Énergie nécessaire pour utiliser cette attaque, cette attaque ne fait rien.",
			},

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
