import { Card } from 'models/database/card'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		'en-us': "Octillery",
		'fr-fr': "Octillery",
		'de-de': "Octillery"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		224,
	],

	hp: 80,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Remoraid",
		'fr-fr': "Rémoraid"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Super Suction Cups",
				'fr-fr': "Super ventouses",
				'de-de': "Super Suction Cups"
			},
			effect: {
				'en-us': "As long as Octillery is your Active Pokémon, your opponent's Pokémon can't retreat.",
				'fr-fr': "Tant qu'Octillery est votre Pokémon Actif, les Pokémon de votre adversaire ne peuvent pas battre en retraite.",
				'de-de': "As long as Octillery is your Active Pokémon, your opponent's Pokémon can't retreat"
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Standing By",
				'fr-fr': "État d'alerte",
				'de-de': "Standing By"
			},
			effect: {
				'en-us': "Discard an Energy card attached to Octillery. During your next turn, Octillery's Pulse Blast attack's base damage is 120.",
				'fr-fr': "Défaussez une carte Énergie attachée à Octillery. Lors de votre prochain tour, les dégâts de base d'Explosion vibrante d'Octillery sont de 120.",
				'de-de': "Discard an Energy card attached to Octillery. During your next turn, Octillery's Pulse Blast attack's base damage is 120."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Pulse Blast",
				'fr-fr': "Explosion vibrante",
				'de-de': "Pulse Blast"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	
	retreat: 1,


	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 87831,
				cardmarket: 276656
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 87831,
				cardmarket: 276656
			},
		}
	],
}

export default card
