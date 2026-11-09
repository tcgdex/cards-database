import { Card } from '../../../interfaces'
import Set from '../SM3+'

const card: Card = {
	set: Set,
	name: {
		ja: 'ゾロアークGX'
	},

	illustrator: '5ban Graphics',
	rarity: 'Double rare',
	category: 'Pokemon',
	dexId: [571],
	hp: 210,
	types: ['Darkness'],

	evolveFrom: {
		ja: 'ゾロア'
	},

	stage: 'Stage1',

	suffix: 'GX',

	abilities: [
		{
			type: 'Ability',
			name: { ja: 'とりひき' },
			effect: {
				ja: '自分の番に1回使える。自分の手札を1枚トラッシュする。その後、山札を2枚引く。'
			}
		}
	],

	attacks: [
		{
			name: { ja: 'ライオットビート' },
			effect: {
				ja: "自分の場のポケモンの数×20ダメージ。"
			},
			damage: '20×',
			cost: ['Colorless', 'Colorless']
		},
		{
			name: { ja: 'トリックスターGX' },
			effect: {
				ja: '相手の場のポケモンが持っているワザを1つ選び、このワザとして使う。［対戦中、自分はGXワザを1回しか使えない。］'
			},
			cost: ['Darkness', 'Darkness']
		}
	],

	weaknesses: [{ type: 'Fighting', value: "×2" }],
	resistances: [{ type: 'Psychic', value: '-20' }],

	retreat: 2,

	regulationMark: "A",
	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 560212,
				tcgplayer: 573968,
				cardtrader: 142455
			}
		}
	]
}

export default card
