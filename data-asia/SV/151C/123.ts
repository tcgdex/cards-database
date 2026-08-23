import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "飞天螳螂",
	},

	illustrator: "Hideki Ishikawa",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	description: {
		'zh-cn': "会用锋利的镰刀割开草丛前进。因为动作实在太快，眼睛来不及看清。",
	},
	stage: "Basic",
	attacks: [
		{
			cost: ["Grass"],
			name: { 'zh-cn': "辅助斩" },
			effect: { 'zh-cn': "选择自己弃牌区中的1张「基本【草】能量」，附着于备战宝可梦身上。" },
			damage: 20,
		},
		{
			cost: ["Grass", "Colorless", "Colorless"],
			name: { 'zh-cn': "薄片利刃" },
			damage: 70,
		},
	],
	weaknesses: [{ type: "Fire", value: "x2" }],
	retreat: 0,
	regulationMark: "G",
	rarity: "Uncommon",
	dexId: [123],
}

export default card
