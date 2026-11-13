import { Card } from '../../../interfaces'
import Set from '../SM3+'

const card: Card = {
	set: Set,
	name: {
		ja: 'キノガッサ'
	},

	illustrator: 'Mizue',
	rarity: 'Uncommon',
	category: 'Pokemon',
	dexId: [286],
	hp: 110,
	types: ['Grass'],

	evolveFrom: {
		ja: 'キノココ'
	},

	description: {
		ja: '短い 腕は パンチを 出すとき グーンと 伸びる。 プロボクサー 顔負けの テクニックを 持つ。'
	},

	stage: 'Stage1',

	attacks: [
		{
			name: { ja: 'じゅくすいほうし' },
			effect: {
				ja: '相手のバトルポケモンをねむりにする。このねむりで投げるコインは2回になり、すべてオモテが出ないと回復しない。'
			},
			cost: ['Grass']
		},
		{
			name: { ja: 'マグナムパンチ' },
			damage: 80,
			cost: ['Colorless', 'Colorless', 'Colorless']
		}
	],

	weaknesses: [{ type: 'Fire', value: "×2" }],
	resistances: [],

	retreat: 2,

	regulationMark: "A",
	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 560164,
				tcgplayer: 573920,
				cardtrader: 142407
			}
		}
	]
}

export default card
