import { Card } from "../../../interfaces"
import Set from "../CBB4C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "振翼发",
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],
	stage: "Basic",
	abilities: [
		{
			type: "Ability",
			name: { 'zh-cn': "暗夜振翼" },
			effect: { 'zh-cn': "只要这只宝可梦在战斗场上，对手战斗宝可梦的特性（除「暗夜振翼」外），全部消除。" },
		},
	],
	attacks: [
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: { 'zh-cn': "飞来横祸" },
			effect: { 'zh-cn': "将2个伤害指示物，以任意方式放置于对手的备战宝可梦身上。" },
			damage: 90,
		},
	],
	weaknesses: [{ type: "Metal", value: "x2" }],
	retreat: 1,
	regulationMark: "H",
	rarity: "Common",
	dexId: [987],
}

export default card
