import { Card } from '../../../interfaces'
import Set from '../CSV4C'

const card: Card = {
	name: {
		'zh-cn': "鬃岩狼人"
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	dexId: [745],
	hp: 130,
	types: ["Fighting"],
	attacks: [
		{
			cost: ["Fighting"],
			name: {
				'zh-cn': "致命之牙"
			},
			effect: {
				'zh-cn': "如果对手的战斗宝可梦身上没有放置伤害指示物的话，则这个招式失败。"
			},
			damage: "90",
		},
		{
			cost: ["Fighting", "Colorless", "Colorless"],
			name: {
				'zh-cn': "利爪挥砍"
			},
			damage: "100",
		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",
}

export default card
