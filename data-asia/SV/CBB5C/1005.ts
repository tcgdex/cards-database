import { Card } from "../../../interfaces"
import Set from "../CBB5C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "超音波幼虫",
	},

	illustrator: "Teeziro",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],
	evolveFrom: {
		'zh-cn': "大颚蚁",
	},
	stage: "Stage1",
	attacks: [
		{
			cost: ["Colorless"],
			name: { 'zh-cn': "刺耳声" },
			effect: { 'zh-cn': "在下一个自己的回合，受到这个招式影响的宝可梦所受到的招式的伤害「+50」。" },
		},
		{
			cost: ["Fighting", "Colorless"],
			name: { 'zh-cn': "利刃之风" },
			damage: 50,
		},
	],
	weaknesses: [{ type: "Grass", value: "x2" }],
	retreat: 1,
	regulationMark: "H",
	rarity: "Rare",
	dexId: [329],
}

export default card
