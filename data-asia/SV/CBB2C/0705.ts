import { Card } from "../../../interfaces"
import Set from "../CBB2C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "叶伊布",
	},

	illustrator: "OKACHEKE",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],
	evolveFrom: {
		'zh-cn': "伊布",
	},
	stage: "Stage1",
	attacks: [
		{
			cost: ["Grass"],
			name: { 'zh-cn': "叶子防守" },
			effect: { 'zh-cn': "在下一个对手的回合，这只宝可梦所受到的招式的伤害「-30」。" },
			damage: 30,
		},
		{
			cost: ["Grass", "Colorless"],
			name: { 'zh-cn': "打草结" },
			effect: { 'zh-cn': "追加造成对手战斗宝可梦的【撤退】所需能量数量×30点伤害。" },
			damage: "50+",
		},
	],
	weaknesses: [{ type: "Fire", value: "x2" }],
	retreat: 1,
	regulationMark: "E",
	rarity: "Uncommon",
	dexId: [470],
}

export default card
