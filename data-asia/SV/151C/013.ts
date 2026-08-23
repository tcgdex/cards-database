import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "独角虫",
	},

	illustrator: "nisimono",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],
	description: {
		'zh-cn': "毒针十分的厉害。醒目的体色是用来警告对手的。",
	},
	stage: "Basic",
	attacks: [
		{
			cost: ["Grass"],
			name: { 'zh-cn': "冲撞" },
			damage: 10,
		},
		{
			cost: ["Colorless", "Colorless"],
			name: { 'zh-cn': "虫咬" },
			damage: 20,
		},
	],
	weaknesses: [{ type: "Fire", value: "x2" }],
	retreat: 1,
	regulationMark: "G",
	rarity: "Common",
	dexId: [13],
}

export default card
