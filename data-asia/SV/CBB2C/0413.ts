import { Card } from "../../../interfaces"
import Set from "../CBB2C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "火伊布V",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 210,
	types: ["Fire"],
	stage: "Basic",
	suffix: "V",
	attacks: [
		{
			cost: ["Colorless"],
			name: { 'zh-cn': "燃烧气息" },
			effect: { 'zh-cn': "选择自己牌库中的1张【火】能量，附着于这只宝可梦身上。并重洗牌库。" },
			damage: 20,
		},
		{
			cost: ["Fire", "Fire", "Colorless"],
			name: { 'zh-cn': "灼热之柱" },
			effect: { 'zh-cn': "使对手的战斗宝可梦陷入【灼伤】状态。" },
			damage: 120,
		},
	],
	weaknesses: [{ type: "Water", value: "x2" }],
	retreat: 2,
	regulationMark: "E",
	rarity: "Rare",
	dexId: [136],
}

export default card
