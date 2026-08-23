import { Card } from "../../../interfaces"
import Set from "../CBB2C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "伊布V",
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 190,
	types: ["Colorless"],
	stage: "Basic",
	suffix: "V",
	attacks: [
		{
			cost: ["Colorless"],
			name: { 'zh-cn': "招来" },
			effect: { 'zh-cn': "从自己的牌库上方抽取3张卡牌。" },
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: { 'zh-cn': "英勇搭档" },
			effect: { 'zh-cn': "在这个回合，如果从手牌使出了支援者的话，则追加造成80点伤害。" },
			damage: "80+",
		},
	],
	weaknesses: [{ type: "Fighting", value: "x2" }],
	retreat: 1,
	regulationMark: "D",
	rarity: "Rare",
	dexId: [133],
}

export default card
