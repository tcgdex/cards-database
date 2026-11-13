import { Card } from '../../../interfaces'
import Set from '../SM3+'

const card: Card = {
	set: Set,
	name: {
		ja: 'キノココ'
	},

	illustrator: 'kawayoo',
	rarity: 'Common',
	category: 'Pokemon',
	dexId: [285],
	hp: 60,
	types: ['Grass'],

	description: {
		ja: '湿った 場所を 好み 昼間は 森の 木陰で じっと している。 頭から 毒の 粉を 出す。'
	},

	stage: 'Basic',

	attacks: [
		{
			name: { ja: 'すいとる' },
			effect: {
				ja: 'このポケモンのHPを「20」回復する。'
			},
			damage: 20,
			cost: ['Colorless', 'Colorless']
		}
	],

	weaknesses: [{ type: 'Fire', value: "×2" }],
	resistances: [],

	retreat: 1,

	regulationMark: "A",
	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 560163,
				tcgplayer: 573919,
				cardtrader: 142406
			}
		}
	]
}

export default card
