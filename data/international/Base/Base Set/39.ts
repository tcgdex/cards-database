import { Card } from 'models/database/card'
import Set from '../Base Set'

const card: Card = {
	name: {
		'en-us': "Porygon",
		'fr-fr': "Porygon",
		'de-de': "Porygon",
		'it-it': "Porygon",
	},

	illustrator: "Tomoaki Imakuni",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		137,
	],

	hp: 30,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Conversion 1",
				'fr-fr': "Adaptation 1",
				'de-de': "Umwandlung 1",
				'it-it': "Conversione 1",
			},
			effect: {
				'en-us': "If the Defending Pokémon has a Weakness, you may change it to a type of your choice other than Colorless.",
				'fr-fr': "Si le Pokémon Défenseur avait une Faiblesse, vous pouvez la changer pour le type de votre choix, excepté Incolore.",
				'de-de': "Falls das verteidigende Pokémon eine Schwäche hat, kannst Du sie auf einen Typ deiner Wahl (außer Farblos) ändern.",
				'it-it': "Se il Pokémon Difensore ha una Debolezza, la puoi cambiare con un tipo a tua scelta, ad eccezione di Incolore.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Conversion 2",
				'fr-fr': "Adaptation 2",
				'de-de': "Umwandlung 2",
				'it-it': "Conversione 2",
			},
			effect: {
				'en-us': "Change Porygon's Resistance to a type of your choice other than Colorless.",
				'fr-fr': "Changez la Résistance de Porygon pour un type de votre choix, excepté Incolore.",
				'de-de': "Ändere Porygons Resistenz auf einen Typ Deiner Wahl (außer Farblos).",
				'it-it': "Cambia la Resistenza di Porygon con un tipo a scelta, ad eccezione di Incolore"
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],
	retreat: 1,


	description: {
		'en-us': "A Pokémon that consists entirely of programming code. Capable of moving freely in cyberspace.",
		'fr-fr': "Un Pokémon fait de programmes et d'algorithmes. Il peut survivre en milieu virtuel.",
		'it-it': "Pokémon costituito interamente da codici di programmazione. Capace di muoversi liberamente nel ciberspazio. LIV 12 N.137"
	},

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
			thirdParty: {
				cardmarket: 273734,
				tcgplayer: 42381
			},
		},
		{
			type: "normal",
			subtype: "shadowless",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 107036
			},
		},
		{
			type: "normal",
			subtype: "shadowless",
			thirdParty: {
				tcgplayer: 107036
			},
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright",
		}
	],
}

export default card
