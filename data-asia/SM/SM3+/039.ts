import { Card } from '../../../interfaces'
import Set from '../SM3+'

const card: Card = {
	set: Set,
	name: {
		ja: 'ルージュラ'
	},

	illustrator: 'Tomokazu Komiya',
	rarity: 'Uncommon',
	category: 'Pokemon',
	dexId: [124],
	hp: 90,
	types: ['Psychic'],

	description: {
		ja: '腰を 振るように 歩いている。 油断をすると 思わず 釣られて 踊ってしまうという。'
	},

	stage: 'Basic',

	attacks: [
		{
			name: { ja: 'あまえごえ' },
			effect: {
				ja: '相手の手札からオモテを見ないで1枚選び、そのカードのオモテを見てから、相手の山札にもどして切る。'
			},
			cost: ['Psychic']
		},
		{
			name: { ja: 'モーレツキッス' },
			effect: {
				ja: '相手のバトルポケモンをこんらんにする。'
			},
			damage: 30,
			cost: ['Colorless', 'Colorless']
		}
	],

	weaknesses: [{ type: 'Psychic', value: "×2" }],
	resistances: [],

	retreat: 1,

	regulationMark: "A",
	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 560197,
				tcgplayer: 573953,
				cardtrader: 142440
			}
		}
	]
}

export default card
