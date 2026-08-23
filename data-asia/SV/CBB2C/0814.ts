import { Card } from "../../../interfaces"
import Set from "../CBB2C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "冰伊布VMAX",
	},

	illustrator: "PLANETA Tsuji",
	category: "Pokemon",
	hp: 310,
	types: ["Water"],
	evolveFrom: {
		'zh-cn': "冰伊布V",
	},
	stage: "VMAX",
	abilities: [
		{
			type: "Ability",
			name: { 'zh-cn': "水晶之幕" },
			effect: { 'zh-cn': "这只宝可梦，不会受到对手「宝可梦【VMAX】」（除「冰伊布【VMAX】」外）的招式的伤害。" },
		},
	],
	attacks: [
		{
			cost: ["Water", "Colorless", "Colorless"],
			name: { 'zh-cn': "极巨冰柱" },
			effect: { 'zh-cn': "给对手的1只备战宝可梦，也造成30点伤害。[备战宝可梦不计算弱点、抗性。]" },
			damage: 150,
		},
	],
	weaknesses: [{ type: "Metal", value: "x2" }],
	retreat: 2,
	regulationMark: "E",
	rarity: "Triple Rare",
	dexId: [471],
}

export default card
