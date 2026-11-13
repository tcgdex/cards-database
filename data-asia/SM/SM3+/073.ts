import { Card } from '../../../interfaces'
import Set from '../SM3+'

const card: Card = {
	set: Set,
	name: {
		ja: 'エンテイGX'
	},

	illustrator: '5ban Graphics',
	rarity: 'Ultra Rare',
	category: 'Pokemon',
	dexId: [244],
	hp: 180,
	types: ['Fire'],

	stage: 'Basic',

	suffix: 'GX',

	attacks: [
		{
			name: { ja: 'かえん' },
			damage: 50,
			cost: ['Fire', 'Colorless']
		},
		{
			name: { ja: 'ほのおのキバ' },
			effect: {
				ja: '相手のバトルポケモンをやけどにする。'
			},
			damage: 100,
			cost: ['Fire', 'Fire', 'Colorless']
		},
		{
			name: { ja: 'ブレイブバーンGX' },
			effect: {
				ja: '相手のベンチポケモン1匹に、150ダメージ。［ベンチは弱点・抵抗力を計算しない。］［対戦中、自分はGXワザを1回しか使えない。］'
			},
			cost: ['Fire', 'Fire', 'Colorless']
		}
	],

	weaknesses: [{ type: 'Water', value: "×2" }],
	resistances: [],

	retreat: 2,

	regulationMark: "A",
	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 560231,
				tcgplayer: 573987,
				cardtrader: 142474
			}
		}
	]
}

export default card
