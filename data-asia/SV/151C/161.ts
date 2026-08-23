import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "勇基拉",
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],
	evolveFrom: {
		'zh-cn': "凯西",
	},
	description: {
		'zh-cn': "念力的威力大得惊人。会把精神力量储存在额头的星星里，以备进化之需。",
	},
	stage: "Stage1",
	attacks: [
		{
			cost: ["Psychic"],
			name: { 'zh-cn': "瞬移攻击" },
			effect: { 'zh-cn': "将这只宝可梦与备战宝可梦互换。" },
			damage: 30,
		},
	],
	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],
	retreat: 1,
	regulationMark: "G",
	rarity: "Shiny rare",
	dexId: [64],
}

export default card
