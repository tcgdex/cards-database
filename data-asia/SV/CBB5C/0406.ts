import { Card } from "../../../interfaces"
import Set from "../CBB5C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "吉利蛋",
	},

	illustrator: "HYOGONOSUKE",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],
	stage: "Basic",
	attacks: [
		{
			cost: ["Colorless"],
			name: { 'zh-cn': "幸运附着" },
			effect: { 'zh-cn': "选择自己手牌中的1张基本能量，附着于自己的宝可梦身上。" },
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: { 'zh-cn': "潜力" },
			effect: { 'zh-cn': "在下一个自己的回合，这只宝可梦无法使用招式。" },
			damage: 80,
		},
	],
	weaknesses: [{ type: "Fighting", value: "x2" }],
	retreat: 2,
	regulationMark: "H",
	rarity: "Double rare",
	dexId: [113],
}

export default card
