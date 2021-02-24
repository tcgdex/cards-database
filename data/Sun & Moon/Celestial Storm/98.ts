import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Heatran",
		fr: "Heatran",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		485,
	],
	hp: 130,
	types: [
		"Metal",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Steelworks",
				fr: "Aciérie",
			},
			effect: {
				en: "Look at the top 4 cards of your deck and attach any number of Metal Energy cards you find there to 1 of your Pokémon. Shuffle the other cards back into your deck.",
				fr: "Regardez les 4 cartes du dessus de votre deck et attachez le nombre désiré de cartes Énergie Metal que vous y trouverez à l’un de vos Pokémon. Mélangez les autres cartes avec votre deck.",
			},

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Steel Tackle",
				fr: "Charge d’Acier",
			},
			effect: {
				en: "This Pokémon does 30 damage to itself.",
				fr: "Ce Pokémon s’inflige 30 dégâts.",
			},
			damage: 120,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 3,



}

export default card
