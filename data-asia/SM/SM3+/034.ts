import { Card } from '../../../interfaces'
import Set from '../SM3+'

const card: Card = {
	set: Set,
	name: {
		ja: 'プラスル'
	},

	illustrator: 'Tomokazu Komiya',
	rarity: 'Common',
	category: 'Pokemon',
	dexId: [311],
	hp: 70,
	types: ['Lightning'],

	description: {
		ja: '火花の ボンボンを 作って 仲間を 応援する。 電柱から 電気を 吸い取る。'
	},

	stage: 'Basic',

	attacks: [
		{
			name: { ja: 'タッグブースト' },
			effect: {
				ja: '自分のベンチに「マイナン」がいるなら、50ダメージ追加。'
			},
			damage: '10+',
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
				cardmarket: 560192,
				tcgplayer: 573948,
				cardtrader: 142435
			}
		}
	]
}

export default card
