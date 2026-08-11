import { Card } from 'models/database/card'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		'en-us': "Buneary",
		'fr-fr': "Laporeille",
		'de-de': "Haspiror"
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
				'en-us': "Drawup Power",
				'fr-fr': "Pouvoir bloquant",
				'de-de': "Kraft aufziehen"
			},
			effect: {
				'en-us': "Search your deck for an Energy card, show it to your opponent, and put it into your hand. Shuffle your deck afterward.",
				'fr-fr': "Choisissez une carte Énergie dans votre deck, montrez-la à votre adversaire et placez-la dans votre main. Ensuite, mélangez votre deck.",
				'de-de': "Durchsuche dein Deck nach 1 Energiekarte, zeige sie deinem Gegner und nimm sie auf die Hand. Mische dein Deck danach."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Extend Ears",
				'fr-fr': "Oreilles extensibles",
				'de-de': "Lauscher ausfahren"
			},
			effect: {
				'en-us': "Remove 1 damage counter from each of your Benched Pokémon.",
				'fr-fr': "Retirez 1 marqueur de dégât à chacun des Pokémon de votre Banc.",
				'de-de': "Entferne 1 Schadensmarke von jedem Pokémon auf deiner Bank."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+10"
		},
	],

	retreat: 1,

	description: {
		'en-us': "When it senses danger, it perks up its ears. On cold nights, it sleeps with its head tucked into its fur.",
	},

	thirdParty: {
		cardmarket: 278102,
		tcgplayer: 84039
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
