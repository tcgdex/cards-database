import { Card } from "../../../interfaces"
import Set from "../CBB4C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "雪吞虫",
	},

	illustrator: "N-DESIGN Inc.",
	category: "Pokemon",
	hp: 50,
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
	rarity: "Triple Rare",
	dexId: [872],
}

export default card
