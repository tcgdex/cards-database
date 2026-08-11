import { Card } from 'models/database/card'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		'en-us': "Charmander",
		'fr-fr': "Salamèche",
		'es-es': "Charmander",
		'it-it': "Charmander",
		'pt-br': "Charmander",
		'de-de': "Glumanda"
	},

	illustrator: "Akira Komayama",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		4,
	],

	hp: 70,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Draw In",
				'fr-fr': "Aspiracartes",
			},
			effect: {
				'en-us': "Attach 2 Fire Energy cards from your discard pile to this Pokémon.",
				'fr-fr': "Attachez 2 cartes Énergie Fire de votre pile de défausse à ce Pokémon.",
			},

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Flare",
				'fr-fr': "Flamboiement",
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "The fire on the tip of its tail is a measure of its life. If healthy, its tail burns intensely.",
	},

	thirdParty: {
		cardmarket: 280605,
		tcgplayer: 84218
	}
}

export default card
