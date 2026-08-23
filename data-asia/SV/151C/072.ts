import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "玛瑙水母",
	},

	illustrator: "miki kudo",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],
	description: {
		'zh-cn': "身体的大部分由水组成。在海中，会和海水混为一体，非常难以发现。",
	},
	stage: "Basic",
	attacks: [
		{
			cost: ["Water"],
			name: { 'zh-cn': "麻酥酥" },
			damage: 10,
		},
		{
			cost: ["Colorless", "Colorless"],
			name: { 'zh-cn': "洒水" },
			damage: 20,
		},
	],
	weaknesses: [{ type: "Lightning", value: "x2" }],
	retreat: 1,
	regulationMark: "G",
	rarity: "Common",
	dexId: [72],
}

export default card
