import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "镰刀盔",
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 160,
	types: ["Fighting"],
	evolveFrom: {
		'zh-cn': "化石盔",
	},
	description: {
		'zh-cn': "灭绝的原因尚不明确。曾经栖息在温暖的大海，是性格残暴的古代宝可梦。",
	},
	stage: "Stage2",
	abilities: [
		{
			type: "Ability",
			name: { 'zh-cn': "远古恒理" },
			effect: { 'zh-cn': "只要这只宝可梦在场上，对手战斗宝可梦的弱点按「×4」进行伤害计算。" },
		},
	],
	attacks: [
		{
			cost: ["Fighting", "Colorless", "Colorless"],
			name: { 'zh-cn': "吸取之刃" },
			effect: { 'zh-cn': "回复这只宝可梦「30」HP。" },
			damage: 100,
		},
	],
	weaknesses: [{ type: "Grass", value: "x2" }],
	retreat: 2,
	regulationMark: "G",
	rarity: "Rare",
	dexId: [141],
}

export default card
