import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "大舌头",
	},

	illustrator: "Saya Tsuruta",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],
	description: {
		'zh-cn': "主要以虫宝可梦为食。会用长长的舌头舔对手，等对手麻痹后将其整个吞下。",
	},
	stage: "Basic",
	attacks: [
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: { 'zh-cn': "舌舔制约" },
			effect: { 'zh-cn': "在下一个对手的回合，受到这个招式影响的宝可梦，无法使用招式。" },
			damage: 70,
		},
	],
	weaknesses: [{ type: "Fighting", value: "x2" }],
	retreat: 4,
	regulationMark: "G",
	rarity: "Common",
	dexId: [108],
}

export default card
