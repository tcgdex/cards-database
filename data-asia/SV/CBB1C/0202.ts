import { Card } from "../../../interfaces"
import Set from "../CBB1C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "蒂蕾喵",
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],
	evolveFrom: {
		'zh-cn': "新叶喵",
	},
	stage: "Stage1",
	attacks: [
		{
			cost: ["Grass"],
			name: { 'zh-cn': "种子炸弹" },
			damage: 30,
		},
		{
			cost: ["Colorless", "Colorless"],
			name: { 'zh-cn': "魔法鞭打" },
			effect: { 'zh-cn': "将对手的战斗宝可梦与备战宝可梦互换。[放于战斗场的宝可梦由对手选择。]" },
			damage: 50,
		},
	],
	weaknesses: [{ type: "Fire", value: "x2" }],
	retreat: 1,
	regulationMark: "G",
	rarity: "Common",
	dexId: [907],
}

export default card
