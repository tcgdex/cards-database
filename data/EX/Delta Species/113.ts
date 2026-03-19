import { Card } from '../../../interfaces'
import Set from '../Delta Species'

const card: Card = {
	name: {
		en: "Metagross Star",
		fr: "Metalosse ☆",
		de: "Metagross *"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		376,
	],

	hp: 70,

	types: [
		"Metal",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Critical Collection",
				fr: "Collection difficile",
				de: "Critical Collection"
			},
			effect: {
				en: "Count the number of Prize cards your opponent has taken. Search your discard pile for up to that many Metal Energy cards and attach them to Metagross Star.",
				fr: "Comptabilisez le nombre de cartes Récompense récoltées par votre adversaire. Cherchez dans votre pile de défausse le même nombre de cartes Énergie  et attachez-les à Metalosse .",
				de: "Count the number of Prize cards your opponent has taken. Search your discard pile for up to that many  Energy cards and attach them to Metagross *."
			},
			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Metal",
				"Metal",
				"Metal",
			],
			name: {
				en: "Hyper Beam",
				fr: "Ultralaser",
				de: "Hyper Beam"
			},
			effect: {
				en: "Flip a coin. If heads, discard an Energy card attached to the Defending Pokémon.",
				fr: "Lancez une pièce. Si c'est face, défaussez une carte Énergie attachée au Pokémon Défenseur.",
				de: "Flip a coin. If heads, discard an Energy card attached to the Defending Pokémon."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],


	retreat: 3,

	thirdParty: {
		tcgplayer: 87345
	},

	variants: [
		{
			type: "holo"
		},
	]
}

export default card
