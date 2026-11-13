import { Card } from '../../../interfaces'
import Set from '../SM3+'

const card: Card = {
	set: Set,
	name: {
		ja: 'マッギョ'
	},

	illustrator: 'Naoyo Kimura',
	rarity: 'Uncommon',
	category: 'Pokemon',
	dexId: [618],
	hp: 110,
	types: ['Fighting'],

	description: {
		ja: '皮膚が 硬いので 相撲取りに 踏まれても 平気。 電気を 流すとき 笑い顔に なる。'
	},

	stage: 'Basic',

	attacks: [
		{
			name: { ja: 'でんきショック' },
			effect: {
				ja: 'コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。'
			},
			damage: 30,
			cost: ['Lightning', 'Colorless']
		},
		{
			name: { ja: 'ヘッドボルト' },
			damage: 70,
			cost: ['Lightning', 'Colorless', 'Colorless']
		}
	],

	weaknesses: [{ type: 'Grass', value: "×2" }],
	resistances: [],

	retreat: 3,

	regulationMark: "A",
	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 560205,
				tcgplayer: 573961,
				cardtrader: 142448
			}
		}
	]
}

export default card
