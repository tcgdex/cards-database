import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "多边兽",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	description: {
		'zh-cn': "近年来十分活跃于电脑空间。到处检查有没有可疑的数据。",
	},
	stage: "Basic",
	attacks: [
		{
			cost: ["Colorless"],
			name: { 'zh-cn': "纹理4" },
			effect: { 'zh-cn': "从【草】【火】【水】【雷】【超】【斗】【恶】【钢】【龙】中选择1种属性。受到这个招式影响的宝可梦的弱点，变为被选择的属性。这个效果，一直持续到受到这个招式影响的宝可梦离开战斗场。［弱点按「×2」进行伤害计算。］" },
		},
	],
	weaknesses: [{ type: "Fighting", value: "x2" }],
	retreat: 1,
	regulationMark: "G",
	rarity: "Common",
	dexId: [137],
}

export default card
