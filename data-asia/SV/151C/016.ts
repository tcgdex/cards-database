import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "波波",
	},

	illustrator: "Oswaldo KATO",
	category: "Pokemon",
	hp: 50,
	types: ["Colorless"],
	description: {
		'zh-cn': "虽然它性情温和不喜战斗，但要是随意对它出手的话，就会受到它强烈的反击。",
	},
	stage: "Basic",
	attacks: [
		{
			cost: ["Colorless"],
			name: { 'zh-cn': "呼朋引伴" },
			effect: { 'zh-cn': "选择自己牌库中最多2张【基础】宝可梦，放于备战区。并重洗牌库。" },
		},
		{
			cost: ["Colorless", "Colorless"],
			name: { 'zh-cn': "撞击" },
			damage: 20,
		},
	],
	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],
	retreat: 1,
	regulationMark: "G",
	rarity: "Common",
	dexId: [16],
}

export default card
