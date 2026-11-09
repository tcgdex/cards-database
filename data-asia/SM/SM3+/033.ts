import { Card } from '../../../interfaces'
import Set from '../SM3+'

const card: Card = {
	set: Set,
	name: {
		ja: 'ライコウ'
	},

	illustrator: 'Mitsuhiro Arita',
	rarity: 'Rare',
	category: 'Pokemon',
	dexId: [243],
	hp: 120,
	types: ['Lightning'],

	description: {
		ja: '雨雲を 背負っているので どんなときでも 雷を 出せる。 雷とともに 落ちてきたという。'
	},

	stage: 'Basic',

	attacks: [
		{
			name: { ja: 'とどろくらいめい' },
			effect: {
				ja: "自分のトラッシュにある{L}エネルギーを1枚、ベンチポケモンにつける。"
			},
			damage: 30,
			cost: ['Lightning']
		},
		{
			name: { ja: 'ライトニングボール' },
			damage: 90,
			cost: ['Lightning', 'Lightning', 'Colorless']
		}
	],

	weaknesses: [{ type: 'Fighting', value: "×2" }],
	resistances: [{ type: 'Metal', value: '-20' }],

	retreat: 2,

	regulationMark: "A",
	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 560191,
				tcgplayer: 573947,
				cardtrader: 142434
			}
		}
	]
}

export default card
