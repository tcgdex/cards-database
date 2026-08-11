import { Card } from 'models/database/card'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		'en-us': "Foongus",
		'fr-fr': "Trompignon",
		'es-es': "Foongus",
		'it-it': "Foongus",
		'pt-br': "Foongus",
		'de-de': "Tarnpignon"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		590,
	],

	hp: 40,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Astonish",
				'fr-fr': "Étonnement",
			},
			effect: {
				'en-us': "Flip a coin. If heads, choose a random card from your opponent's hand. Your opponent reveals that card and shuffles it into his or her deck.",
				'fr-fr': "Lancez une pièce. Si c'est face, choisissez une carte au hasard de la main de votre adversaire. Votre adversaire montre la carte choisie et la mélange avec son deck.",
			},

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
			type: "Water",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It lures Pokémon with its pattern that looks just like a Poké Ball then releases poison spores.",
	},

	thirdParty: {
		cardmarket: 280752,
		tcgplayer: 85540
	}
}

export default card
