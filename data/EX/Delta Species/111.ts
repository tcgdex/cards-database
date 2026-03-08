import { Card } from '../../../interfaces'
import Set from '../Delta Species'

const card: Card = {
	name: {
		en: "Groudon Star",
		fr: "Groudon ☆",
		de: "Groudon *"
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
				en: "Critical Collection",
				fr: "Collection difficile",
				de: "Critical Collection"
			},
			effect: {
				en: "Count the number of Prize cards your opponent has taken. Search your discard pile for up to that many Fighting Energy cards and attach them to Groudon Star.",
				fr: "Comptabilisez le nombre de cartes Récompense récoltées par votre adversaire. Cherchez dans votre pile de défausse le même nombre de cartes Énergie  et attachez-les à Groudon .",
				de: "Count the number of Prize cards your opponent has taken. Search your discard pile for up to that many  Energy cards and attach them to Groudon *."
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
				en: "Ground Slash",
				fr: "Tranch'sol",
				de: "Ground Slash"
			},
			effect: {
				en: "Discard a Fighting Energy card attached to Groudon Star.",
				fr: "Défaussez une carte Énergie  attachée à Groudon .",
				de: "Discard a Energy card attached to Groudon *."
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
