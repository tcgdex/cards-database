import { Card } from "../../../interfaces"
import Set from "../CBB2C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "冰伊布",
	},

	illustrator: "OKACHEKE",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],
	evolveFrom: {
		'zh-cn': "伊布",
	},
	stage: "Stage1",
	attacks: [
		{
			cost: ["Water"],
			name: { 'zh-cn': "冰雹" },
			effect: { 'zh-cn': "给对手的所有宝可梦，各造成20点伤害。[备战宝可梦不计算弱点、抗性。]" },
		},
		{
			cost: ["Water", "Colorless", "Colorless"],
			name: { 'zh-cn': "冰霜台风" },
			effect: { 'zh-cn': "在下一个自己的回合，这只宝可梦无法使用「冰霜台风」。" },
			damage: 120,
		},
	],
	weaknesses: [{ type: "Metal", value: "x2" }],
	retreat: 1,
	regulationMark: "E",
	rarity: "Uncommon",
	dexId: [471],
}

export default card
