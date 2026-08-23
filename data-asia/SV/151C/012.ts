import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "巴大蝶",
	},

	illustrator: "Tika Matsuno",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],
	evolveFrom: {
		'zh-cn': "铁甲蛹",
	},
	description: {
		'zh-cn': "每天都忙着采集花蜜。习惯往腿部的细毛上涂满花蜜，然后带回巢穴里。",
	},
	stage: "Stage2",
	attacks: [
		{
			cost: ["Grass"],
			name: { 'zh-cn': "吹飞" },
			effect: { 'zh-cn': "将对手的战斗宝可梦与备战宝可梦互换。[放于战斗场的宝可梦由对手选择。]" },
			damage: 60,
		},
		{
			cost: ["Colorless", "Colorless"],
			name: { 'zh-cn': "去去飞行" },
			effect: { 'zh-cn': "选择这只宝可梦，和对手的1只备战宝可梦，将被选择的宝可梦，以及放于其身上的所有卡牌，各放回各自的牌库并重洗牌库。如果对手没有备战宝可梦的话，则这个招式失败。" },
		},
	],
	weaknesses: [{ type: "Fire", value: "x2" }],
	retreat: 1,
	regulationMark: "G",
	rarity: "Uncommon",
	dexId: [12],
}

export default card
