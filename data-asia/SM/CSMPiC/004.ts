import { Card } from "../../../interfaces"
import Set from "../CSMPiC"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "冰伊布GX",
	},
	rarity: "None",
	illustrator: "5ban Graphics",
	category: "Pokemon",
	dexId: [471],
	hp: 200,
	types: ["Water"],
	evolveFrom: {
		'zh-cn': "伊布",
	},
	stage: "Stage1",
	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				'zh-cn': "冰冷视线",
			},
			effect: {
				'zh-cn': "只要这只宝可梦是你的战斗宝可梦，对手的场上、手牌与弃牌区的宝可梦GX与宝可梦EX，除了「冰冷视线」以外，没有特性。",
			},
		},
	],
	attacks: [
		{
			cost: ["Water", "Colorless", "Colorless"],
			name: {
				'zh-cn': "冰霜子弹",
			},
			effect: {
				'zh-cn': "对手的1只后备宝可梦也受到30点伤害。【后备宝可梦不计算弱点・抵抗力。】",
			},
			damage: 90,
		},
		{
			cost: ["Water", "Colorless", "Colorless"],
			name: {
				'zh-cn': "极地尖枪GX",
			},
			effect: {
				'zh-cn': "造成对手的战斗宝可梦身上所放置的伤害指示物的数量×50点伤害。【对战中，己方的GX招式只能使用1次。】",
			},
			damage: "50×",
		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 2,
	variants: [{ type: "holo" }],
}

export default card
