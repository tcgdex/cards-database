import { Card } from "../../../interfaces"
import Set from "../CBB2C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "叶伊布V",
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 210,
	types: ["Grass"],
	stage: "Basic",
	suffix: "V",
	attacks: [
		{
			cost: ["Grass"],
			name: { 'zh-cn': "叶子防守" },
			effect: { 'zh-cn': "在下一个对手的回合，这只宝可梦所受到的招式的伤害「-30」。" },
			damage: 30,
		},
		{
			cost: ["Grass", "Grass", "Colorless"],
			name: { 'zh-cn': "斩落" },
			effect: { 'zh-cn': "在下一个自己的回合，这只宝可梦无法使用「斩落」。" },
			damage: 180,
		},
	],
	weaknesses: [{ type: "Fire", value: "x2" }],
	retreat: 2,
	regulationMark: "F",
	rarity: "Rare",
	dexId: [470],
}

export default card
