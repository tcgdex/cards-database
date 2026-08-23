import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "嘟嘟",
	},

	illustrator: "Saya Tsuruta",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	description: {
		'zh-cn': "２个脑袋好像能用类似心灵感应的力量来互通想法。",
	},
	stage: "Basic",
	attacks: [
		{
			cost: ["Colorless"],
			name: { 'zh-cn': "突击" },
			effect: { 'zh-cn': "给这只宝可梦也造成10伤害。" },
			damage: 30,
		},
	],
	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],
	retreat: 1,
	regulationMark: "G",
	rarity: "Shiny rare",
	dexId: [84],
}

export default card
