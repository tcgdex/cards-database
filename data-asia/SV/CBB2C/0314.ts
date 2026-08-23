import { Card } from "../../../interfaces"
import Set from "../CBB2C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "雷伊布VMAX",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 300,
	types: ["Lightning"],
	evolveFrom: {
		'zh-cn': "雷伊布V",
	},
	stage: "VMAX",
	attacks: [
		{
			cost: ["Lightning", "Colorless"],
			name: { 'zh-cn': "极巨迅雷" },
			effect: { 'zh-cn': "给身上放置有伤害指示物的对手的1只备战宝可梦，也造成100点伤害。[备战宝可梦不计算弱点、抗性。]" },
			damage: 100,
		},
	],
	weaknesses: [{ type: "Fighting", value: "x2" }],
	retreat: 0,
	regulationMark: "E",
	rarity: "Triple Rare",
	dexId: [135],
}

export default card
