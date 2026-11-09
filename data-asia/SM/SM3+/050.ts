import { Card } from '../../../interfaces'
import Set from '../SM3+'

const card: Card = {
	set: Set,
	name: {
		ja: 'レパルダス'
	},

	illustrator: 'kawayoo',
	rarity: 'Uncommon',
	category: 'Pokemon',
	dexId: [510],
	hp: 90,
	types: ['Darkness'],

	evolveFrom: {
		ja: 'チョロネコ'
	},

	description: {
		ja: '美しい スタイルは 全身の 発達した 筋肉の おかげ。 音もたてずに 夜を 駆けぬける。'
	},

	stage: 'Stage1',

	attacks: [
		{
			name: { ja: 'いちゃもん' },
			effect: {
				ja: '相手のバトルポケモンが持っているワザを1つ選ぶ。次の相手の番、このワザを受けたポケモンは、選ばれたワザを使えない。'
			},
			damage: 30,
			cost: ['Darkness']
		},
		{
			name: { ja: 'きりさく' },
			damage: 60,
			cost: ['Darkness', 'Colorless']
		}
	],

	weaknesses: [{ type: 'Fighting', value: "×2" }],
	resistances: [{ type: 'Psychic', value: '-20' }],

	retreat: 1,

	regulationMark: "A",
	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 560208,
				tcgplayer: 573964,
				cardtrader: 142451
			}
		}
	]
}

export default card
