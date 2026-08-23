import { Card } from "../../../interfaces"
import Set from "../CBB5C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "炙烫鳄",
	},

	illustrator: "Atsuya Uki",
	category: "Pokemon",
	hp: 110,
	types: ["Fire"],
	evolveFrom: {
		'zh-cn': "呆火鳄",
	},
	stage: "Stage1",
	attacks: [
		{
			cost: ["Fire", "Colorless"],
			name: { 'zh-cn': "高温吐息" },
			effect: { 'zh-cn': "抛掷1次硬币如果为正面，则追加造成50伤害。" },
			damage: "30+",
		},
	],
	weaknesses: [{ type: "Water", value: "x2" }],
	retreat: 3,
	regulationMark: "H",
	rarity: "Uncommon",
	dexId: [910],
}

export default card
