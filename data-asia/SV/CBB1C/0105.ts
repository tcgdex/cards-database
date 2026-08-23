import { Card } from "../../../interfaces"
import Set from "../CBB1C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "新叶喵",
	},

	illustrator: "Saya Tsuruta",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",
	attacks: [
		{
			cost: ["Colorless"],
			name: { 'zh-cn': "抓" },
			damage: 10,
		},
		{
			cost: ["Grass", "Colorless"],
			name: { 'zh-cn': "树叶" },
			damage: 20,
		},
	],
	weaknesses: [{ type: "Fire", value: "x2" }],
	retreat: 1,
	regulationMark: "G",
	rarity: "Rare",
	dexId: [906],
}

export default card
