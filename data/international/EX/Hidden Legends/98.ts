import { Card } from 'models/database/card'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		'en-us': "Regirock ex",
		'fr-fr': "Regirock ex",
		'de-de': "Regirock ex"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [377],

	hp: 100,

	stage: "Basic",
	types: [
		"Fighting"
	],

	suffix: "ex",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Healing Stone",
				'fr-fr': "Pierre guérisseuse",
				'de-de': "Healing Stone"
			},
			effect: {
				'en-us': "At any time between turns, remove 1 damage counter from Regirock ex.",
				'fr-fr': "N'importe quand entre deux tours, retirez à Regirock ex 1 marqueur de dégât.",
				'de-de': "At any time between turns, remove 1 damage counter from Regirock ex."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Tonnage",
				'fr-fr': "Surpuissance",
				'de-de': "Tonnage"
			},
			effect: {
				'en-us': "You may do 60 damage plus 20 more damage. If you do, Regirock ex does 30 damage to itself.",
				'fr-fr': "Vous pouvez infliger 60 dégâts plus 20 dégâts supplémentaires. Regirock ex s'inflige alors 30 dégâts.",
				'de-de': "You may do 60 damage plus 20 more damage. If you do, Regirock ex does 30 damage to itself."
			},
			damage: "60+",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	
	retreat: 3,

	variants: [
		{
			type: "holo",
			foil: 'cracked-ice',
			thirdParty: {
				tcgplayer: 88674,
				cardmarket: 276172
			}
		},
		{
			type: "normal",
			stamp: ["jason-klaczynski"],
			thirdParty: {
				cardmarket: 869536,
				tcgplayer: 477917
			}
		},
	]
}

export default card
