import { Card } from "../../../interfaces"
import Set from "../CBB6C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "啃果虫",
	},

	illustrator: "Tetsu Kayama",
	category: "Pokemon",
	hp: 40,
	types: ["Grass"],
	stage: "Basic",
	attacks: [
		{
			cost: ["Grass"],
			name: { 'zh-cn': "微微吸取" },
			effect: { 'zh-cn': "回复这只宝可梦「10」HP。" },
			damage: 10,
		},
	],
	weaknesses: [{ type: "Fire", value: "x2" }],
	retreat: 1,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [840],
}

export default card
