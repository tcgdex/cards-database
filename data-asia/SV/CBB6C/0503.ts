import { Card } from "../../../interfaces"
import Set from "../CBB6C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "懒人獭",
	},

	illustrator: "Aya Kusube",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",
	attacks: [
		{
			cost: ["Colorless"],
			name: { 'zh-cn': "懒洋洋" },
			effect: { 'zh-cn': "回复这只宝可梦「60」HP。在下一个自己的回合，这只宝可梦无法撤退。" },
		},
	],
	weaknesses: [{ type: "Fighting", value: "x2" }],
	retreat: 2,
	regulationMark: "H",
	rarity: "Uncommon",
	dexId: [287],
}

export default card
