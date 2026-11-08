import { Card } from 'models/database/card'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		'en-us': "Sableye",
		'fr-fr': "Ténéfix",
		'es-es': "Sableye",
		'it-it': "Sableye",
		'pt-br': "Sableye",
		'de-de': "Zobiris"
	},

	illustrator: "kawayoo",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		302,
	],

	hp: 70,

	types: [
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Confuse Ray",
				'fr-fr': "Onde Folie"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Confused.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus."
			},
			damage: 10,

		},
		{
			cost: [
				"Darkness",
			],
			name: {
				'en-us': "Junk Hunt",
				'fr-fr': "Marché aux Puces"
			},
			effect: {
				'en-us': "Put 2 Item cards from your discard pile into your hand.",
				'fr-fr': "Ajoutez 2 cartes Objet de votre pile de défausse à votre main."
			},

		},
	],

	retreat: 1,

	description: {
		'en-us': "It hides in the darkness of caves. Its diet of gems has transformed its eyes into gemstones.",
	},

	thirdParty: {
		cardmarket: 280390,
		tcgplayer: 88855
	}
}

export default card
