import { Card } from 'models/database/card'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		'en-us': "Mr. Mime ex",
		'fr-fr': "M. Mime ex",
		'de-de': "Pantimos ex"
	},

	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		122,
	],

	hp: 80,

	types: [
		"Psychic",
	],

	suffix: "ex",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Magic Evens",
				'fr-fr': "Pair magique",
				'de-de': "Magic Evens"
			},
			effect: {
				'en-us': "If Mr. Mime ex would be damaged by an attack, prevent that attack's damage done to Mr. Mime ex if that damage is 20, 40, 60, 80, 100, 120, 140, 160, or 180.",
				'fr-fr': "Si une attaque inflige des dégâts à M. Mime ex, prévenez-les si les dégâts sont de 20, 40, 60, 80, 100, 120, 140, 160 ou 180.",
				'de-de': "If Mr. Mime ex would be damaged by an attack, prevent that attack's damage done to Mr. Mime ex if that damage is 20, 40, 60, 80, 100, 120, 140, 160, or 180."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Breakdown",
				'fr-fr': "Réaction",
				'de-de': "Breakdown"
			},
			effect: {
				'en-us': "Count the number of cards in your opponent's hand. Put that many damage counters on the Defending Pokémon.",
				'fr-fr': "Comptez le nombre de cartes dans la main de votre adversaire. Placez sur le Pokémon Défenseur autant de marqueurs de dégât qu'il y a de cartes.",
				'de-de': "Count the number of cards in your opponent's hand. Put that many damage counters on the Defending Pokémon."
			},

		},
	],


	retreat: 1,

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 276287,
				tcgplayer: 87599
			},
		},
	]
}

export default card
