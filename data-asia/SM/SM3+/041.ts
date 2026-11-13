import { Card } from '../../../interfaces'
import Set from '../SM3+'

const card: Card = {
	set: Set,
	name: {
		ja: 'ひかるミュウ'
	},

	illustrator: 'Sanosuke Sakuma',
	rarity: "Rare Shining",
	category: 'Pokemon',
	dexId: [151],
	hp: 30,
	types: ['Psychic'],

	description: {
		ja: 'あらゆる 技を 使うため ポケモンの 先祖と 考える 学者が たくさん いる。'
	},

	stage: 'Basic',

	attacks: [
		{
			name: { ja: 'でんせつのみちびき' },
			effect: {
				ja: '自分の山札にあるエネルギーを2枚まで、自分のポケモンに好きなようにつける。そして山札を切る。'
			},
			cost: ['Psychic']
		},
		{
			name: { ja: 'ビーム' },
			damage: 10,
			cost: ['Psychic']
		}
	],

	weaknesses: [{ type: 'Psychic', value: "×2" }],
	resistances: [],

	retreat: 0,

	regulationMark: "A",
	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 560199,
				tcgplayer: 573955,
				cardtrader: 142442
			}
		}
	]
}

export default card
