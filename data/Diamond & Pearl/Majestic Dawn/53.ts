import { Card } from '../../../interfaces'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		en: "Buneary",
		fr: "Laporeille",
	},
	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		427,
	],
	hp: 50,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{

			name: {
				en: "Drawup Power",
				fr: "Pouvoir bloquant",
			},
			effect: {
				en: "Search your deck for an Energy card, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
				fr: "Choisissez une carte Énergie dans votre deck, montrez-la à votre adversaire et placez-la dans votre main. Ensuite, mélangez votre deck.",
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Extend Ears",
				fr: "Oreilles extensibles",
			},
			effect: {
				en: "Remove 1 damage counter from each of your Benched Pokémon.",
				fr: "Retirez 1 marqueur de dégât à chacun des Pokémon de votre Banc.",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "+10"
		},
	],

	retreat: 1,



}

export default card
