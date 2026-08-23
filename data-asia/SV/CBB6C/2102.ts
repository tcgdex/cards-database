import { Card } from "../../../interfaces"
import Set from "../CBB6C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "丰蜜龙",
	},

	illustrator: "Oswaldo KATO",
	category: "Pokemon",
	hp: 90,
	types: ["Dragon"],
	evolveFrom: {
		'zh-cn': "啃果虫",
	},
	stage: "Stage1",
	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: { 'zh-cn': "甜甜软化" },
			effect: { 'zh-cn': "在下一个对手的回合，受到这个招式影响的宝可梦，无法使用招式。" },
			damage: 50,
		},
		{
			cost: ["Grass", "Fire"],
			name: { 'zh-cn': "疯狂冲撞" },
			effect: { 'zh-cn': "给这只宝可梦也造成20伤害。" },
			damage: 130,
		},
	],
	retreat: 3,
	regulationMark: "H",
	rarity: "Common",
	dexId: [842],
}

export default card
