import { Card } from 'models/database/card'
import Set from '../Base Set'

const card: Card = {
	name: {
		'en-us': "Dugtrio",
		'fr-fr': "Triopikeur",
		'de-de': "Digdri",
		'it-it': "Dugtrio"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		51,
	],

	hp: 70,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Diglett",
		'fr-fr': "Taupiqueur",
		'it-it': "Diglett"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Slash",
				'fr-fr': "Tranche",
				'de-de': "Schlitzer",
				'it-it': "Lacerazione"
			},

			damage: 40,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
				"Fighting",
			],
			name: {
				'en-us': "Earthquake",
				'fr-fr': "Séisme",
				'de-de': "Erdbeben",
				'it-it': "Terremoto"
			},
			effect: {
				'en-us': "Does 10 damage to each of your own Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Inflige 10 dégâts à chacun des Pokémon sur votre propre Banc. (Ne pas appliquer la Faiblesse et la Résistance aux Pokémon sur le Banc.)",
				'de-de': "Fügt jedem Deiner eigenen Pokémon auf der Bank 10 Schadenspunkte zu. (Schwäche und Resistenz für Pokémon auf der Bank nicht anwenden!)",
				'it-it': "Infligge 10 danni a ogni Pokémon nella tua Panchina. (Non applicare Debolezza e Resistenza per i Pokémon in Panchina.)",
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-30"
		},
	],
	retreat: 2,


	variants: [
		{
			type: "normal",
			subtype: "unlimited",
			thirdParty: {
				cardmarket: 273714,
				tcgplayer: 42359
			}
		},
		{
			type: "normal",
			subtype: "shadowless",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 107014
			}
		},
		{
			type: "normal",
			subtype: "shadowless",
			thirdParty: {
				tcgplayer: 107014
			}
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright",
		}
	],

	description: {
		'en-us': "A team of Diglett triplets. It triggers huge earthquakes by burrowing 60 miles underground.",
		'fr-fr': "Un groupe de Taupiqueur. Ils créent des séismes en creusant à plus de 100 km de profondeur.",
		'it-it': "Terzetto di Diglett che scatena disastrosi terremoti. LIV 36 N.51"
	}
}

export default card
