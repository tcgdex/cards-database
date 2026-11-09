import { Card } from '../../../interfaces'
import Set from '../SM3+'

const card: Card = {
	set: Set,
	name: {
		ja: 'マーシャドー'
	},

	illustrator: 'Emi Ando',
	rarity: 'Rare',
	category: 'Pokemon',
	dexId: [802],
	hp: 70,
	types: ['Psychic'],

	description: {
		ja: '影の中に 潜むことが でき 人前に 姿を みせないので その存在は 幻 だった。'
	},

	stage: 'Basic',

	abilities: [
		{
			type: 'Ability',
			name: { ja: 'やぶれかぶれ' },
			effect: {
				ja: '自分の番に、このカードを手札からベンチに出したとき、1回使える。おたがいのプレイヤーは、それぞれ手札をすべて山札にもどして切る。その後、それぞれ山札を4枚引く。'
			}
		}
	],

	attacks: [
		{
			name: { ja: 'シャドーパンチ' },
			effect: {
				ja: 'このワザのダメージは抵抗力を計算しない。'
			},
			damage: 30,
			cost: ['Psychic', 'Colorless']
		}
	],

	weaknesses: [{ type: 'Darkness', value: "×2" }],
	resistances: [{ type: 'Fighting', value: '-20' }],

	retreat: 1,

	regulationMark: "A",
	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 560204,
				tcgplayer: 573960,
				cardtrader: 142447
			}
		}
	]
}

export default card
