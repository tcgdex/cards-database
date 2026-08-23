import { Card } from "../../../interfaces"
import Set from "../CBB5C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "洗翠 卡蒂狗",
	},

	illustrator: "Whisker",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],
	stage: "Basic",
	attacks: [
		{
			name: { 'zh-cn': "烧光" },
			effect: { 'zh-cn': "将场上的竞技场放于弃牌区。" },
		},
		{
			cost: ["Fighting", "Colorless"],
			name: { 'zh-cn': "猛撞" },
			effect: { 'zh-cn': "给这只宝可梦也造成10伤害。" },
			damage: 40,
		},
	],
	weaknesses: [{ type: "Grass", value: "x2" }],
	retreat: 2,
	regulationMark: "H",
	rarity: "Rare",
	dexId: [58],
}

export default card
