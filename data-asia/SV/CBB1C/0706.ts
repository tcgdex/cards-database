import { Card } from "../../../interfaces"
import Set from "../CBB1C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "皮卡丘",
	},

	illustrator: "Yuu Nishida",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",
	attacks: [
		{
			cost: ["Colorless"],
			name: { 'zh-cn': "叫声" },
			effect: { 'zh-cn': "在下一个对手的回合,受到这个招式影响的宝可梦所使用的招式的伤害「-20」。" },
		},
		{
			cost: ["Lightning", "Colorless"],
			name: { 'zh-cn': "皮卡伏特" },
			damage: 30,
		},
	],
	weaknesses: [{ type: "Fighting", value: "x2" }],
	retreat: 1,
	regulationMark: "G",
	rarity: "Rare",
	dexId: [25],
}

export default card
