import { Card } from "../../../interfaces"
import Set from "../CBB3C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "鬃岩狼人ex",
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 260,
	types: ["Fighting"],
	evolveFrom: {
		'zh-cn': "岩狗狗",
	},
	stage: "Stage1",
	suffix: "ex",
	attacks: [
		{
			cost: ["Fighting"],
			name: { 'zh-cn': "落石" },
			damage: 40,
		},
		{
			cost: ["Fighting", "Colorless", "Colorless"],
			name: { 'zh-cn': "恐怖獠牙" },
			effect: { 'zh-cn': "在下一个对手的回合，当这只宝可梦受到招式的伤害时，将10个伤害指示物放置于使用了招式的宝可梦身上。" },
			damage: 140,
		},
	],
	weaknesses: [{ type: "Grass", value: "x2" }],
	retreat: 2,
	regulationMark: "G",
	rarity: "Rare",
	dexId: [745],
}

export default card
