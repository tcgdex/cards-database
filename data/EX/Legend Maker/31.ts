import { Card } from '../../../interfaces'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		en: "Dunsparce",
		fr: "Insolourdo"
	},
	illustrator: "Hajime Kusajima",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		206,
	],
	hp: 50,
	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Deadlock",
				fr: "Impasse"
			},
			effect: {
				en: "As long as Dunsparce is your Active Pokémon, your opponent's Dunsparce can't attack.",
				fr: "Tant qu'Insolourdo est votre Pokémon Actif, l'Insolourdo de votre adversaire ne peut pas attaquer."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Down Draw",
				fr: "Pioche du dessous"
			},
			effect: {
				en: "Draw 2 cards from the bottom of your deck.",
				fr: "Piochez 2 cartes du dessous de votre deck."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Tripping Turn",
				fr: "Tour trébuchant"
			},
			effect: {
				en: "The Defending Pokémon is now Confused. You may switch Dunsparce with 1 of your Benched Pokémon.",
				fr: "Le Pokémon Défenseur est maintenant Confus. Vous pouvez échanger Insolourdo avec 1 des Pokémon de votre Banc."
			},

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],





}

export default card
