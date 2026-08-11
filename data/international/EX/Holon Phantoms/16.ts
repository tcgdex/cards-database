import { Card } from 'models/database/card'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		'en-us': "Rayquaza δ",
		'fr-fr': "Rayquaza δ",
		'de-de': "Rayquaza"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		384,
	],

	hp: 80,

	types: [
		"Water",
		"Metal",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Hydro Barrier",
				'fr-fr': "Barrière aquatique",
				'de-de': "Hydrobarriere"
			},
			effect: {
				'en-us': "As long as Rayquaza has any Holon Energy cards attached to it, each of your Water Pokémon has no Weakness.",
				'fr-fr': "Tant que Rayquaza possède des cartes Énergie Holon, vos Pokémon  ne possèdent pas de Faiblesse.",
				'de-de': "Solange an Rayquaza eine Holon-Energiekarte angelegt ist, haben deine -Pokémon keine Schwäche."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Delta Search",
				'fr-fr': "Recherche Delta",
				'de-de': "Delta-Suche"
			},
			effect: {
				'en-us': "Search your deck for a Holon Energy card and attach it to Rayquaza. Shuffle your deck afterward.",
				'fr-fr': "Cherchez dans votre deck une carte Énergie Holon et attachez-la à Rayquaza. Ensuite, mélangez votre deck.",
				'de-de': "Durchsuche dein Deck nach einer Holon-Energiekarte und lege sie an Rayquaza an. Mische dein Deck danach."
			},

		},
		{
			cost: [
				"Water",
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Ozone Flare",
				'fr-fr': "Éclat d'ozone",
				'de-de': "Ozonfackel"
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Colorless",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-30"
		},
		{
			type: "Fighting",
			value: "-30"
		},
	],

	
	retreat: 2,

	thirdParty: {
		cardmarket: 276986
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		},
	]
}

export default card
