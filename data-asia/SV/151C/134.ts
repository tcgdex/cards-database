import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "水伊布",
	},

	illustrator: "kirisAki",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],
	evolveFrom: {
		'zh-cn': "伊布",
	},
	description: {
		'zh-cn': "虽然栖息在水边，但由于尾巴上有像鱼的鳍，因此也有人会把它错认为人鱼。",
	},
	stage: "Stage1",
	attacks: [
		{
			cost: ["Water"],
			name: { 'zh-cn': "螺旋吸取" },
			effect: { 'zh-cn': "回复这只宝可梦「30」HP。" },
			damage: 30,
		},
		{
			cost: ["Water", "Colorless", "Colorless"],
			name: { 'zh-cn': "斗志潮漩" },
			effect: { 'zh-cn': "如果对手的战斗宝可梦是「宝可梦【ex】・V」的话，则追加造成90伤害。" },
			damage: "90+",
		},
	],
	weaknesses: [{ type: "Lightning", value: "x2" }],
	retreat: 2,
	regulationMark: "G",
	rarity: "Rare",
	dexId: [134],
}

export default card
