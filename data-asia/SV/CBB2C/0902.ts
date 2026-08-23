import { Card } from "../../../interfaces"
import Set from "../CBB2C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "仙子伊布",
	},

	illustrator: "Mizue",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],
	evolveFrom: {
		'zh-cn': "伊布",
	},
	stage: "Stage1",
	attacks: [
		{
			cost: ["Psychic"],
			name: { 'zh-cn': "延后踢" },
			effect: { 'zh-cn': "若希望，可选择附着于对手战斗宝可梦身上的1个能量，放回对手的手牌。" },
			damage: 30,
		},
		{
			cost: ["Psychic", "Colorless", "Colorless"],
			name: { 'zh-cn': "和谐鞭打" },
			effect: { 'zh-cn': "在这个回合，如果从手牌使出了支援者的话，则追加造成70点伤害。" },
			damage: "70+",
		},
	],
	weaknesses: [{ type: "Metal", value: "x2" }],
	retreat: 1,
	regulationMark: "E",
	rarity: "Common",
	dexId: [700],
}

export default card
