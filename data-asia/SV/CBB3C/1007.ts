import { Card } from "../../../interfaces"
import Set from "../CBB3C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "达克莱伊ex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 210,
	types: ["Darkness"],
	stage: "Basic",
	suffix: "ex",
	attacks: [
		{
			cost: ["Darkness"],
			name: { 'zh-cn': "暗之风" },
			damage: 40,
		},
		{
			cost: ["Darkness", "Darkness", "Colorless"],
			name: { 'zh-cn': "暗夜冲击" },
			damage: 110,
		},
	],
	weaknesses: [{ type: "Grass", value: "x2" }],
	retreat: 2,
	regulationMark: "H",
	rarity: "Rare",
	dexId: [491],
}

export default card
