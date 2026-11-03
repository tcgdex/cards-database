import { Card } from '../../../interfaces'
import Set from '../SM3+'

const card: Card = {
	set: Set,
	name: {
		ja: 'フシギバナ'
	},

	illustrator: 'Eske Yoshinob',
	category: 'Pokemon',
	hp: 160,
	types: ['Grass'],

	description: {
		ja: '大きな 花びらを 広げ 太陽の 光を 浴びていると 体に 元気が みなぎっていく。'
	},

	stage: 'Stage2',

	abilities: [
		{
			type: 'Ability',
			name: { ja: 'みつりんのぬし' },
			effect: {
				ja: "このポケモンがいるかぎり、自分の場のポケモンについているすべての基本{G}エネルギーは、それぞれ{G}エネルギー2個ぶんとしてはたらく。この効果は、この特性を持つポケモンが何匹いても、重ならない。"
			}
		}
	],

	attacks: [
		{
			name: { ja: 'ソーラービーム' },
			damage: 90,
			cost: ['Grass', 'Grass', 'Colorless', 'Colorless']
		}
	],

	weaknesses: [{ type: 'Fire', value: "×2" }],
	resistances: [],

	regulationMark: "A",
	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 560161,
				tcgplayer: 573917,
				cardtrader: 142404
			}
		}
	],

	evolveFrom: {
		ja: 'フシギソウ'
	},

	retreat: 4,
	rarity: 'Uncommon',
	dexId: [3]
}

export default card
