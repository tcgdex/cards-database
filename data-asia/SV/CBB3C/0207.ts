import { Card } from "../../../interfaces"
import Set from "../CBB3C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "喵喵",
	},

	illustrator: "Makura Tami",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",
	attacks: [
		{
			cost: ["Colorless"],
			name: { 'zh-cn': "招财猫" },
			effect: { 'zh-cn': "抛掷1次硬币如果为正面，则选择对手的1只备战宝可梦，将其与战斗宝可梦互换。" },
		},
		{
			cost: ["Colorless", "Colorless"],
			name: { 'zh-cn': "亮爪" },
			damage: 20,
		},
	],
	weaknesses: [{ type: "Fighting", value: "x2" }],
	retreat: 1,
	regulationMark: "G",
	rarity: "Triple Rare",
	dexId: [52],
}

export default card
