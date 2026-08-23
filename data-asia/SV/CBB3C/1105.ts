import { Card } from "../../../interfaces"
import Set from "../CBB3C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "水晶灯火灵",
	},

	illustrator: "Haru Akasaka",
	category: "Pokemon",
	hp: 150,
	types: ["Fire"],
	evolveFrom: {
		'zh-cn': "灯火幽灵",
	},
	stage: "Stage2",
	attacks: [
		{
			cost: ["Fire"],
			name: { 'zh-cn': "连锁燃烧" },
			effect: { 'zh-cn': "追加造成对手战斗宝可梦身上附着的能量数量×50伤害。" },
			damage: "10+",
		},
		{
			cost: ["Fire", "Colorless", "Colorless"],
			name: { 'zh-cn': "高温爆破" },
			damage: 150,
		},
	],
	weaknesses: [{ type: "Water", value: "x2" }],
	retreat: 2,
	regulationMark: "G",
	rarity: "Rare",
	dexId: [609],
}

export default card
