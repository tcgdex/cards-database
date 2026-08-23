import { Card } from "../../../interfaces"
import Set from "../CBB5C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "黑鲁加",
	},

	illustrator: "burari",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],
	evolveFrom: {
		'zh-cn': "戴鲁比",
	},
	stage: "Stage1",
	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: { 'zh-cn': "咬住" },
			damage: 50,
		},
		{
			cost: ["Fire", "Colorless", "Colorless"],
			name: { 'zh-cn': "大声咆哮" },
			effect: { 'zh-cn': "在下一个对手的回合，受到这个招式影响的宝可梦所使用招式的伤害「-100」。" },
			damage: 100,
		},
	],
	weaknesses: [{ type: "Water", value: "x2" }],
	retreat: 2,
	regulationMark: "H",
	rarity: "Double rare",
	dexId: [229],
}

export default card
