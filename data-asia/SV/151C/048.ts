import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "毛球",
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	description: {
		'zh-cn': "全身上下都会渗出毒物。天黑后就会去捕捉聚在灯光处的小型虫宝可梦。",
	},
	stage: "Basic",
	attacks: [
		{
			cost: ["Colorless"],
			name: { 'zh-cn': "啃咬" },
			damage: 10,
		},
		{
			cost: ["Grass", "Colorless", "Colorless"],
			name: { 'zh-cn': "光束" },
			damage: 40,
		},
	],
	weaknesses: [{ type: "Fire", value: "x2" }],
	retreat: 2,
	regulationMark: "G",
	rarity: "Common",
	dexId: [48],
}

export default card
