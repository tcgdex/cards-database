import { Card } from '../../../interfaces'
import Set from '../SM3+'

const card: Card = {
	set: Set,
	name: {
		ja: 'メラルバ'
	},

	illustrator: 'kawayoo',
	rarity: 'Common',
	category: 'Pokemon',
	dexId: [636],
	hp: 80,
	types: ['Fire'],

	description: {
		ja: '太陽から 生まれたと いわれる。 進化するとき ツノから 噴き出した 炎で 全身を 包みこむ。'
	},

	stage: 'Basic',

	attacks: [
		{
			name: { ja: 'ほのお' },
			damage: 30,
			cost: ['Fire', 'Colorless']
		}
	],

	weaknesses: [{ type: 'Water', value: "×2" }],
	resistances: [],

	retreat: 3,

	regulationMark: "A",
	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 560171,
				tcgplayer: 573927,
				cardtrader: 142414
			}
		}
	]
}

export default card
