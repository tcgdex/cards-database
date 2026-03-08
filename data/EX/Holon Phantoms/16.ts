import { Card } from '../../../interfaces'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		en: "Rayquaza δ",
		fr: "Rayquaza δ",
		de: "Rayquaza"
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
				en: "Hydro Barrier",
				fr: "Barrière aquatique",
				de: "Hydrobarriere"
			},
			effect: {
				en: "As long as Rayquaza has any Holon Energy cards attached to it, each of your Water Pokémon has no Weakness.",
				fr: "Tant que Rayquaza possède des cartes Énergie Holon, vos Pokémon  ne possèdent pas de Faiblesse.",
				de: "Solange an Rayquaza eine Holon-Energiekarte angelegt ist, haben deine -Pokémon keine Schwäche."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Delta Search",
				fr: "Recherche Delta",
				de: "Delta-Suche"
			},
			effect: {
				en: "Search your deck for a Holon Energy card and attach it to Rayquaza. Shuffle your deck afterward.",
				fr: "Cherchez dans votre deck une carte Énergie Holon et attachez-la à Rayquaza. Ensuite, mélangez votre deck.",
				de: "Durchsuche dein Deck nach einer Holon-Energiekarte und lege sie an Rayquaza an. Mische dein Deck danach."
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
				en: "Ozone Flare",
				fr: "Éclat d'ozone",
				de: "Ozonfackel"
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
