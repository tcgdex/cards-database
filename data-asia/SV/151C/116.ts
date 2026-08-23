import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "墨海马",
	},

	illustrator: "aspara",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],
	description: {
		'zh-cn': "会像跳舞一样在水中游动以制造漩涡。作为娱乐，会和伙伴比拼谁的漩涡更大。",
	},
	stage: "Basic",
	attacks: [
		{
			cost: ["Water"],
			name: { 'zh-cn': "泼水" },
			damage: 10,
		},
		{
			cost: ["Water", "Colorless", "Colorless"],
			name: { 'zh-cn': "锐利之鳍" },
			damage: 40,
		},
	],
	weaknesses: [{ type: "Lightning", value: "x2" }],
	retreat: 1,
	regulationMark: "G",
	rarity: "Common",
	dexId: [116],
}

export default card
