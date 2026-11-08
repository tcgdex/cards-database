import { Card } from 'models/database/card'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		'en-us': "Farfetch'd",
		'fr-fr': "Canarticho",
		'de-de': "Porenta"
	},

	illustrator: "Aya Kusube",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [83],

	hp: 60,

	types: [
		"Colorless"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Collect",
				'fr-fr': "Collectionner",
				'de-de': "Sammeln"
			},
			effect: {
				'en-us': "Draw 2 cards.",
				'fr-fr': "Piochez 2 cartes.",
				'de-de': "Ziehe 2 Karten."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Spin Turn",
				'fr-fr': "Tournoyer",
				'de-de': "Absatzdreher"
			},
			effect: {
				'en-us': "Switch Farfetch'd with 1 of your Benched Pokémon.",
				'fr-fr': "Échangez Canarticho avec un Pokémon de votre Banc.",
				'de-de': "Tausche Porenta gegen 1 Pokémon auf deiner Bank aus."
			},
			damage: 20,

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

	retreat: 1,

	description: {
		'en-us': "If it eats the plant stalk it carries as emergency rations, it runs off in search of a new stalk."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85388
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 85388
			}
		},
	],

}

export default card
