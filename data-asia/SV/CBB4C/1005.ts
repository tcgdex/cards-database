import { Card } from "../../../interfaces"
import Set from "../CBB4C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "聒噪鸟",
	},

	illustrator: "GOTO minori",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",
	attacks: [
		{
			cost: ["Colorless"],
			name: { 'zh-cn': "无伴奏合唱" },
			effect: { 'zh-cn': "选择自己牌库中最多3张【基础】宝可梦，放于备战区。并重洗牌库。" },
		},
		{
			cost: ["Colorless"],
			name: { 'zh-cn': "起风" },
			damage: 20,
		},
	],
	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],
	retreat: 1,
	regulationMark: "H",
	rarity: "Rare",
	dexId: [441],
}

export default card
