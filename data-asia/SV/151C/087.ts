import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "白海狮",
	},

	illustrator: "aoki",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],
	evolveFrom: {
		'zh-cn': "小海狮",
	},
	description: {
		'zh-cn': "进食后会在沙滩上晒日光浴。会通过提高体温来帮助消化。",
	},
	stage: "Stage1",
	attacks: [
		{
			cost: ["Water", "Colorless"],
			name: { 'zh-cn': "双重飞溅" },
			effect: { 'zh-cn': "给对手的2只宝可梦，各造成50伤害。[备战宝可梦不计算弱点、抗性。]" },
		},
		{
			cost: ["Water", "Colorless", "Colorless"],
			name: { 'zh-cn': "极光束" },
			damage: 100,
		},
	],
	weaknesses: [{ type: "Lightning", value: "x2" }],
	retreat: 2,
	regulationMark: "G",
	rarity: "Uncommon",
	dexId: [87],
}

export default card
