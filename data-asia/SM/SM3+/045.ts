import { Card } from '../../../interfaces'
import Set from '../SM3+'

const card: Card = {
	set: Set,
	name: {
		ja: 'ゴルーグ'
	},

	illustrator: 'Kagemaru Himeno',
	rarity: 'Uncommon',
	category: 'Pokemon',
	dexId: [623],
	hp: 140,
	types: ['Psychic'],

	evolveFrom: {
		ja: 'ゴビット'
	},

	description: {
		ja: 'ゴルーグを 作った 古代人から 人や ポケモンを 守るように 命令されていると 言われている。'
	},

	stage: 'Stage1',

	attacks: [
		{
			name: { ja: 'トリプルスマッシュ' },
			effect: {
				ja: "コインを3回投げ、オモテの数×60ダメージ追加。"
			},
			damage: '10+',
			cost: ['Psychic', 'Colorless', 'Colorless']
		},
		{
			name: { ja: 'ゴルーグハンマー' },
			damage: 120,
			cost: ['Psychic', 'Colorless', 'Colorless', 'Colorless']
		}
	],

	weaknesses: [{ type: 'Darkness', value: "×2" }],
	resistances: [{ type: 'Fighting', value: '-20' }],

	retreat: 4,

	regulationMark: "A",
	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 560203,
				tcgplayer: 573959,
				cardtrader: 142446
			}
		}
	]
}

export default card
