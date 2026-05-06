import { Card } from "../../../interfaces"
import Set from "../CSMPiC"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "叶伊布GX",
	},
	rarity: "None",
	illustrator: "5ban Graphics",
	category: "Pokemon",
	dexId: [470],
	hp: 200,
	types: ["Grass"],
	evolveFrom: {
		'zh-cn': "伊布",
	},
	stage: "Stage1",
	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				'zh-cn': "绿叶之息",
			},
			effect: {
				'zh-cn': "这个特性在这只宝可梦是你的战斗宝可梦时，在自己的回合可以使用1次。恢复自己的1只身上附有能量的宝可梦的HP「50」点。",
			},
		},
	],
	attacks: [
		{
			cost: ["Grass", "Colorless", "Colorless"],
			name: {
				'zh-cn': "日光束",
			},
			damage: 110,
		},
		{
			cost: ["Grass"],
			name: {
				'zh-cn': "绚丽绽放GX",
			},
			effect: {
				'zh-cn': "对己方全部的后备基础宝可梦，从牌库中搜索进化自那些宝可梦的卡各1张，放置于对应宝可梦身上完成进化。并且重洗牌库。【对战中，己方的GX招式只能使用1次。】",
			},
		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 2,
	variants: [{ type: "holo" }],
}

export default card
