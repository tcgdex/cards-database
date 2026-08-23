import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "小海狮",
	},

	illustrator: "aoki",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],
	description: {
		'zh-cn': "因为有着厚厚的脂肪，所以在寒冷的海里它也毫不在意，但在温暖的海里却有点容易疲劳。",
	},
	stage: "Basic",
	attacks: [
		{
			cost: ["Water"],
			name: { 'zh-cn': "丝丝寒意" },
			damage: 20,
		},
	],
	weaknesses: [{ type: "Lightning", value: "x2" }],
	retreat: 2,
	regulationMark: "G",
	rarity: "Common",
	dexId: [86],
}

export default card
