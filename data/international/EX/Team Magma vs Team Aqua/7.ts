import { Card } from 'models/database/card'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		'en-us': "Team Magma's Aggron",
		'fr-fr': "Galeking de Team Magma",
		'de-de': "Team Magmas Stolloss"
	},

	illustrator: "Hiromichi Sugiyama",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [306],

	hp: 120,

	types: [
		"Fighting",
		"Darkness"
	],

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Crush",
				'fr-fr': "Écrase",
				'de-de': "Crush"
			},
			effect: {
				'en-us': "Flip a coin for each Energy attached to Team Magma's Aggron. This attack does 30 damage times the number of heads.",
				'fr-fr': "Lancez une pièce pour chaque Énergie attachée à Galeking de Team Magma. Cette attaque inflige 30 dégâts multipliés par le nombre de faces.",
				'de-de': "Flip a coin for each Energy attached to Team Magma's Aggron. This attack does 30 damage times the number of heads."
			},
			damage: "30×",

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Land Stream",
				'fr-fr': "Courant de terre",
				'de-de': "Land Stream"
			},
			effect: {
				'en-us': "You may discard any number of basic Energy cards attached to Team Magma's Aggron. If you do, this attack does 50 damage plus 20 more damage for each basic Energy card you discarded.",
				'fr-fr': "Vous pouvez défausser autant de cartes Énergie de base attachées à Galeking de Team Magma que vous le voulez. Cette attaque inflige 50 dégâts plus 20 dégâts supplémentaires pour chaque carte Énergie de base défaussée.",
				'de-de': "You may discard any number of basic Energy cards attached to Team Magma's Aggron. If you do, this attack does 50 damage plus 20 more damage for each basic Energy card you discarded."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
		{
			type: "Water",
			value: "×2"
		},
	],


	retreat: 2,


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 275784,
				tcgplayer: 89818
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275784,
				tcgplayer: 89818
			}
		},
	],

}

export default card
