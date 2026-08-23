import { Card } from "../../../interfaces"
import Set from "../CBB3C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "诅咒娃娃ex",
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 250,
	types: ["Psychic"],
	evolveFrom: {
		'zh-cn': "怨影娃娃",
	},
	stage: "Stage1",
	suffix: "ex",
	attacks: [
		{
			cost: ["Psychic"],
			name: { 'zh-cn': "暗夜难明" },
			effect: { 'zh-cn': "在下一个对手的回合，对手无法从手牌使出物品。" },
			damage: 30,
		},
		{
			cost: ["Psychic", "Colorless"],
			name: { 'zh-cn': "灵骚" },
			effect: { 'zh-cn': "查看对手的手牌，造成其中训练家张数×60伤害。" },
			damage: "60×",
		},
	],
	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],
	retreat: 2,
	regulationMark: "G",
	rarity: "Rare",
	dexId: [354],
}

export default card
