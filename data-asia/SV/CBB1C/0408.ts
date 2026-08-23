import { Card } from "../../../interfaces"
import Set from "../CBB1C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "炙烫鳄",
	},

	illustrator: "kantaro",
	category: "Pokemon",
	hp: 110,
	types: ["Fire"],
	evolveFrom: {
		'zh-cn': "呆火鳄",
	},
	stage: "Stage1",
	attacks: [
		{
			cost: ["Fire"],
			name: { 'zh-cn': "吐火" },
			damage: 30,
		},
		{
			cost: ["Fire", "Fire"],
			name: { 'zh-cn': "巨声" },
			damage: 70,
		},
	],
	weaknesses: [{ type: "Water", value: "x2" }],
	retreat: 3,
	regulationMark: "G",
	rarity: "Triple Rare",
	dexId: [910],
}

export default card
