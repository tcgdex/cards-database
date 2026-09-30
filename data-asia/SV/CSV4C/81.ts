import { Card } from '../../../interfaces'
import Set from '../CSV4C'

const card: Card = {
	name: {
		'zh-cn': "巨钳螳螂"
	},
	illustrator: "otumami",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	dexId: [212],
	hp: 140,
	types: ["Metal"],
	attacks: [
		{
			cost: ["Metal"],
			name: {
				'zh-cn': "惩罚巨钳"
			},
			effect: {
				'zh-cn': "追加造成对手场上拥有特性的宝可梦数量×50伤害。"
			},
			damage: "10+",
		},
		{
			cost: ["Metal", "Metal"],
			name: {
				'zh-cn': "居合劈"
			},
			damage: "70",
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
