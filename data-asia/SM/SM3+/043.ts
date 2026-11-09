import { Card } from '../../../interfaces'
import Set from '../SM3+'

const card: Card = {
	set: Set,
	name: {
		ja: 'ひかるジラーチ'
	},

	illustrator: 'Shigenori Negishi',
	rarity: "Rare Shining",
	category: 'Pokemon',
	dexId: [385],
	hp: 70,
	types: ['Psychic'],

	description: {
		ja: '目覚めた とき 頭の 短冊に 書かれた 願い事を かなえると 大昔から 語り継がれてきた。'
	},

	stage: 'Basic',

	attacks: [
		{
			name: { ja: 'ほしのさだめ' },
			effect: {
				ja: '相手の進化しているバトルポケモンから、「進化カード」をすべてはがして退化させる。はがしたカードは、相手の手札にもどす。'
			},
			damage: 10,
			cost: ['Psychic']
		}
	],

	weaknesses: [{ type: 'Psychic', value: "×2" }],
	resistances: [],

	retreat: 1,

	regulationMark: "A",
	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 560201,
				tcgplayer: 573957,
				cardtrader: 142444
			}
		}
	]
}

export default card
