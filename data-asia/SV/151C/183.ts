import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "迷唇姐ex",
	},

	illustrator: "Ayaka Yoshida",
	category: "Pokemon",
	hp: 200,
	types: ["Water"],
	stage: "Basic",
	suffix: "ex",
	attacks: [
		{
			cost: ["Water", "Colorless", "Colorless"],
			name: { 'zh-cn': "心动之吻" },
			effect: { 'zh-cn': "如果对手的战斗宝可梦处于【睡眠】状态的话，则令其【昏厥】。" },
		},
		{
			cost: ["Water", "Water", "Water"],
			name: { 'zh-cn': "冰冻之风" },
			effect: { 'zh-cn': "令对手的战斗宝可梦陷入【睡眠】状态。" },
			damage: 120,
		},
	],
	weaknesses: [{ type: "Metal", value: "x2" }],
	retreat: 2,
	regulationMark: "G",
	rarity: "Ultra Rare",
	dexId: [124],
}

export default card
