import { Card } from "../../../interfaces"
import Set from "../CBB4C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "火斑喵",
	},

	illustrator: "REND",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],
	stage: "Basic",
	attacks: [
		{
			cost: ["Fire"],
			name: { 'zh-cn': "击掌奇袭" },
			effect: { 'zh-cn': "抛掷1次硬币如果为正面，则令对手的战斗宝可梦陷入【麻痹】状态。" },
			damage: 10,
		},
	],
	weaknesses: [{ type: "Water", value: "x2" }],
	retreat: 2,
	regulationMark: "H",
	rarity: "Rare",
	dexId: [725],
}

export default card
