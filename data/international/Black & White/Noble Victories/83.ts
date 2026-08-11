import { Card } from 'models/database/card'
import Set from '../Noble Victories'

const card: Card = {
	name: {
		'en-us': "Durant",
		'fr-fr': "Fermite",
		'es-es': "Durant",
		'it-it': "Durant",
		'pt-br': "Durant",
		'de-de': "Fermicula"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		632,
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
				'en-us': "Devour",
				'fr-fr': "Voracité",
			},
			effect: {
				'en-us': "For each of your Durant in play, discard the top card of your opponent's deck.",
				'fr-fr': "Pour chacun de vos Fermite en jeu, défaussez la carte du dessus du deck de votre adversaire.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Vice Grip",
				'fr-fr': "Force Poigne",
			},

			damage: 30,

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
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "They attack in groups, covering themselves in steel armor to protect themselves against Heatmor.",
	},

	thirdParty: {
		cardmarket: 280206,
		tcgplayer: 85020
	}
}

export default card
