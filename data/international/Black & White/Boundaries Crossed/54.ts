import { Card } from 'models/database/card'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		'en-us': "Electivire",
		'fr-fr': "Élekable",
		'es-es': "Electivire",
		'it-it': "Electivire",
		'pt-br': "Electivire",
		'de-de': "Elevoltek"
	},

	illustrator: "BERUBURI",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		466,
	],

	hp: 120,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Electabuzz",
		'fr-fr': "Élektek",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Electriwave",
				'fr-fr': "Vague Électrique",
			},
			effect: {
				'en-us': "This attack does 30 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige 30 dégâts à chacun des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Shock Wave",
				'fr-fr': "Onde de Choc",
			},
			effect: {
				'en-us': "This attack's damage isn't affected by Resistance.",
				'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "The instant it presses the tips of its tails onto an opponent, it sends over 20,000 volts of electricity into the foe.",
	},

	thirdParty: {
		cardmarket: 280641,
		tcgplayer: 85124
	}
}

export default card
