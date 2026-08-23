import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "三地鼠",
	},

	illustrator: "Miki Tanaka",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],
	evolveFrom: {
		'zh-cn': "地鼠",
	},
	description: {
		'zh-cn': "３个脑袋会轮流行动，是为了让周围的土地变得松软而容易挖掘。",
	},
	stage: "Stage1",
	attacks: [
		{
			cost: ["Fighting"],
			name: { 'zh-cn': "鲁莽头击" },
			damage: 40,
		},
		{
			cost: ["Fighting", "Fighting"],
			name: { 'zh-cn': "泥巴炸弹" },
			damage: 80,
		},
	],
	weaknesses: [{ type: "Grass", value: "x2" }],
	retreat: 1,
	regulationMark: "G",
	rarity: "Uncommon",
	dexId: [51],
}

export default card
