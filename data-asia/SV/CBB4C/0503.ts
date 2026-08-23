import { Card } from "../../../interfaces"
import Set from "../CBB4C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "帕底亚 乌波",
	},

	illustrator: "Lee HyunJung",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],
	stage: "Basic",
	attacks: [
		{
			cost: ["Darkness"],
			name: { 'zh-cn': "打滚" },
			effect: { 'zh-cn': "抛掷1次硬币如果为正面，则追加造成20伤害。" },
			damage: "10+",
		},
	],
	weaknesses: [{ type: "Fighting", value: "x2" }],
	retreat: 1,
	regulationMark: "H",
	rarity: "Uncommon",
	dexId: [194],
}

export default card
