import { Card } from "../../../interfaces"
import Set from "../CBB4C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "萌虻",
	},

	illustrator: "Sekio",
	category: "Pokemon",
	hp: 30,
	types: ["Psychic"],
	stage: "Basic",
	attacks: [
		{
			cost: ["Colorless"],
			name: { 'zh-cn': "微微吸取" },
			effect: { 'zh-cn': "回复这只宝可梦「10」HP。" },
			damage: 10,
		},
	],
	weaknesses: [{ type: "Metal", value: "x2" }],
	retreat: 1,
	regulationMark: "H",
	rarity: "Uncommon",
	dexId: [742],
}

export default card
