import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "阿柏怪ex",
	},

	illustrator: "Eske Yoshinob",
	category: "Pokemon",
	hp: 270,
	types: ["Darkness"],
	evolveFrom: {
		'zh-cn': "阿柏蛇",
	},
	stage: "Stage1",
	suffix: "ex",
	attacks: [
		{
			cost: ["Darkness", "Darkness"],
			name: { 'zh-cn': "束缚" },
			effect: { 'zh-cn': "在下一个对手的回合，受到这个招式影响的宝可梦，无法撤退。" },
			damage: 70,
		},
		{
			cost: ["Darkness", "Darkness", "Darkness"],
			name: { 'zh-cn': "恐吓獠牙" },
			effect: { 'zh-cn': "对手选择对手自己的2张手牌，放于弃牌区。" },
			damage: 150,
		},
	],
	weaknesses: [{ type: "Fighting", value: "x2" }],
	retreat: 2,
	regulationMark: "G",
	rarity: "Ultra Rare",
	dexId: [24],
}

export default card
