import { Card } from '../../../interfaces'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		en: "Oranguru",
		fr: "Gouroutan",
	},
	illustrator: "Yoshinobu Saito",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		765,
	],
	hp: 110,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Fixer of the Forest",
				fr: "Réparateur de la Forêt",
			},
			effect: {
				en: "Put 3 Pokémon Tool cards from your discard pile into your hand.",
				fr: "Ajoutez 3 cartes Outil Pokémon de votre pile de défausse à votre main.",
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Zen Headbutt",
				fr: "Psykoud’Boul",
			},

			damage: 70,

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
