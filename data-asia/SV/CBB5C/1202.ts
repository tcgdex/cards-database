import { Card } from "../../../interfaces"
import Set from "../CBB5C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "海豹球",
	},

	illustrator: "Teeziro",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",
	attacks: [
		{
			cost: ["Water"],
			name: { 'zh-cn': "细雪" },
			effect: { 'zh-cn': "令对手的战斗宝可梦陷入【睡眠】状态。" },
			damage: 10,
		},
	],
	weaknesses: [{ type: "Metal", value: "x2" }],
	retreat: 2,
	regulationMark: "H",
	rarity: "Common",
	dexId: [363],
}

export default card
