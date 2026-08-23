import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "皮卡丘",
	},

	illustrator: "Naoyo Kimura",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],
	description: {
		'zh-cn': "两颊上有储存电力的囊袋。一旦生气就会把储存的电力一口气释放出来。",
	},
	stage: "Basic",
	attacks: [
		{
			cost: ["Lightning"],
			name: { 'zh-cn': "充电" },
			effect: { 'zh-cn': "选择自己牌库中的1张「基本【雷】能量」，附着于这只宝可梦身上。并重洗牌库。" },
		},
		{
			cost: ["Lightning", "Lightning", "Colorless"],
			name: { 'zh-cn': "皮卡拳" },
			damage: 50,
		},
	],
	weaknesses: [{ type: "Fighting", value: "x2" }],
	retreat: 1,
	regulationMark: "G",
	rarity: "Common",
	dexId: [25],
}

export default card
