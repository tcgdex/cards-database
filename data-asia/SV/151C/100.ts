import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "霹雳电球",
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],
	description: {
		'zh-cn': "靠翻滚身体来移动，如果地面凹凸不平，就会受到冲击而爆炸。",
	},
	stage: "Basic",
	attacks: [
		{
			cost: ["Lightning"],
			name: { 'zh-cn': "滚动攻击" },
			effect: { 'zh-cn': "抛掷1次硬币如果为正面，则追加造成20伤害。" },
			damage: "10+",
		},
	],
	weaknesses: [{ type: "Fighting", value: "x2" }],
	retreat: 1,
	regulationMark: "G",
	rarity: "Common",
	dexId: [100],
}

export default card
