import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "小拳石",
	},

	illustrator: "Uta",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],
	description: {
		'zh-cn': "会用双手登上险峻的悬崖。人们好像是在看到它那身姿之后，才开始了抱石攀岩运动。",
	},
	stage: "Basic",
	attacks: [
		{
			cost: ["Fighting"],
			name: { 'zh-cn': "硬邦邦" },
			effect: { 'zh-cn': "在下一个对手的回合，这只宝可梦所受到的招式的伤害「-30」。" },
		},
		{
			cost: ["Fighting", "Colorless"],
			name: { 'zh-cn': "握紧拳头" },
			damage: 20,
		},
	],
	weaknesses: [{ type: "Grass", value: "x2" }],
	retreat: 2,
	regulationMark: "G",
	rarity: "Common",
	dexId: [74],
}

export default card
