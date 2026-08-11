import { Card } from 'models/database/card'
import Set from '../POP Series 7'

const card: Card = {
	name: {
		'en-us': "Kirlia",
		'fr-fr': "Kirlia"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [281],

	hp: 80,

	types: [
		"Psychic"
	],

	evolveFrom: {
		'en-us': "Ralts",
		'fr-fr': "Tarsal"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Psychic Research",
				'fr-fr': "Recherche psy"
			},
			effect: {
				'en-us': "Search your discard pile for a Supporter card and use the effect of that card as the effect of this attack. (The Supporter card remains in your discard pile.)",
				'fr-fr': "Choisissez dans votre pile de défausse une carte Supporter et utilisez l'effet de cette carte comme l'effet de cette carte comme l'effet de cette attaque. (La carte Supporter reste dans la pile de défausse.)"
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Telekinesis",
				'fr-fr': "Télékinésie"
			},
			effect: {
				'en-us': "Choose 1 of your opponent's Pokémon. This attack does 40 damage to that Pokémon. This attack's damage isn't affected by Weakness or Resistance.",
				'fr-fr': "Choisissez 1 des Pokémon de votre adversaire. Cette attaque lui inflige 40 dégâts. Les dégâts de cette attaque ne sont pas affectés par la Faiblesse ou la Résistance."
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+20"
		},
	],
	description: {
		'en-us': "It is highly perceptive of its Trainer’s feelings. It dances when it is feeling happy."
	},

	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 86467,
				cardmarket: 278040
			},
		},
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 86467,
				cardmarket: 278040
			},
		},
		{
			type: "normal",
			stamp: ['jason-klaczynski'],
			thirdParty: {
				tcgplayer: 479793,
				cardmarket: 869280
			},
		},
	],

}

export default card
