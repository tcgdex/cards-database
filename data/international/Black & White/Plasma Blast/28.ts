import { Card } from 'models/database/card'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		'en-us': "Carracosta",
		'fr-fr': "Mégapagos",
		'es-es': "Carracosta",
		'it-it': "Carracosta",
		'pt-br': "Carracosta",
		'de-de': "Karippas"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		565,
	],

	hp: 140,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Tirtouga",
		'fr-fr': "Carapagos",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Fossil Clutch",
				'fr-fr': "Munition Fossile",
			},
			effect: {
				'en-us': "You may discard an Item card that has Fossil in its name from your hand. If you do, this attack does 50 more damage.",
				'fr-fr': "Vous pouvez défausser une carte Objet qui a Fossile dans son nom de votre main. Dans ce cas, cette attaque inflige 50 dégâts supplémentaires.",
			},
			damage: 50,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Waterfall",
				'fr-fr': "Cascade",
			},

			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,

	description: {
		'en-us': "It could knock out a foe with a slap from one of its developed front appendages and chew it up, shell or bones and all.",
	},

	thirdParty: {
		cardmarket: 281049,
		tcgplayer: 84110
	}
}

export default card
