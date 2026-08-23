import { Card } from "../../../interfaces"
import Set from "../CBB2C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "太阳伊布V",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 200,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "V",
	attacks: [
		{
			cost: ["Psychic"],
			name: { 'zh-cn': "意念枪弹" },
			effect: { 'zh-cn': "给对手的1只「宝可梦【V】」，造成60点伤害。[备战宝可梦不计算弱点、抗性。]" },
		},
		{
			cost: ["Psychic", "Colorless", "Colorless"],
			name: { 'zh-cn': "超念力" },
			damage: 120,
		},
	],
	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],
	retreat: 1,
	regulationMark: "E",
	rarity: "Rare",
	dexId: [196],
}

export default card
