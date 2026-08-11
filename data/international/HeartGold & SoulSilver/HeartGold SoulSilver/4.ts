import { Card } from 'models/database/card'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		'en-us': "Gyarados",
		'fr-fr': "Léviator",
		'de-de': "Garados"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [130],

	hp: 130,

	types: [
		"Water"
	],

	evolveFrom: {
		'en-us': "Magikarp",
		'fr-fr': "Magicarpe"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Hydro Splash",
				'fr-fr': "Hydro-éclaboussure",
				'de-de': "Hydroplatscher"
			},

			damage: 50,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Hyper Beam",
				'fr-fr': "Ultralaser",
				'de-de': "Hyperstrahl"
			},
			effect: {
				'en-us': "Discard an Energy card attached to the Defending Pokémon.",
				'fr-fr': "Défaussez-vous d’une carte Énergie attachée au Pokémon Défenseur.",
				'de-de': "Lege 1 Energiekarte, die am Verteidigenden Pokémon angelegt ist, auf den Ablagestapel deines Gegners."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 3,

	description: {
		'en-us': "Once it appears, it goes on a rampage. It remains enraged until it demolishes everything around it."
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 85992,
				cardmarket: 278976
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 85992,
				cardmarket: 278976
			}
		},
		{
			type: "holo",
			foil: "cracked-ice",
			thirdParty: {
				tcgplayer: 226912,
				cardmarket: 278976
			}
		},
	],

}

export default card
