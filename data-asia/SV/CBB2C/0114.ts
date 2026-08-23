import { Card } from "../../../interfaces"
import Set from "../CBB2C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "伊布VMAX",
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 300,
	types: ["Colorless"],
	evolveFrom: {
		'zh-cn': "伊布V",
	},
	stage: "VMAX",
	attacks: [
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: { 'zh-cn': "超极巨热情拥抱" },
			effect: { 'zh-cn': "在下一个对手的回合，受到这个招式影响的宝可梦在使用招式时，对手将抛掷1次硬币。如果为反面则那个招式失败。" },
			damage: 150,
		},
	],
	weaknesses: [{ type: "Fighting", value: "x2" }],
	retreat: 2,
	regulationMark: "D",
	rarity: "Triple Rare",
	dexId: [133],
}

export default card
