import { Card } from "../../../interfaces"
import Set from "../CBB1C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "偶叫獒",
	},

	illustrator: "Shibuzoh.",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",
	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: { 'zh-cn': "踢飞" },
			damage: 20,
		},
		{
			cost: ["Darkness", "Colorless", "Colorless"],
			name: { 'zh-cn': "锐利之牙" },
			damage: 50,
		},
	],
	weaknesses: [{ type: "Grass", value: "x2" }],
	retreat: 2,
	regulationMark: "G",
	rarity: "Common",
	dexId: [942],
}

export default card
