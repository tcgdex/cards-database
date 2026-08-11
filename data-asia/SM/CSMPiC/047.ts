import { Card } from "../../../interfaces"
import Set from "../CSMPiC"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "班基拉斯GX",
	},
	rarity: "None",
	illustrator: "5ban Graphics",
	category: "Pokemon",
	dexId: [248],
	hp: 250,
	types: ["Darkness"],
	evolveFrom: {
		'zh-cn': "沙基拉斯",
	},
	stage: "Stage2",
	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				'zh-cn': "送入迷失区",
			},
			effect: {
				'zh-cn': "若对手的宝可梦因这只宝可梦的招式的伤害而【昏厥】，则将那只宝可梦与附于其身上的全部卡放置于迷失区，而不是弃牌区。",
			},
		},
	],
	attacks: [
		{
			cost: ["Darkness", "Darkness", "Colorless"],
			name: {
				'zh-cn': "尘土骚动",
			},
			effect: {
				'zh-cn': "对手的所有后备基础宝可梦各受到30点伤害。【后备宝可梦不计算弱点・抵抗力。】",
			},
			damage: 130,
		},
		{
			cost: ["Darkness", "Darkness", "Colorless"],
			name: {
				'zh-cn': "重压制裁GX",
			},
			effect: {
				'zh-cn': "这个招式的伤害不受对手战斗宝可梦身上的效果影响。【对战中，己方的GX招式只能使用1次。】",
			},
			damage: 220,
		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20",
		},
	],
	retreat: 3,
	variants: [{ type: "holo" }],
}

export default card
