import { Card } from "../../../interfaces"
import Set from "../CBB1C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "布土拨",
	},

	illustrator: "Saya Tsuruta",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],
	evolveFrom: {
		'zh-cn': "布拨",
	},
	stage: "Stage1",
	attacks: [
		{
			cost: ["Lightning"],
			name: { 'zh-cn': "电击" },
			effect: { 'zh-cn': "抛掷1次硬币如果为正面,则令对手的战斗宝可梦陷入【麻痹】状态。" },
			damage: 30,
		},
		{
			cost: ["Lightning", "Lightning", "Colorless"],
			name: { 'zh-cn': "伏特头击" },
			damage: 70,
		},
	],
	weaknesses: [{ type: "Fighting", value: "x2" }],
	retreat: 1,
	regulationMark: "G",
	rarity: "Common",
	dexId: [922],
}

export default card
