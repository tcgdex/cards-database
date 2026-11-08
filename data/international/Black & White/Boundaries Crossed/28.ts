import { Card } from 'models/database/card'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		'en-us': "Darmanitan",
		'fr-fr': "Darumacho",
		'es-es': "Darmanitan",
		'it-it': "Darmanitan",
		'pt-br': "Darmanitan",
		'de-de': "Flampivian"
	},

	illustrator: "kawayoo",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		555,
	],

	hp: 110,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Darumaka",
		'fr-fr': "Darumarond",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Continuous Tumble",
				'fr-fr': "Roulade Continue",
			},
			effect: {
				'en-us': "Flip a coin until you get tails. This attack does 20 damage times the number of heads.",
				'fr-fr': "Lancez une pièce jusqu'à ce que vous obteniez un côté pile. Cette attaque inflige 20 dégâts multipliés par le nombre de côtés face.",
			},
			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Damage Counterpunch",
				'fr-fr': "Riposte Enragée",
			},
			effect: {
				'en-us': "If this Pokémon has any damage counters on it, this attack does 60 more damage.",
				'fr-fr': "Si ce Pokémon a des marqueurs de dégâts, cette attaque inflige 60 dégâts supplémentaires.",
			},
			damage: 60,

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
		'en-us': "When one is injured in a fierce battle, it hardens into a stone-like form. Then it meditates and sharpens its mind.",
	},

	thirdParty: {
		cardmarket: 280615,
		tcgplayer: 84716
	}
}

export default card
