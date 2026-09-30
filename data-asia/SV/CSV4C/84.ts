import { Card } from '../../../interfaces'
import Set from '../CSV4C'

const card: Card = {
	name: {
		'zh-cn': "双剑鞘"
	},
	illustrator: "Bun Toujo",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	dexId: [680],
	hp: 90,
	types: ["Metal"],
	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'zh-cn': "劈开"
			},
			damage: "20",
		},
		{
			cost: ["Metal", "Colorless"],
			name: {
				'zh-cn': "斩落"
			},
			effect: {
				'zh-cn': "在下一个自己的回合，这只宝可梦无法使用「斩落」。"
			},
			damage: "80",
		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 2,
	regulationMark: "G",
}

export default card
