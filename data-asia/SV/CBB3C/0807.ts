import { Card } from "../../../interfaces"
import Set from "../CBB3C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "阿勃梭鲁ex",
	},

	illustrator: "Nisota Niso",
	category: "Pokemon",
	hp: 210,
	types: ["Darkness"],
	stage: "Basic",
	suffix: "ex",
	attacks: [
		{
			cost: ["Darkness"],
			name: { 'zh-cn': "预知未来" },
			effect: { 'zh-cn': "查看自己或者对手牌库上方3张卡牌，以任意顺序重新排列，放回牌库上方。" },
		},
		{
			cost: ["Darkness", "Darkness", "Colorless"],
			name: { 'zh-cn': "怨恨猛击" },
			effect: { 'zh-cn': "如果对手的手牌在3张及以下的话，则追加造成120伤害。" },
			damage: "100+",
		},
	],
	weaknesses: [{ type: "Grass", value: "x2" }],
	retreat: 1,
	regulationMark: "G",
	rarity: "Rare",
	dexId: [359],
}

export default card
