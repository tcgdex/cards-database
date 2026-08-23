import { Card } from "../../../interfaces"
import Set from "../CBB2C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "火伊布VMAX",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 320,
	types: ["Fire"],
	evolveFrom: {
		'zh-cn': "火伊布V",
	},
	stage: "VMAX",
	attacks: [
		{
			cost: ["Fire", "Colorless", "Colorless"],
			name: { 'zh-cn': "极巨爆裂" },
			effect: { 'zh-cn': "将自己牌库上方5张卡牌放于弃牌区，造成其中能量的张数×100点伤害。" },
			damage: "100×",
		},
	],
	weaknesses: [{ type: "Water", value: "x2" }],
	retreat: 2,
	regulationMark: "E",
	rarity: "Triple Rare",
	dexId: [136],
}

export default card
