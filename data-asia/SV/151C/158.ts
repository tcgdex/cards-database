import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "臭臭花",
	},

	illustrator: "OKACHEKE",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	evolveFrom: {
		'zh-cn': "走路草",
	},
	description: {
		'zh-cn': "看似口水的东西其实是甜甜的蜜。非常黏稠，只要碰到就会一直黏住。",
	},
	stage: "Stage1",
	abilities: [
		{
			type: "Ability",
			name: { 'zh-cn': "三成能量" },
			effect: { 'zh-cn': "在自己的回合，当将这张卡牌从手牌使出并进行进化时，可使用1次。查看自己牌库上方3张卡牌，选择其中任意数量的基本能量，以任意方式附着于自己的宝可梦身上。将剩余的卡牌放回牌库并重洗牌库。" },
		},
	],
	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: { 'zh-cn': "口水" },
			damage: 30,
		},
	],
	weaknesses: [{ type: "Fire", value: "x2" }],
	retreat: 1,
	regulationMark: "G",
	rarity: "Shiny rare",
	dexId: [44],
}

export default card
