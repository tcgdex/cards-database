import { Card } from "../../../interfaces"
import Set from "../CBB4C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "光电伞蜥",
	},

	illustrator: "Atsuya Uki",
	category: "Pokemon",
	hp: 100,
	types: ["Lightning"],
	evolveFrom: {
		'zh-cn': "伞电蜥",
	},
	stage: "Stage1",
	attacks: [
		{
			cost: ["Lightning"],
			name: { 'zh-cn': "疯狂伏特" },
			effect: { 'zh-cn': "给这只宝可梦也造成20伤害。" },
			damage: 70,
		},
	],
	weaknesses: [{ type: "Fighting", value: "x2" }],
	retreat: 1,
	regulationMark: "H",
	rarity: "Uncommon",
	dexId: [695],
}

export default card
