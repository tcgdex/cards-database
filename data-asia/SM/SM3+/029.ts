import { Card } from '../../../interfaces'
import Set from '../SM3+'

const card: Card = {
	set: Set,
	name: {
		ja: 'ピカチュウ'
	},

	illustrator: 'Kagemaru Himeno',
	rarity: 'Common',
	category: 'Pokemon',
	dexId: [25],
	hp: 60,
	types: ['Lightning'],

	description: {
		ja: 'たくさんの ピカチュウを 集め 発電所を 造る 計画が 最近 発表 された。'
	},

	stage: 'Basic',

	attacks: [
		{
			name: { ja: 'アイアンテール' },
			effect: {
				ja: "ウラが出るまでコインを投げ、オモテの数×20ダメージ。"
			},
			damage: '20×',
			cost: ['Lightning']
		}
	],

	weaknesses: [{ type: 'Fighting', value: "×2" }],
	resistances: [{ type: 'Metal', value: '-20' }],

	retreat: 1,

	regulationMark: "A",
	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 560187,
				tcgplayer: 573943,
				cardtrader: 142430
			}
		}
	]
}

export default card
