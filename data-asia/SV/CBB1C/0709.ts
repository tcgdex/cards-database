import { Card } from "../../../interfaces"
import Set from "../CBB1C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "船长 皮卡丘",
	},

	illustrator: "Yamazaki Rei",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",
	attacks: [
		{
			cost: ["Lightning", "Lightning", "Lightning"],
			name: { 'zh-cn': "伏特攻击" },
			effect: { 'zh-cn': "给这只宝可梦也造成30伤害。" },
			damage: 100,
		},
	],
	weaknesses: [{ type: "Fighting", value: "x2" }],
	retreat: 1,
	regulationMark: "G",
	rarity: "Triple Rare",
	dexId: [25],
}

export default card
