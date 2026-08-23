import { Card } from "../../../interfaces"
import Set from "../CBB5C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "啃果虫",
	},

	illustrator: "Teeziro",
	category: "Pokemon",
	hp: 40,
	types: ["Dragon"],
	stage: "Basic",
	attacks: [
		{
			cost: ["Colorless"],
			name: { 'zh-cn': "找朋友" },
			effect: { 'zh-cn': "选择自己牌库中的1张宝可梦，在给对手看过之后，加入手牌。并重洗牌库。" },
		},
		{
			cost: ["Grass", "Fire"],
			name: { 'zh-cn': "滚动冲撞" },
			damage: 30,
		},
	],
	retreat: 1,
	regulationMark: "H",
	rarity: "Common",
	dexId: [840],
}

export default card
