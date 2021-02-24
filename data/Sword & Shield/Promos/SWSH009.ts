import { Card } from '../../../interfaces'
import Set from '../Promos'

const card: Card = {
	name: {
		fr: "Pashmilla",
	},
	illustrator: "Shibuzoh.",
	rarity: "Common",
	category: "Pokemon",

	set: Set,

	hp: 90,
	types: [
		"Colorless",
	],

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				fr: "Faire Avec",
			},
			effect: {
				fr: "Vous devez défausser une carte de votre main pour pouvoir utiliser ce talent. Une fois pendant votre tour, vous pouvez piocher 2 cartes.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				fr: "Assistance Énergétique",
			},
			effect: {
				fr: "Attachez une carte Énergie de base de votre pile de défausse à l'un de vos Pokémon de Banc.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
