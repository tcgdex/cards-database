import { Card } from "../../../interfaces"
import Set from "../CBB2C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "月亮伊布",
	},

	illustrator: "Ryota Murayama",
	category: "Pokemon",
	hp: 110,
	types: ["Darkness"],
	evolveFrom: {
		'zh-cn': "伊布",
	},
	stage: "Stage1",
	attacks: [
		{
			cost: ["Darkness"],
			name: { 'zh-cn': "报仇" },
			effect: { 'zh-cn': "在上一个对手的回合，如果因为招式的伤害，而导致自己的宝可梦【昏厥】的话，则追加造成90点伤害。" },
			damage: "30+",
		},
		{
			cost: ["Darkness", "Colorless"],
			name: { 'zh-cn': "暗黑利刃" },
			damage: 60,
		},
	],
	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],
	retreat: 1,
	regulationMark: "B",
	rarity: "Common",
	dexId: [197],
}

export default card
