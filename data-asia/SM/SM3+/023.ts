import { Card } from '../../../interfaces'
import Set from '../SM3+'

const card: Card = {
	set: Set,
	name: {
		ja: 'ブイゼル'
	},

	illustrator: 'Sekio',
	rarity: 'Common',
	category: 'Pokemon',
	dexId: [418],
	hp: 60,
	types: ['Water'],

	description: {
		ja: '２本の 尻尾を スクリューの ように 回して 泳ぐ。 潜る ときは 浮き袋が しぼむ。'
	},

	stage: 'Basic',

	attacks: [
		{
			name: { ja: 'ひれカッター' },
			damage: 10,
			cost: ['Colorless']
		},
		{
			name: { ja: 'みずでっぽう' },
			damage: 40,
			cost: ['Water', 'Colorless', 'Colorless']
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
				cardmarket: 560181,
				tcgplayer: 573937,
				cardtrader: 142424
			}
		}
	]
}

export default card
