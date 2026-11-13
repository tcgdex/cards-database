import { Card } from '../../../interfaces'
import Set from '../SM3+'

const card: Card = {
	set: Set,
	name: {
		ja: 'アーボ'
	},

	illustrator: 'DemizuPosuka',
	rarity: 'Common',
	category: 'Pokemon',
	dexId: [23],
	hp: 70,
	types: ['Psychic'],

	description: {
		ja: '育つほどに どんどん 長くなる。 そして 夜中は 木の枝に グルグルと 絡まって 休む。'
	},

	stage: 'Basic',

	attacks: [
		{
			name: { ja: 'どくばり' },
			effect: {
				ja: 'コインを1回投げオモテなら、相手のバトルポケモンをどくにする。'
			},
			damage: 10,
			cost: ['Colorless']
		}
	],

	weaknesses: [{ type: 'Psychic', value: "×2" }],
	resistances: [],

	retreat: 2,

	regulationMark: "A",
	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 560195,
				tcgplayer: 573951,
				cardtrader: 142438
			}
		}
	]
}

export default card
