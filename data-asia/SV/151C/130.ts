import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "暴鲤龙",
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 190,
	types: ["Water"],
	evolveFrom: {
		'zh-cn': "鲤鱼王",
	},
	description: {
		'zh-cn': "据说暴鲤龙一旦现身，不把周围的一切都燃烧殆尽，它的怒火就不会平息。",
	},
	stage: "Stage1",
	abilities: [
		{
			type: "Ability",
			name: { 'zh-cn': "暴躁者" },
			effect: { 'zh-cn': "在自己的回合，当将这张卡牌从手牌使出并进行进化时，必须使用1次。将自己牌库上方的5张卡牌放于弃牌区。" },
		},
	],
	attacks: [
		{
			cost: ["Water", "Colorless", "Colorless", "Colorless"],
			name: { 'zh-cn': "破坏光线" },
			effect: { 'zh-cn': "选择对手战斗宝可梦身上附着的1个能量，放于弃牌区。" },
			damage: 200,
		},
	],
	weaknesses: [{ type: "Lightning", value: "x2" }],
	retreat: 4,
	regulationMark: "G",
	rarity: "Rare",
	dexId: [130],
}

export default card
