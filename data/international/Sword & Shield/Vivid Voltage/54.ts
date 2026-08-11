import { Card } from 'models/database/card'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [523],

	name: {
		'en-us': "Zebstrika",
		'fr-fr': "Zéblitz",
		'es-es': "Zebstrika",
		'it-it': "Zebstrika",
		'pt-br': "Zebstrika",
		'de-de': "Zebritz"
	},

	illustrator: "0313",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	hp: 110,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Blitzle",
		'fr-fr': "Zébibron",
		'es-es': "Blitzle",
		'it-it': "Blitzle",
		'pt-br': "Blitzle",
		'de-de': "Elezeba"
	},

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Low Kick",
				'fr-fr': "Balayage",
				'es-es': "Patada Baja",
				'it-it': "Colpo Basso",
				'pt-br': "Rasteira",
				'de-de': "Fußkick"
			},

			damage: 30,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Zap Kick",
				'fr-fr': "Coup de Pied Ravageur",
				'es-es': "Electropatada",
				'it-it': "Dinamocalcio",
				'pt-br': "Chute Zap",
				'de-de': "Stromtritt"
			},

			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D",


	stage: "Stage1",

	description: {
		'en-us': "They have lightning-like movements. When Zebstrika run at full speed, the sound of thunder reverberates."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 511690,
				tcgplayer: 226451
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 511690,
				tcgplayer: 226451
			}
		},
	],
}

export default card
