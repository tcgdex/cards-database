import { Card } from "../../../interfaces"
import Set from "../CBB6C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "灯罩夜菇",
	},

	illustrator: "Aya Kusube",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],
	evolveFrom: {
		'zh-cn': "睡睡菇",
	},
	stage: "Stage1",
	abilities: [
		{
			type: "Ability",
			name: { 'zh-cn': "安抚之光" },
			effect: { 'zh-cn': "如果这只宝可梦在战斗场上的话，则在自己的回合可以使用1次。令对手的战斗宝可梦陷入【睡眠】状态。" },
		},
	],
	attacks: [
		{
			cost: ["Grass", "Colorless"],
			name: { 'zh-cn': "螺旋突进" },
			effect: { 'zh-cn': "抛掷硬币直到出现反面，追加造成正面次数×30伤害。" },
			damage: "60+",
		},
	],
	weaknesses: [{ type: "Fire", value: "x2" }],
	retreat: 2,
	regulationMark: "H",
	rarity: "Double rare",
	dexId: [756],
}

export default card
