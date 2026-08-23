import { Card } from "../../../interfaces"
import Set from "../CBB4C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "虫电宝",
	},

	illustrator: "Misa Tsutsui",
	category: "Pokemon",
	hp: 100,
	types: ["Lightning"],
	evolveFrom: {
		'zh-cn': "强颚鸡母虫",
	},
	stage: "Stage1",
	attacks: [
		{
			cost: ["Lightning", "Lightning"],
			name: { 'zh-cn': "劈啪作响" },
			damage: 60,
		},
	],
	weaknesses: [{ type: "Fighting", value: "x2" }],
	retreat: 2,
	regulationMark: "H",
	rarity: "Rare",
	dexId: [737],
}

export default card
