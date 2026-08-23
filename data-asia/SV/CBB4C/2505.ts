import { Card } from "../../../interfaces"
import Set from "../CBB4C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "古月鸟",
	},

	illustrator: "OKACHEKE",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],
	stage: "Basic",
	attacks: [
		{
			cost: ["Water"],
			name: { 'zh-cn': "水枪" },
			damage: 20,
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: { 'zh-cn': "喷吐射击" },
			effect: { 'zh-cn': "将这只宝可梦身上附着的所有能量放于弃牌区，给对手的1只宝可梦，造成120伤害。[备战宝可梦不计算弱点、抗性。]" },
		},
	],
	weaknesses: [{ type: "Lightning", value: "x2" }],
	retreat: 1,
	regulationMark: "H",
	rarity: "Rare",
	dexId: [845],
}

export default card
