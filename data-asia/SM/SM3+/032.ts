import { Card } from '../../../interfaces'
import Set from '../SM3+'

const card: Card = {
	set: Set,
	name: {
		ja: 'マルマイン'
	},

	illustrator: 'Kyoko Umemoto',
	rarity: 'Uncommon',
	category: 'Pokemon',
	dexId: [101],
	hp: 90,
	types: ['Lightning'],

	evolveFrom: {
		ja: 'ビリリダマ'
	},

	description: {
		ja: '少しの 刺激に 反応して 爆発する。 バクダンボールという あだ名で 怖がられている。'
	},

	stage: 'Stage1',

	attacks: [
		{
			name: { ja: 'スピードスター' },
			effect: {
				ja: 'このワザのダメージは、弱点・抵抗力と、相手のバトルポケモンにかかっている効果を計算しない。'
			},
			damage: 60,
			cost: ['Lightning']
		}
	],

	weaknesses: [{ type: 'Fighting', value: "×2" }],
	resistances: [{ type: 'Metal', value: '-20' }],

	retreat: 0,

	regulationMark: "A",
	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 560190,
				tcgplayer: 573946,
				cardtrader: 142433
			}
		}
	]
}

export default card
