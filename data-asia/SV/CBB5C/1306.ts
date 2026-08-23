import { Card } from "../../../interfaces"
import Set from "../CBB5C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "拉帝欧斯",
	},

	illustrator: "kantaro",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],
	stage: "Basic",
	attacks: [
		{
			cost: ["Psychic", "Colorless"],
			name: { 'zh-cn': "直击飞行" },
			effect: { 'zh-cn': "给对手的1只宝可梦，造成50伤害。[备战宝可梦不计算弱点、抗性。]" },
		},
		{
			cost: ["Psychic", "Psychic", "Colorless"],
			name: { 'zh-cn': "喷射头击" },
			damage: 110,
		},
	],
	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],
	retreat: 2,
	regulationMark: "H",
	rarity: "Double rare",
	dexId: [381],
}

export default card
