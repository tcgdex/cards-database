import { Card } from "../../../interfaces"
import Set from "../CBB2C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "冰伊布V",
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 210,
	types: ["Water"],
	stage: "Basic",
	suffix: "V",
	attacks: [
		{
			cost: ["Water"],
			name: { 'zh-cn': "冰霜充能" },
			effect: { 'zh-cn': "选择自己牌库中的1张【水】能量，附着于这只宝可梦身上。并重洗牌库。" },
			damage: 30,
		},
		{
			cost: ["Water", "Water", "Colorless"],
			name: { 'zh-cn': "冻结之风" },
			damage: 130,
		},
	],
	weaknesses: [{ type: "Metal", value: "x2" }],
	retreat: 2,
	regulationMark: "F",
	rarity: "Rare",
	dexId: [471],
}

export default card
