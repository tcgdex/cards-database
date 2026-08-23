import { Card } from "../../../interfaces"
import Set from "../CBB5C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "墨海马",
	},

	illustrator: "Shimaris Yukichi",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],
	stage: "Basic",
	attacks: [
		{
			cost: ["Water"],
			name: { 'zh-cn': "呆呆" },
			effect: { 'zh-cn': "回复这只宝可梦「30」HP。" },
		},
		{
			cost: ["Colorless", "Colorless"],
			name: { 'zh-cn': "鳍之利刃" },
			damage: 20,
		},
	],
	weaknesses: [{ type: "Lightning", value: "x2" }],
	retreat: 1,
	regulationMark: "H",
	rarity: "Uncommon",
	dexId: [116],
}

export default card
