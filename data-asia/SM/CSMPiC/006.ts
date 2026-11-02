import { Card } from "../../../interfaces"
import Set from "../CSMPiC"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "魔墙人偶GX",
	},
	rarity: "None",
	illustrator: "5ban Graphics",
	category: "Pokemon",
	dexId: [122],
	hp: 150,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				'zh-cn': "魔法偶数",
			},
			effect: {
				'zh-cn': "对手的攻击对这只宝可梦造成的伤害若正好为20、40、60、80、100、120、140、160、180、200、220、240或260，则防止那些伤害。",
			},
		},
	],
	attacks: [
		{
			cost: ["Psychic", "Colorless"],
			name: {
				'zh-cn': "崩解",
			},
			effect: {
				'zh-cn': "根据对手的手牌数量，在对手的战斗宝可梦身上放置相同数量的伤害指示物。",
			},
		},
		{
			cost: ["Colorless"],
			name: {
				'zh-cn': "生命戏法GX",
			},
			effect: {
				'zh-cn': "恢复这只宝可梦的全部HP。【对战中，己方的GX招式只能使用1次。】",
			},
		},
	],
	retreat: 2,
	variants: [{ type: "holo" }],
}

export default card
