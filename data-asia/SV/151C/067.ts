import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "豪力",
	},

	illustrator: "Ryuta Fuse",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],
	evolveFrom: {
		'zh-cn': "腕力",
	},
	description: {
		'zh-cn': "有着不会疲劳的强韧肉体。会去帮助人类完成例如搬运沉重行李之类的工作。",
	},
	stage: "Stage1",
	attacks: [
		{
			cost: ["Fighting", "Fighting"],
			name: { 'zh-cn': "推山" },
			effect: { 'zh-cn': "将对手牌库上方的1张卡牌放于弃牌区。" },
			damage: 50,
		},
	],
	weaknesses: [{ type: "Psychic", value: "x2" }],
	retreat: 2,
	regulationMark: "G",
	rarity: "Uncommon",
	dexId: [67],
}

export default card
