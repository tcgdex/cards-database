import { Card } from '../../../interfaces'
import Set from '../CSV4C'

const card: Card = {
	name: {
		'zh-cn': "奥利纽"
	},
	illustrator: "Mizue",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	dexId: [929],
	hp: 80,
	types: ["Grass"],
	attacks: [
		{
			cost: ["Grass"],
			name: {
				'zh-cn': "太阳之风"
			},
			effect: {
				'zh-cn': "回复这只宝可梦「30」HP。"
			},
			damage: "30",
		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",
}

export default card
