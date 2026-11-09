import { Card } from '../../../interfaces'
import Set from '../SM3+'

const card: Card = {
	set: Set,
	name: {
		ja: 'ニャビー'
	},

	illustrator: 'Mitsuhiro Arita',
	rarity: 'Common',
	category: 'Pokemon',
	dexId: [725],
	hp: 60,
	types: ['Fire'],

	description: {
		ja: '毛づくろいで お腹に 溜まった 抜け毛を 燃やして 火を 吹く。 毛の 吐きかたで 炎も 変化。'
	},

	stage: 'Basic',

	attacks: [
		{
			name: { ja: 'ひだね' },
			damage: 20,
			cost: ['Fire']
		}
	],

	weaknesses: [{ type: 'Water', value: "×2" }],
	resistances: [],

	retreat: 1,

	regulationMark: "A",
	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 560174,
				tcgplayer: 573930,
				cardtrader: 142417
			}
		}
	]
}

export default card
