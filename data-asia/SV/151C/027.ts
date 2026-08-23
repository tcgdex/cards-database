import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "穿山鼠",
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],
	description: {
		'zh-cn': "会在地上挖洞建造巢穴。挖洞时，即便遇到地里的坚硬岩石，也能用尖锐的爪子弄碎后继续挖进。",
	},
	stage: "Basic",
	abilities: [
		{
			type: "Ability",
			name: { 'zh-cn': "流沙藏身" },
			effect: { 'zh-cn': "只要这只宝可梦在场上，对手弃牌区中的训练家，就无法因为对手的物品或支援者的效果，被放回牌库。" },
		},
	],
	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: { 'zh-cn': "抓" },
			damage: 30,
		},
	],
	weaknesses: [{ type: "Grass", value: "x2" }],
	retreat: 1,
	regulationMark: "G",
	rarity: "Common",
	dexId: [27],
}

export default card
