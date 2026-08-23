import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "尼多力诺",
	},

	illustrator: "Shiburingaru",
	category: "Pokemon",
	hp: 90,
	types: ["Darkness"],
	evolveFrom: {
		'zh-cn': "尼多朗",
	},
	description: {
		'zh-cn': "神经敏感，动不动就打架。体内的肾上腺素一增加，毒素的浓度也会提高。",
	},
	stage: "Stage1",
	attacks: [
		{
			cost: ["Darkness"],
			name: { 'zh-cn': "锐利之牙" },
			damage: 30,
		},
		{
			cost: ["Darkness", "Darkness", "Colorless"],
			name: { 'zh-cn': "怪力角击" },
			damage: 100,
		},
	],
	weaknesses: [{ type: "Fighting", value: "x2" }],
	retreat: 2,
	regulationMark: "G",
	rarity: "Uncommon",
	dexId: [33],
}

export default card
