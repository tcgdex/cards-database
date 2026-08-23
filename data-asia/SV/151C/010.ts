import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "绿毛虫",
	},

	illustrator: "Tika Matsuno",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],
	description: {
		'zh-cn': "别看它的脚很短，因为是吸盘，所以无论是斜坡还是墙壁都能轻松前进。",
	},
	stage: "Basic",
	attacks: [
		{
			cost: ["Grass"],
			name: { 'zh-cn': "啃食树叶" },
			effect: { 'zh-cn': "如果对手的战斗宝可梦为【草】宝可梦的话，则追加造成30伤害。" },
			damage: "10+",
		},
	],
	weaknesses: [{ type: "Fire", value: "x2" }],
	retreat: 1,
	regulationMark: "G",
	rarity: "Common",
	dexId: [10],
}

export default card
