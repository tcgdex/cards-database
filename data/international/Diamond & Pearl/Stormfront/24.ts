import { Card } from 'models/database/card'
import Set from '../Stormfront'

const card: Card = {
	name: {
		'en-us': "Salamence",
		'fr-fr': "Drattak",
		'de-de': "Brutalanda"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		373,
	],

	hp: 140,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Shelgon",
		'fr-fr': "Drackhaus",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Battle Rush",
				'fr-fr': "Bataille précipitée",
				'de-de': "Kampfdrang"
			},
			effect: {
				'en-us': "If your opponent has any Pokémon in play that has maximum HP of 120 or more, ignore all Colorless Energy necessary to use Salamence's attacks.",
				'fr-fr': "Si votre adversaire possède des Pokémon en jeu avec un maximum de 120 PV ou plus, ignorez toutes les Énergies Colorless nécessaires pour utiliser les attaques de Drattak.",
				'de-de': "Wenn dein Gegner mindestens 1 Pokémon im Spiel hat, dessen Grund-KP 120 oder mehr betragen, ignoriere alle -Energien, die notwendig wären, um Brutalandas Angriffe einzusetzen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Combustion",
				'fr-fr': "Fournaise",
				'de-de': "Glühen"
			},

			damage: 50,

		},
		{
			cost: [
				"Fire",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Steam Twister",
				'fr-fr': "Tornade vapeur",
				'de-de': "Dampfwirbel"
			},
			effect: {
				'en-us': "Discard a Fire Energy and a Water Energy attached to Salamence.",
				'fr-fr': "Défaussez une Énergie Fire et une Énergie Water attachée à Drattak.",
				'de-de': "Lege 1 -Energie und 1 -Energie, die an Brutalanda angelegt sind, auf deinen Ablagestapel."
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Colorless",
			value: "+30"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 278322,
		tcgplayer: 88898
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
