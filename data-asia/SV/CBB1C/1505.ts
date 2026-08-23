import { Card } from "../../../interfaces"
import Set from "../CBB1C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "吉利蛋",
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],
	stage: "Basic",
	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: { 'zh-cn': "拍击" },
			damage: 40,
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: { 'zh-cn': "滚滚蛋来" },
			effect: { 'zh-cn': "抛掷硬币直到出现反面，造成正面次数×60伤害。" },
			damage: "60×",
		},
	],
	weaknesses: [{ type: "Fighting", value: "x2" }],
	retreat: 2,
	regulationMark: "G",
	rarity: "Double rare",
	dexId: [113],
}

export default card
