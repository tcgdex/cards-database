import { Card } from '../../../interfaces'
import Set from '../SM3+'

const card: Card = {
	set: Set,
	name: {
		ja: 'ミュウツーGX'
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare Shining",
	category: 'Pokemon',
	dexId: [150],
	hp: 190,
	types: ['Psychic'],

	stage: 'Basic',

	suffix: 'GX',

	attacks: [
		{
			name: { ja: 'フルバースト' },
			effect: {
				ja: 'このポケモンについているエネルギーの数x30ダメージ。'
			},
			damage: '30×',
			cost: ['Psychic']
		},
		{
			name: { ja: 'ちょうきゅうしゅう' },
			effect: {
				ja: 'このポケモンのHPを「30」回復する。'
			},
			damage: 60,
			cost: ['Psychic', 'Colorless']
		},
		{
			name: { ja: 'サイコブレイクGX' },
			effect: {
				ja: 'このワザのダメージは、相手のバトルポケモンにかかっている効果を計算しない。［対戦中、自分はGXワザを1回しか使えない。］'
			},
			damage: 200,
			cost: ['Psychic', 'Psychic', 'Psychic']
		}
	],

	weaknesses: [{ type: 'Psychic', value: "×2" }],
	resistances: [],

	retreat: 2,

	regulationMark: "A",
	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 560240,
				tcgplayer: 573996,
				cardtrader: 142483
			}
		}
	]
}

export default card
