import { Card } from '../../../interfaces'
import Set from '../SM3+'

const card: Card = {
	set: Set,
	name: {
		ja: 'ワニノコ'
	},

	illustrator: 'TOKIYA',
	rarity: 'Common',
	category: 'Pokemon',
	dexId: [158],
	hp: 70,
	types: ['Water'],

	description: {
		ja: '小さいながらも 暴れん坊。 目の前で 動くものが あれば とにかく かみついてくる。'
	},

	stage: 'Basic',

	attacks: [
		{
			name: { ja: 'みずでっぽう' },
			damage: 10,
			cost: ['Water']
		},
		{
			name: { ja: 'かみつく' },
			damage: 20,
			cost: ['Water', 'Colorless']
		}
	],

	weaknesses: [{ type: 'Grass', value: "×2" }],
	resistances: [],

	retreat: 1,

	regulationMark: "A",
	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 560177,
				tcgplayer: 573933,
				cardtrader: 142420
			}
		}
	]
}

export default card
