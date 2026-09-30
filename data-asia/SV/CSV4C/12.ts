import { Card } from '../../../interfaces'
import Set from '../CSV4C'

const card: Card = {
	name: {
		'zh-cn': "狠辣椒"
	},
	illustrator: "kodama",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	dexId: [952],
	hp: 110,
	types: ["Grass"],
	abilities: [
		{
			type: "Ability",
			name: {
				'zh-cn': "双重属性"
			},
			effect: {
				'zh-cn': "只要这只宝可梦在场上，属性变为【草】和【火】2种。"
			},
		},
	],
	attacks: [
		{
			cost: ["Grass", "Colorless", "Colorless"],
			name: {
				'zh-cn': "辛辣头击"
			},
			effect: {
				'zh-cn': "这个招式的伤害不计算抗性。"
			},
			damage: "110",
		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",
}

export default card
