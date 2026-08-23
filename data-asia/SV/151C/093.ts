import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "鬼斯通",
	},

	illustrator: "Tomokazu Komiya",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],
	evolveFrom: {
		'zh-cn': "鬼斯",
	},
	description: {
		'zh-cn': "喜欢隐匿在黑暗中伸出气体状的手去拍人的肩膀。若被它碰到，身体就会抖个不停。",
	},
	stage: "Stage1",
	abilities: [
		{
			type: "Ability",
			name: { 'zh-cn': "魂归故里" },
			effect: { 'zh-cn': "在自己的回合，当将这张卡牌从手牌使出并进行进化时，可使用1次。选择对手弃牌区中的1张支援者，放回对手的手牌。" },
		},
	],
	attacks: [
		{
			cost: ["Psychic", "Colorless"],
			name: { 'zh-cn': "喃喃自语" },
			damage: 30,
		},
	],
	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],
	retreat: 1,
	regulationMark: "G",
	rarity: "Uncommon",
	dexId: [93],
}

export default card
