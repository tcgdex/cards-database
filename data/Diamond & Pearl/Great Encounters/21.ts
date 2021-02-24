import { Card } from '../../../interfaces'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		en: "Lapras",
		fr: "Lokhlass",
	},
	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		131,
	],
	hp: 80,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Carry In",
				fr: "Importer",
			},
			effect: {
				en: "Search your deck for a Pokémon Tool card, a Supporter card, and a basic Energy card, show them to your opponent, and put them into your hand. Shuffle your deck afterward.",
				fr: "Choisissez dans votre deck une carte Outil Pokémon, une carte Supporter et une carte Énergie de base, montrez-les à votre adversaire et placez-les dans votre main. Ensuite, mélangez votre deck.",
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Wave Splash",
				fr: "Grosse vague",
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		},
	],

	retreat: 1,



}

export default card
