import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "梦幻ex",
	},

	illustrator: "aky CG Works",
	category: "Pokemon",
	hp: 180,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "ex",
	abilities: [
		{
			type: "Ability",
			name: { 'zh-cn': "再起动" },
			effect: { 'zh-cn': "在自己的回合可以使用1次。从牌库上方抽取卡牌，直到自己的手牌变为3张为止。" },
		},
	],
	attacks: [
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: { 'zh-cn': "基因侵入" },
			effect: { 'zh-cn': "选择对手战斗宝可梦所拥有的1个招式，作为这个招式使用。" },
		},
	],
	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],
	retreat: 0,
	regulationMark: "G",
	rarity: "Double rare",
	dexId: [151],
}

export default card
