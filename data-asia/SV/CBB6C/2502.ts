import { Card } from "../../../interfaces"
import Set from "../CBB6C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "斯魔茶",
	},

	illustrator: "MINAMINAMI Take",
	category: "Pokemon",
	hp: 30,
	types: ["Grass"],
	stage: "Basic",
	abilities: [
		{
			type: "Ability",
			name: { 'zh-cn': "藏隐" },
			effect: { 'zh-cn': "只要这只宝可梦，处于备战区，就不会受到对手宝可梦的招式的伤害和效果影响。" },
		},
	],
	attacks: [
		{
			cost: ["Grass"],
			name: { 'zh-cn': "钩住" },
			damage: 10,
		},
	],
	weaknesses: [{ type: "Fire", value: "x2" }],
	retreat: 1,
	regulationMark: "H",
	rarity: "Common",
	dexId: [1012],
}

export default card
