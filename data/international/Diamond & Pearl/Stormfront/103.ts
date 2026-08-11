import { Card } from 'models/database/card'
import Set from '../Stormfront'

const card: Card = {
	name: {
		'en-us': "Charizard",
		'fr-fr': "Dracaufeu",
		'de-de': "Glurak"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		6,
	],

	hp: 120,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Charmeleon",
		'fr-fr': "Reptincel",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Energy Burn",
				'fr-fr': "Dépense d'énergie",
				'de-de': "Energie verbrennen"
			},
			effect: {
				'en-us': "All Energy attached to Charizard are fire Energy instead of their usual type.",
				'fr-fr': "Toutes les Énergies attachées à Dracaufeu sont des Énergies Fire au lieu de leur type habituel.",
				'de-de': "Alle Energien, die an Glurak angelegt sind, liefern -Energie anstelle ihres normalen Typs."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
				"Fire",
			],
			name: {
				'en-us': "Fire Spin",
				'fr-fr': "Danseflamme",
				'de-de': "Feuerwirbel"
			},
			effect: {
				'en-us': "Discard 2 Energy attached to Charizard.",
				'fr-fr': "Défaussez 2 Énergies attachées à Dracaufeu.",
				'de-de': "Lege 2 an Glurak angelegte Energien auf deinen Ablagestapel."
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	retreat: 3,

	description: {
		'en-us': "Its wings can carry this Pokémon close to an altitude of 4,600 feet. It blows out fire at very high temperatures.",
		'fr-fr': "Ses ailes peuvent le faire voler à plus de 1 400 mètres d'altitude. Ce Pokémon crache du feu à des températures très élevées."
	},

	thirdParty: {
		cardmarket: 278401,
		tcgplayer: 84190
	},

	variants: [
		{
			type: "holo"
		}
	]
}

export default card
