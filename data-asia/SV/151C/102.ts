import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "蛋蛋",
	},

	illustrator: "Shigenori Negishi",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	description: {
		'zh-cn': "６只不在一起就不安心。哪怕只是少了１只，都会马上想要逃跑。",
	},
	stage: "Basic",
	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: { 'zh-cn': "滚球" },
			effect: { 'zh-cn': "抛掷硬币直到出现反面，造成正面次数×30伤害。" },
			damage: "30×",
		},
	],
	weaknesses: [{ type: "Fire", value: "x2" }],
	retreat: 1,
	regulationMark: "G",
	rarity: "Common",
	dexId: [102],
}

export default card
