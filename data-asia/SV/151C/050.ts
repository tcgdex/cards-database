import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "地鼠",
	},

	illustrator: "Miki Tanaka",
	category: "Pokemon",
	hp: 50,
	types: ["Fighting"],
	description: {
		'zh-cn': "在地下１米左右的地方挖洞前进，靠啃食树根之类的东西生存。偶尔会到地面上露个脸。",
	},
	stage: "Basic",
	attacks: [
		{
			cost: ["Fighting"],
			name: { 'zh-cn': "鲁莽头击" },
			damage: 10,
		},
		{
			cost: ["Fighting", "Fighting"],
			name: { 'zh-cn': "掷泥" },
			damage: 30,
		},
	],
	weaknesses: [{ type: "Grass", value: "x2" }],
	retreat: 1,
	regulationMark: "G",
	rarity: "Common",
	dexId: [50],
}

export default card
