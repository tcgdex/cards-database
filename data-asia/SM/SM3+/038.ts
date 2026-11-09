import { Card } from '../../../interfaces'
import Set from '../SM3+'

const card: Card = {
	set: Set,
	name: {
		ja: 'アーボック'
	},

	illustrator: 'kodama',
	rarity: 'Uncommon',
	category: 'Pokemon',
	dexId: [24],
	hp: 120,
	types: ['Psychic'],

	evolveFrom: {
		ja: 'アーボ'
	},

	description: {
		ja: 'お腹の 模様が 怖い 顔に 見える。 弱い 敵は その模様を 見ただけで 逃げ出してしまう。'
	},

	stage: 'Stage1',

	abilities: [
		{
			type: 'Ability',
			name: { ja: 'いかくのもよう' },
			effect: {
				ja: 'このポケモンがバトル場にいるかぎり、相手のバトルポケモンが使うワザのダメージは、すべて「-30」される。'
			}
		}
	],

	attacks: [
		{
			name: { ja: 'どくのキバ' },
			effect: {
				ja: '相手のバトルポケモンをどくにする。'
			},
			damage: 70,
			cost: ['Psychic', 'Colorless', 'Colorless']
		}
	],

	weaknesses: [{ type: 'Psychic', value: "×2" }],
	resistances: [],

	retreat: 3,

	regulationMark: "A",
	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 560196,
				tcgplayer: 573952,
				cardtrader: 142439
			}
		}
	]
}

export default card
