import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "火伊布",
	},

	illustrator: "Ryota Murayama",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],
	evolveFrom: {
		'zh-cn': "伊布",
	},
	description: {
		'zh-cn': "会将吸入的空气传送到自己体内的火囊里，制造成１７００度的火焰再吐出。",
	},
	stage: "Stage1",
	attacks: [
		{
			cost: ["Fire"],
			name: { 'zh-cn': "破坏之火" },
			effect: { 'zh-cn': "抛掷1次硬币如果为正面，则选择对手战斗宝可梦身上附着的1个能量，放于弃牌区。" },
			damage: 30,
		},
		{
			cost: ["Fire", "Colorless", "Colorless"],
			name: { 'zh-cn': "斗志猛火" },
			effect: { 'zh-cn': "如果对手的战斗宝可梦是「宝可梦【ex】・V」的话，则追加造成90伤害。" },
			damage: "90+",
		},
	],
	weaknesses: [{ type: "Water", value: "x2" }],
	retreat: 2,
	regulationMark: "G",
	rarity: "Rare",
	dexId: [136],
}

export default card
