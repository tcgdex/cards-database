import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "快龙",
	},

	illustrator: "Sanosuke Sakuma",
	category: "Pokemon",
	hp: 180,
	types: ["Dragon"],
	evolveFrom: {
		'zh-cn': "哈克龙",
	},
	description: {
		'zh-cn': "在广阔大海的某处，似乎存在着只有快龙群居的岛。",
	},
	stage: "Stage2",
	abilities: [
		{
			type: "Ability",
			name: { 'zh-cn': "喷射巡航" },
			effect: { 'zh-cn': "只要这只宝可梦在场上，自己所有宝可梦的【撤退】所需能量，全部消除。" },
		},
	],
	attacks: [
		{
			cost: ["Water", "Lightning"],
			name: { 'zh-cn': "龙之波动" },
			effect: { 'zh-cn': "将自己牌库上方的2张卡牌放于弃牌区。" },
			damage: 180,
		},
	],
	retreat: 3,
	regulationMark: "G",
	rarity: "Rare",
	dexId: [149],
}

export default card
