import { Card } from 'models/database/card'
import Set from '../Delta Species'

const card: Card = {
	name: {
		'en-us': "Kyogre Star",
		'fr-fr': "Kyogre ☆",
		'de-de': "Kyogre *"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		382,
	],

	hp: 90,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Critical Collection",
				'fr-fr': "Collection difficile",
				'de-de': "Critical Collection"
			},
			effect: {
				'en-us': "Count the number of Prize cards your opponent has taken. Search your discard pile for up to that many Water Energy cards and attach them to Kyogre Star.",
				'fr-fr': "Comptabilisez le nombre de cartes Récompense récoltées par votre adversaire. Cherchez dans votre pile de défausse le même nombre de cartes Énergie  et attachez-les à Kyogre .",
				'de-de': "Count the number of Prize cards your opponent has taken. Search your discard pile for up to that many [W] Energy cards and attach them to Kyogre *."
			},
			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Water",
				"Water",
				"Water",
			],
			name: {
				'en-us': "Sheer Cold",
				'fr-fr': "Glaciation",
				'de-de': "Sheer Cold"
			},
			effect: {
				'en-us': "Flip a coin. If heads, each Defending Pokémon can't attack during your opponent's next turn.",
				'fr-fr': "Lancez une pièce. Si c'est face, chaque Pokémon Défenseur ne peut pas attaquer lors du prochain tour de votre adversaire.",
				'de-de': "Flip a coin. If heads, each Defending Pokémon can't attack during your opponent's next turn."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],


	retreat: 3,

	thirdParty: {
		tcgplayer: 86552
	},

	variants: [
		{
			type: "holo"
		},
	]
}

export default card
