import { Card } from '../../../interfaces'
import Set from '../SM3+'

const card: Card = {
	set: Set,
	name: {
		ja: 'オーダイル'
	},

	illustrator: 'nagimiso',
	rarity: 'Uncommon',
	category: 'Pokemon',
	dexId: [160],
	hp: 160,
	types: ['Water'],

	evolveFrom: {
		ja: 'アリゲイツ'
	},

	description: {
		ja: '普段は ゆっくりとした 動きだが 獲物に かみつくときは 目にも 止まらない スピードだ。'
	},

	stage: 'Stage2',

	attacks: [
		{
			name: { ja: 'かみくだく' },
			effect: {
				ja: '相手のバトルポケモンについているエネルギーを、1個トラッシュする。'
			},
			damage: 80,
			cost: ['Water', 'Colorless', 'Colorless']
		},
		{
			name: { ja: 'ハイドロスプラッシュ' },
			damage: 130,
			cost: ['Water', 'Colorless', 'Colorless', 'Colorless']
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
				cardmarket: 560179,
				tcgplayer: 573935,
				cardtrader: 142422
			}
		}
	]
}

export default card
