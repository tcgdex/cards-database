import { Card } from "../../../interfaces"
import Set from "../CBB4C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "霏欧纳",
	},

	illustrator: "aspara",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",
	attacks: [
		{
			cost: ["Colorless"],
			name: { 'zh-cn': "招揽" },
			effect: { 'zh-cn': "选择自己弃牌区中的1张支援者，在给对手看过之后，加入手牌。" },
		},
		{
			cost: ["Water"],
			name: { 'zh-cn': "能量压制" },
			effect: { 'zh-cn': "造成对手战斗宝可梦身上附着的能量数量×20伤害。" },
			damage: "20×",
		},
	],
	weaknesses: [{ type: "Lightning", value: "x2" }],
	retreat: 1,
	regulationMark: "H",
	rarity: "Uncommon",
	dexId: [489],
}

export default card
