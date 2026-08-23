import { Card } from "../../../interfaces"
import Set from "../CBB4C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "树林龟",
	},

	illustrator: "Uninori",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],
	evolveFrom: {
		'zh-cn': "草苗龟",
	},
	stage: "Stage1",
	attacks: [
		{
			cost: ["Grass"],
			name: { 'zh-cn': "居合劈" },
			damage: 20,
		},
		{
			cost: ["Grass", "Colorless", "Colorless"],
			name: { 'zh-cn': "甲壳冲撞" },
			effect: { 'zh-cn': "在下一个对手的回合，这只宝可梦所受到的招式的伤害「-20」。" },
			damage: 50,
		},
	],
	weaknesses: [{ type: "Fire", value: "x2" }],
	retreat: 4,
	regulationMark: "H",
	rarity: "Rare",
	dexId: [388],
}

export default card
