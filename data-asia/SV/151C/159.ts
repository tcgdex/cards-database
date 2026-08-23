import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "霸王花",
	},

	illustrator: "0313",
	category: "Pokemon",
	hp: 140,
	types: ["Grass"],
	evolveFrom: {
		'zh-cn': "臭臭花",
	},
	description: {
		'zh-cn': "虽然花瓣越大，就能放出越多的花粉，但这样脑袋会变沉，容易疲倦。",
	},
	stage: "Stage2",
	abilities: [
		{
			type: "Ability",
			name: { 'zh-cn': "满开能量" },
			effect: { 'zh-cn': "在自己的回合，当将这张卡牌从手牌使出并进行进化时，可使用1次。查看自己牌库上方8张卡牌，选择其中任意数量的基本能量，以任意方式附着于自己的宝可梦身上。将剩余的卡牌放回牌库并重洗牌库。" },
		},
	],
	attacks: [
		{
			cost: ["Grass", "Colorless", "Colorless"],
			name: { 'zh-cn': "日光束" },
			damage: 90,
		},
	],
	weaknesses: [{ type: "Fire", value: "x2" }],
	retreat: 2,
	regulationMark: "G",
	rarity: "Shiny rare",
	dexId: [45],
}

export default card
