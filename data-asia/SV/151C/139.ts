import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "多刺菊石兽",
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 150,
	types: ["Water"],
	evolveFrom: {
		'zh-cn': "菊石兽",
	},
	description: {
		'zh-cn': "拥有足以咬碎岩石的锋利牙齿，但是能够袭击的猎物仅限触手可以伸展的范围之内。",
	},
	stage: "Stage2",
	abilities: [
		{
			type: "Ability",
			name: { 'zh-cn': "原始触手" },
			effect: { 'zh-cn': "只要这只宝可梦在战斗场上，对手的战斗宝可梦，无法撤退。" },
		},
	],
	attacks: [
		{
			cost: ["Water", "Water"],
			name: { 'zh-cn': "水流分裂" },
			effect: { 'zh-cn': "给对手的2只备战宝可梦，也各造成30伤害。[备战宝可梦不计算弱点、抗性。]" },
			damage: 90,
		},
	],
	weaknesses: [{ type: "Lightning", value: "x2" }],
	retreat: 3,
	regulationMark: "G",
	rarity: "Rare",
	dexId: [139],
}

export default card
