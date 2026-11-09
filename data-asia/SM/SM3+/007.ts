import { Card } from '../../../interfaces'
import Set from '../SM3+'

const card: Card = {
	set: Set,
	name: {
		ja: 'マスキッパ'
	},

	illustrator: 'Tomokazu Komiya',
	rarity: 'Uncommon',
	category: 'Pokemon',
	dexId: [455],
	hp: 100,
	types: ['Grass'],

	description: {
		ja: '甘い においの だえきで 獲物を おびき寄せ おおあごで がぶり。 １日 かけて 獲物を 食べる。'
	},

	stage: 'Basic',

	attacks: [
		{
			name: { ja: 'さそいどく' },
			effect: {
				ja: '相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。その後、新しく出てきたポケモンをどくにする。'
			},
			cost: ['Grass']
		},
		{
			name: { ja: 'かみくだく' },
			effect: {
				ja: '相手のバトルポケモンについているエネルギーを、1個トラッシュする。'
			},
			damage: 30,
			cost: ['Grass', 'Colorless']
		}
	],

	weaknesses: [{ type: 'Fire', value: "×2" }],
	resistances: [],

	retreat: 2,

	regulationMark: "A",
	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 560165,
				tcgplayer: 573921,
				cardtrader: 142408
			}
		}
	]
}

export default card
