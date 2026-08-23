import { Card } from "../../../interfaces"
import Set from "../CBB2C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "冰伊布",
	},

	illustrator: "saino misaki",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],
	evolveFrom: {
		'zh-cn': "伊布",
	},
	stage: "Stage1",
	attacks: [
		{
			cost: ["Water"],
			name: { 'zh-cn': "冰霜之墙" },
			effect: { 'zh-cn': "在下一个对手的回合，这只宝可梦不会受到进化宝可梦的招式的伤害。" },
			damage: 30,
		},
		{
			cost: ["Water", "Water", "Colorless"],
			name: { 'zh-cn': "冰之爆破" },
			damage: 120,
		},
	],
	weaknesses: [{ type: "Metal", value: "x2" }],
	retreat: 1,
	regulationMark: "F",
	rarity: "Rare",
	dexId: [471],
}

export default card
