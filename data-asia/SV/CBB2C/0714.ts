import { Card } from "../../../interfaces"
import Set from "../CBB2C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "叶伊布VMAX",
	},

	illustrator: "PLANETA Tsuji",
	category: "Pokemon",
	hp: 310,
	types: ["Grass"],
	evolveFrom: {
		'zh-cn': "叶伊布V",
	},
	stage: "VMAX",
	attacks: [
		{
			cost: ["Grass", "Colorless"],
			name: { 'zh-cn': "打草结" },
			effect: { 'zh-cn': "造成对手战斗宝可梦的【撤退】所需能量数量×60点伤害。" },
			damage: "60×",
		},
		{
			cost: ["Grass", "Grass", "Colorless"],
			name: { 'zh-cn': "极巨绿叶" },
			effect: { 'zh-cn': "回复这只宝可梦「30」点HP。" },
			damage: 170,
		},
	],
	weaknesses: [{ type: "Fire", value: "x2" }],
	retreat: 2,
	regulationMark: "E",
	rarity: "Triple Rare",
	dexId: [470],
}

export default card
