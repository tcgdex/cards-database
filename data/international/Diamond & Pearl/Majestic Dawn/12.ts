import { Card } from 'models/database/card'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		'en-us': "Phione",
		'fr-fr': "Phione",
		'de-de': "Phione"
	},

	illustrator: "Daisuke Ito",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		489,
	],

	hp: 60,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Evolution Wish",
				'fr-fr': "Souhait évolution",
				'de-de': "Evolutionswunsch"
			},
			effect: {
				'en-us': "Search your deck for a card that evolves from 1 of your Pokémon and put it onto that Pokémon. (This counts as evolving that Pokémon.) Shuffle your deck afterward.",
				'fr-fr': "Choisissez dans votre deck une carte qui évolue d'1 de vos Pokémon et placez-la sur ce Pokémon. (Vous le faites ainsi évoluer.) Ensuite, mélangez votre deck.",
				'de-de': "Durchsuche dein Deck nach 1 Karte, die sich aus 1 deiner Pokémon entwickelt, und lege sie auf dieses Pokémon. (Dies zählt als Entwickeln dieses Pokémon.) Mische dein Deck danach."
			},

		},
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				'en-us': "Water Pulse",
				'fr-fr': "Vibraqua",
				'de-de': "Aquawelle"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Endormi.",
				'de-de': "Das Verteidigende Pokémon schläft jetzt."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+10"
		},
	],

	retreat: 1,

	description: {
		'en-us': "A Pokémon that lives in warm seas. It inflates the flotation sac on its head to drift and search for food.",
	},

	thirdParty: {
		cardmarket: 278061,
		tcgplayer: 88007
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "reverse"
		}
	]
}

export default card
