import { Card } from "../../../interfaces"
import Set from "../CSMPiC"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "路卡利欧GX",
	},
	rarity: "None",
	illustrator: "5ban Graphics",
	category: "Pokemon",
	dexId: [448],
	hp: 210,
	types: ["Fighting"],
	evolveFrom: {
		'zh-cn': "利欧路",
	},
	stage: "Stage1",
	suffix: "GX",
	attacks: [
		{
			cost: ["Fighting"],
			name: {
				'zh-cn': "波导打击",
			},
			effect: {
				'zh-cn': "若这只宝可梦是在这个回合由「利欧路」进化而来，则增加90点伤害。",
			},
			damage: "30+",
		},
		{
			cost: ["Fighting", "Fighting", "Colorless"],
			name: {
				'zh-cn': "旋风踢",
			},
			damage: 130,
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				'zh-cn': "倔强猛击GX",
			},
			effect: {
				'zh-cn': "造成这只宝可梦身上所放置的伤害指示物的数量×30点伤害。【对战中，己方的GX招式只能使用1次。】",
			},
			damage: "30×",
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
