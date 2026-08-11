import { Card } from 'models/database/card'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		'en-us': "Chatot",
		'fr-fr': "Pijako",
		'es-es': "Chatot",
		'it-it': "Chatot",
		'pt-br': "Chatot",
		'de-de': "Plaudagei"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		441,
	],

	hp: 60,

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
				'en-us': "Misinformation",
				'fr-fr': "Intox",
			},
			effect: {
				'en-us': "Discard all Pokémon Tool cards attached to each of your opponent's Pokémon.",
				'fr-fr': "Défaussez toutes les cartes Outil Pokémon attachées à chacun des Pokémon de votre adversaire.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Tone-Deaf",
				'fr-fr': "Dur d'Oreille",
			},
			effect: {
				'en-us': "The Defending Pokémon is now Confused.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Confus.",
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
		'en-us': "Its tongue is just like a human's. As a result, it can cleverly mimic human speech.",
	},

	thirdParty: {
		cardmarket: 281098,
		tcgplayer: 84244
	}
}

export default card
