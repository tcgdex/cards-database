import { Card } from '../../../interfaces'
import Set from '../SM3+'

const card: Card = {
	set: Set,
	name: {
		ja: 'ひかるルギア'
	},

	illustrator: 'Hitoshi Ariga',
	rarity: "Rare Shining",
	category: 'Pokemon',
	dexId: [249],
	hp: 130,
	types: ['Colorless'],

	description: {
		ja: '深い 海溝の 底で 眠る。 ルギアが 羽ばたくと ４０日 嵐が 続くと 言われている。'
	},

	stage: 'Basic',

	attacks: [
		{
			name: { ja: 'ぎんのつばさ' },
			effect: {
				ja: '相手のバトルポケモンが特性を持っているなら、60ダメージ追加。'
			},
			damage: '60+',
			cost: ['Colorless', 'Colorless', 'Colorless']
		},
		{
			name: { ja: 'エアロフォース' },
			effect: {
				ja: 'このポケモンについているエネルギーを、1個トラッシュする。'
			},
			damage: 130,
			cost: ['Colorless', 'Colorless', 'Colorless', 'Colorless']
		}
	],

	weaknesses: [{ type: 'Lightning', value: "×2" }],
	resistances: [{ type: 'Fighting', value: '-20' }],

	retreat: 2,

	regulationMark: "A",
	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 560216,
				tcgplayer: 573972,
				cardtrader: 142459
			}
		}
	]
}

export default card
