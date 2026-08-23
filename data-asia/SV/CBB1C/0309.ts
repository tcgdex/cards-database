import { Card } from "../../../interfaces"
import Set from "../CBB1C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "呆火鳄",
	},

	illustrator: "Ito Kyoko",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],
	stage: "Basic",
	attacks: [
		{
			cost: ["Colorless"],
			name: { 'zh-cn': "发呆" },
			effect: { 'zh-cn': "抛掷1次硬币如果为正面，则回复这只宝可梦「30」HP。" },
		},
		{
			cost: ["Fire", "Colorless"],
			name: { 'zh-cn': "火焰" },
			damage: 30,
		},
	],
	weaknesses: [{ type: "Water", value: "x2" }],
	retreat: 3,
	regulationMark: "G",
	rarity: "Triple Rare",
	dexId: [909],
}

export default card
