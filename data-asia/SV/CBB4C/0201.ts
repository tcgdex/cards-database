import { Card } from "../../../interfaces"
import Set from "../CBB4C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "大舌头",
	},

	illustrator: "nisimono",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],
	stage: "Basic",
	attacks: [
		{
			cost: ["Colorless"],
			name: { 'zh-cn': "舌头牵引" },
			effect: { 'zh-cn': "查看对手的手牌，选择其中最多2张【基础】宝可梦，放于对手的备战区。" },
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: { 'zh-cn': "怪力" },
			damage: 50,
		},
	],
	weaknesses: [{ type: "Fighting", value: "x2" }],
	retreat: 3,
	regulationMark: "H",
	rarity: "Common",
	dexId: [108],
}

export default card
