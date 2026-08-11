import { Card } from 'models/database/card'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		'en-us': "Entei",
		'fr-fr': "Entei",
		'de-de': "Entei"
	},

	illustrator: "Yuri Umemura",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [244],

	hp: 90,

	types: [
		"Fire"
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Extreme Speed",
				'fr-fr': "Vitesse extrême",
				'de-de': "Turbotempo"
			},
			effect: {
				'en-us': "Entei's Retreat Cost is Colorless Energy less for each Fire Energy attached to Entei.",
				'fr-fr': "Le Coût de retraite de Entei est Colorless de moins pour chaque Énergie Fire attachée à Entei.",
				'de-de': "Die Rückzugskosten von Entei verringern sich für jede an Entei angelegte -Energie um ."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Wild Blaze",
				'fr-fr': "Brasier sauvage",
				'de-de': "Wilde Flamme"
			},
			effect: {
				'en-us': "Discard the top 3 cards of your deck.",
				'fr-fr': "Défaussez les 3 cartes du dessus de votre deck.",
				'de-de': "Lege die obersten 3 Karten von deinem Deck auf deinen Ablagestapel."
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "x2"
		},
	],
	retreat: 2,

	description: {
		'en-us': "A Pokémon that races across the land. It is said that one is born every time a new volcano appears.",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 85274,
				cardmarket: 279641
			},
		},
	],

}

export default card
