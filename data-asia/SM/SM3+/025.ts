import { Card } from '../../../interfaces'
import Set from '../SM3+'

const card: Card = {
	set: Set,
	name: {
		ja: 'パルキア'
	},

	illustrator: 'Eske Yoshinob',
	rarity: 'Rare',
	category: 'Pokemon',
	dexId: [484],
	hp: 130,
	types: ['Water'],

	description: {
		ja: '並行して 並ぶ 空間の 狭間に 住むと 言われている。 神話に 登場する ポケモン。'
	},

	stage: 'Basic',

	attacks: [
		{
			name: { ja: 'スパイラルドレイン' },
			effect: {
				ja: 'このポケモンのHPを「30」回復する。'
			},
			damage: 30,
			cost: ['Colorless', 'Colorless']
		},
		{
			name: { ja: 'アクアブレード' },
			damage: 100,
			cost: ['Water', 'Water', 'Colorless']
		}
	],

	weaknesses: [{ type: 'Grass', value: "×2" }],
	resistances: [],

	retreat: 2,

	regulationMark: "A",
	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 560183,
				tcgplayer: 573939,
				cardtrader: 142426
			}
		}
	]
}

export default card
