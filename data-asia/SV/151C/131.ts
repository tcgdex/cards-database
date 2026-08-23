import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "拉普拉斯",
	},

	illustrator: "LINNE",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],
	description: {
		'zh-cn': "十分耐寒，不畏冰海。皮肤滑滑的，摸上去会有点凉。",
	},
	stage: "Basic",
	attacks: [
		{
			cost: ["Water"],
			name: { 'zh-cn': "背起" },
			effect: { 'zh-cn': "选择自己牌库中最多2张宝可梦，在给对手看过之后，加入手牌。并重洗牌库。" },
		},
		{
			cost: ["Water", "Colorless", "Colorless"],
			name: { 'zh-cn': "水流利刃" },
			damage: 90,
		},
	],
	weaknesses: [{ type: "Lightning", value: "x2" }],
	retreat: 1,
	regulationMark: "G",
	rarity: "Uncommon",
	dexId: [131],
}

export default card
