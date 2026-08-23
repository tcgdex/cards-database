import { Card } from "../../../interfaces"
import Set from "../CBB6C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "愿增猿",
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],
	stage: "Basic",
	abilities: [
		{
			type: "Ability",
			name: { 'zh-cn': "亢奋脑力" },
			effect: { 'zh-cn': "如果这只宝可梦身上附着了【恶】能量的话，则在自己的回合可以使用1次。选择自己场上1只宝可梦身上放置的最多3个伤害指示物，转放于对手场上1只宝可梦身上。" },
		},
	],
	attacks: [
		{
			cost: ["Psychic", "Colorless"],
			name: { 'zh-cn': "精神幻觉" },
			effect: { 'zh-cn': "令对手的战斗宝可梦陷入【混乱】状态。" },
			damage: 60,
		},
	],
	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],
	retreat: 1,
	regulationMark: "H",
	rarity: "Double rare",
	dexId: [1015],
}

export default card
