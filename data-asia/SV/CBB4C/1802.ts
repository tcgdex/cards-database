import { Card } from "../../../interfaces"
import Set from "../CBB4C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "萌芽鹿",
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],
	evolveFrom: {
		'zh-cn': "四季鹿",
	},
	stage: "Stage1",
	abilities: [
		{
			type: "Ability",
			name: { 'zh-cn': "四季更迭" },
			effect: { 'zh-cn': "在自己的回合可以使用1次。选择自己牌库中的1张竞技场，在给对手看过之后，加入手牌。并重洗牌库。" },
		},
	],
	attacks: [
		{
			cost: ["Grass", "Colorless", "Colorless"],
			name: { 'zh-cn': "怪力角击" },
			damage: 110,
		},
	],
	weaknesses: [{ type: "Fire", value: "x2" }],
	retreat: 2,
	regulationMark: "H",
	rarity: "Common",
	dexId: [586],
}

export default card
