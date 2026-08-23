import { Card } from "../../../interfaces"
import Set from "../CBB5C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "电电虫",
	},

	illustrator: "Nisota Niso",
	category: "Pokemon",
	hp: 30,
	types: ["Lightning"],
	stage: "Basic",
	attacks: [
		{
			cost: ["Colorless"],
			name: { 'zh-cn': "电电充能" },
			effect: { 'zh-cn': "选择自己牌库中的「基本【草】能量」和「基本【雷】能量」各最多2张，以任意方式附着于自己宝可梦身上。并重洗牌库。" },
		},
	],
	weaknesses: [{ type: "Fighting", value: "x2" }],
	retreat: 1,
	regulationMark: "H",
	rarity: "Double rare",
	dexId: [595],
}

export default card
