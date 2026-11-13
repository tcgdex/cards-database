import { Card } from '../../../interfaces'
import Set from '../SM3+'

const card: Card = {
	set: Set,
	name: {
		ja: 'フシギダネ'
	},

	illustrator: 'Mizue',
	rarity: 'Common',
	category: 'Pokemon',
	dexId: [1],
	hp: 70,
	types: ['Grass'],

	description: {
		ja: '生まれたときから 背中に 不思議な タネが 植えてあって 体と ともに 育つという。'
	},

	stage: 'Basic',

	attacks: [
		{
			name: { ja: 'はっぱカッター' },
			damage: 30,
			cost: ['Grass', 'Colorless']
		}
	],

	weaknesses: [{ type: 'Fire', value: '×2' }],
	resistances: [],

	retreat: 2,

	regulationMark: 'A',
	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 560159,
				tcgplayer: 573915,
				cardtrader: 142402
			}
		}
	]
}

export default card
