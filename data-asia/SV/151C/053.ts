import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "猫老大",
	},

	illustrator: "Naoki Saito",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],
	evolveFrom: {
		'zh-cn': "喵喵",
	},
	description: {
		'zh-cn': "有着漂亮的毛色，很多人想把它当宠物养，但它很爱乱抓，所以很难养熟。",
	},
	stage: "Stage1",
	abilities: [
		{
			type: "Ability",
			name: { 'zh-cn': "火箭呼唤" },
			effect: { 'zh-cn': "在自己的回合可以使用1次。选择自己牌库中的1张「坂木的领导力」，在给对手看过之后，加入手牌。并重洗牌库。" },
		},
	],
	attacks: [
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: { 'zh-cn': "劈开" },
			damage: 70,
		},
	],
	weaknesses: [{ type: "Fighting", value: "x2" }],
	retreat: 1,
	regulationMark: "G",
	rarity: "Uncommon",
	dexId: [53],
}

export default card
