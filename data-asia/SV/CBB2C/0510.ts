import { Card } from "../../../interfaces"
import Set from "../CBB2C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "太阳伊布",
	},

	illustrator: "Tika Matsuno",
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
			name: { 'zh-cn': "念力" },
			effect: { 'zh-cn': "抛掷1次硬币如果为正面，则使对手的战斗宝可梦陷入【麻痹】状态。" },
			damage: 20,
		},
		{
			cost: ["Psychic", "Colorless"],
			name: { 'zh-cn': "精神强念" },
			effect: { 'zh-cn': "追加造成对手战斗宝可梦身上附有的能量数量×40点伤害。" },
			damage: "10+",
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
