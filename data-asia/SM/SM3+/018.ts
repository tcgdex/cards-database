import { Card } from '../../../interfaces'
import Set from '../SM3+'

const card: Card = {
	set: Set,
	name: {
		ja: 'ガオガエン'
	},

	illustrator: 'Emi Ando',
	rarity: 'Uncommon',
	category: 'Pokemon',
	dexId: [727],
	hp: 170,
	types: ['Fire'],

	evolveFrom: {
		ja: 'ニャヒート'
	},

	description: {
		ja: '粗暴で 身勝手な 性格。 気分が 乗らなければ トレーナーの 命令も 平気で 無視するぞ。'
	},

	stage: 'Stage2',

	attacks: [
		{
			name: { ja: 'ガッデムパンチ' },
			effect: {
				ja: '自分のベンチポケモンにダメカンがのっているなら、80ダメージ追加。'
			},
			damage: '50+',
			cost: ['Fire', 'Colorless']
		},
		{
			name: { ja: 'フレアドライブ' },
			effect: {
				ja: "このポケモンについている{R}エネルギーを、すべてトラッシュする。"
			},
			damage: 180,
			cost: ['Fire', 'Fire', 'Colorless']
		}
	],

	weaknesses: [{ type: 'Water', value: "×2" }],
	resistances: [],

	retreat: 2,

	regulationMark: "A",
	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 560176,
				tcgplayer: 573932,
				cardtrader: 142419
			}
		}
	]
}

export default card
