import { Card } from "../../../interfaces"
import Set from "../CBB2C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "月亮伊布",
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 110,
	types: ["Darkness"],
	evolveFrom: {
		'zh-cn': "伊布",
	},
	stage: "Stage1",
	attacks: [
		{
			cost: ["Darkness"],
			name: { 'zh-cn': "暗中奇袭" },
			effect: { 'zh-cn': "给身上放置有伤害指示物的1只对手的宝可梦，造成60点伤害。[备战宝可梦不计算弱点、抗性。]" },
		},
		{
			cost: ["Darkness", "Colorless", "Colorless"],
			name: { 'zh-cn': "月亮幻影" },
			effect: { 'zh-cn': "使对手的战斗宝可梦陷入【混乱】状态。" },
			damage: 80,
		},
	],
	weaknesses: [{ type: "Grass", value: "x2" }],
	retreat: 1,
	regulationMark: "E",
	rarity: "Double rare",
	dexId: [197],
}

export default card
