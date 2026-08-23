import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "巨钳蟹",
	},

	illustrator: "Yukiko Baba",
	category: "Pokemon",
	hp: 140,
	types: ["Water"],
	evolveFrom: {
		'zh-cn': "大钳蟹",
	},
	description: {
		'zh-cn': "巨大的钳子破坏力十足，但是因为太过沉重，不战斗的时候就很碍事。",
	},
	stage: "Stage1",
	attacks: [
		{
			cost: ["Water", "Water", "Water"],
			name: { 'zh-cn': "臂锤" },
			effect: { 'zh-cn': "将对手牌库上方的1张卡牌放于弃牌区。" },
			damage: 90,
		},
		{
			cost: ["Water", "Water", "Water", "Water"],
			name: { 'zh-cn': "极落钳" },
			damage: 220,
		},
	],
	weaknesses: [{ type: "Lightning", value: "x2" }],
	retreat: 3,
	regulationMark: "G",
	rarity: "Uncommon",
	dexId: [99],
}

export default card
