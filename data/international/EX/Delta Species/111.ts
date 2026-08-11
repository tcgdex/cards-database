import { Card } from 'models/database/card'
import Set from '../Delta Species'

const card: Card = {
	name: {
		'en-us': "Groudon Star",
		'fr-fr': "Groudon ☆",
		'de-de': "Groudon *"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		383,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Critical Collection",
				'fr-fr': "Collection difficile",
				'de-de': "Critical Collection"
			},
			effect: {
				'en-us': "Count the number of Prize cards your opponent has taken. Search your discard pile for up to that many Fighting Energy cards and attach them to Groudon Star.",
				'fr-fr': "Comptabilisez le nombre de cartes Récompense récoltées par votre adversaire. Cherchez dans votre pile de défausse le même nombre de cartes Énergie  et attachez-les à Groudon .",
				'de-de': "Count the number of Prize cards your opponent has taken. Search your discard pile for up to that many  Energy cards and attach them to Groudon *."
			},
			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Fighting",
				"Fighting",
				"Fighting",
			],
			name: {
				'en-us': "Ground Slash",
				'fr-fr': "Tranch'sol",
				'de-de': "Ground Slash"
			},
			effect: {
				'en-us': "Discard a Fighting Energy card attached to Groudon Star.",
				'fr-fr': "Défaussez une carte Énergie  attachée à Groudon .",
				'de-de': "Discard a Energy card attached to Groudon *."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],


	retreat: 3,

	thirdParty: {
		tcgplayer: 85927
	},

	variants: [
		{
			type: "holo"
		},
	]
}

export default card
