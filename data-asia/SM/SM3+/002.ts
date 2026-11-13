import { Card } from '../../../interfaces'
import Set from '../SM3+'

const card: Card = {
	set: Set,
	name: {
		ja: 'フシギソウ'
	},

	illustrator: 'Kouki Saitou',
	rarity: 'Common',
	category: 'Pokemon',
	dexId: [2],
	hp: 100,
	types: ['Grass'],

	evolveFrom: {
		ja: 'フシギダネ'
	},

	description: {
		ja: 'つぼみが 背中に ついていて 養分を 吸収していくと 大きな 花が 咲くという。'
	},

	stage: 'Stage1',

	attacks: [
		{
			name: { ja: 'はっぱカッター' },
			damage: 30,
			cost: ['Grass', 'Colorless']
		},
		{
			name: { ja: 'もうどくのムチ' },
			effect: {
				ja: '相手のバトルポケモンをどくとこんらんにする。'
			},
			damage: 50,
			cost: ['Grass', 'Grass', 'Colorless', 'Colorless']
		}
	],

	weaknesses: [{ type: 'Fire', value: "×2" }],
	resistances: [],

	retreat: 4,

	regulationMark: "A",
	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 560160,
				tcgplayer: 573916,
				cardtrader: 142403
			}
		}
	]
}

export default card
