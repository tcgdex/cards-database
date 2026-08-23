import { Card } from "../../../interfaces"
import Set from "../CBB6C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "阿罗拉 三地鼠",
	},

	illustrator: "Dsuke",
	category: "Pokemon",
	hp: 110,
	types: ["Metal"],
	evolveFrom: {
		'zh-cn': "阿罗拉 地鼠",
	},
	stage: "Stage1",
	attacks: [
		{
			name: { 'zh-cn': "三行宾果" },
			effect: { 'zh-cn': "如果自己的手牌数量不为3张的话，则这个招式失败。" },
			damage: 120,
		},
	],
	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],
	retreat: 2,
	regulationMark: "H",
	rarity: "Double rare",
	dexId: [51],
}

export default card
