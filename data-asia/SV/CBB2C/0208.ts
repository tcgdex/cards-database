import { Card } from "../../../interfaces"
import Set from "../CBB2C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "水伊布",
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],
	evolveFrom: {
		'zh-cn': "伊布",
	},
	stage: "Stage1",
	abilities: [
		{
			type: "Ability",
			name: { 'zh-cn': "激流觉醒" },
			effect: { 'zh-cn': "如果这只宝可梦身上放有「回忆胶囊」的话，则双方场上【火】宝可梦的特性，全部消除。" },
		},
	],
	attacks: [
		{
			cost: ["Water", "Colorless"],
			name: { 'zh-cn': "极光束" },
			damage: 70,
		},
	],
	weaknesses: [{ type: "Lightning", value: "x2" }],
	retreat: 2,
	regulationMark: "D",
	rarity: "Uncommon",
	dexId: [134],
}

export default card
