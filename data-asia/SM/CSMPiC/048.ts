import { Card } from "../../../interfaces"
import Set from "../CSMPiC"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "超梦GX",
	},
	rarity: "None",
	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	dexId: [150],
	hp: 190,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "GX",
	attacks: [
		{
			cost: ["Psychic"],
			name: {
				'zh-cn': "全力爆发",
			},
			effect: {
				'zh-cn': "造成这只宝可梦身上所附能量的数量×30点伤害。",
			},
			damage: "30×",
		},
		{
			cost: ["Psychic", "Colorless"],
			name: {
				'zh-cn': "超级吸收",
			},
			effect: {
				'zh-cn': "恢复这只宝可梦的HP「30」点。",
			},
			damage: 60,
		},
		{
			cost: ["Psychic", "Psychic", "Psychic"],
			name: {
				'zh-cn': "精神击破GX",
			},
			effect: {
				'zh-cn': "这个招式的伤害不受对手战斗宝可梦身上的效果影响。【对战中，己方的GX招式只能使用1次。】",
			},
			damage: 200,
		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2",
		},
	],
	retreat: 2,
	variants: [{ type: "holo" }],
}

export default card
