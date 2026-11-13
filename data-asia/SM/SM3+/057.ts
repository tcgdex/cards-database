import { Card } from '../../../interfaces'
import Set from '../SM3+'

const card: Card = {
	set: Set,
	name: {
		ja: 'ひかるレックウザ'
	},

	illustrator: 'Naoki Saito',
	rarity: "Rare Shining",
	category: 'Pokemon',
	dexId: [384],
	hp: 120,
	types: ['Dragon'],

	description: {
		ja: '雲より はるか上の オゾン層に 生息しているため 地上から 姿を 見ることは できない。'
	},

	stage: 'Basic',

	attacks: [
		{
			name: { ja: 'りゅうのはどう' },
			effect: {
				ja: '自分の山札を上から2枚トラッシュする。'
			},
			damage: 40,
			cost: ['Lightning']
		},
		{
			name: { ja: 'てんくうのさばき' },
			effect: {
				ja: 'このポケモンについているエネルギーを、3個トラッシュする。'
			},
			damage: 190,
			cost: ['Fire', 'Lightning', 'Lightning', 'Colorless']
		}
	],

	weaknesses: [{ type: 'Fairy', value: "×2" }],
	resistances: [],

	retreat: 3,

	regulationMark: "A",
	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 560215,
				tcgplayer: 573971,
				cardtrader: 142458
			}
		}
	]
}

export default card
