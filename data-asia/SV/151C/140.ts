import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "化石盔",
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],
	evolveFrom: {
		'zh-cn': "谜之化石",
	},
	description: {
		'zh-cn': "虽然存在已经灭绝的说法，但据说在一部分地区还是经常能见到它的身影。",
	},
	stage: "Stage1",
	attacks: [
		{
			cost: ["Fighting", "Colorless"],
			name: { 'zh-cn': "双重抓" },
			effect: { 'zh-cn': "抛掷2次硬币，造成正面次数×70伤害。" },
			damage: "70×",
		},
	],
	weaknesses: [{ type: "Grass", value: "x2" }],
	retreat: 2,
	regulationMark: "G",
	rarity: "Uncommon",
	dexId: [140],
}

export default card
