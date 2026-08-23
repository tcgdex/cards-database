import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "双弹瓦斯",
	},

	illustrator: "Shibuzoh.",
	category: "Pokemon",
	hp: 110,
	types: ["Darkness"],
	evolveFrom: {
		'zh-cn': "瓦斯弹",
	},
	description: {
		'zh-cn': "有时会因为非常罕见的突变，出现２个连接在一起的双胞胎小瓦斯弹。",
	},
	stage: "Stage1",
	abilities: [
		{
			type: "Ability",
			name: { 'zh-cn': "同命炸弹" },
			effect: { 'zh-cn': "当这只宝可梦，在战斗场上受到对手宝可梦的招式的伤害而【昏厥】时，自己抛掷1次硬币。如果为正面，则令使用了招式的宝可梦【昏厥】。" },
		},
	],
	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: { 'zh-cn': "旋转瓦斯" },
			effect: { 'zh-cn': "给对手所有的备战宝可梦，也各造成10伤害。[备战宝可梦不计算弱点、抗性。]" },
			damage: 50,
		},
	],
	weaknesses: [{ type: "Fighting", value: "x2" }],
	retreat: 2,
	regulationMark: "G",
	rarity: "Rare",
	dexId: [110],
}

export default card
