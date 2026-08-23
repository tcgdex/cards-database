import { Card } from "../../../interfaces"
import Set from "../CBB5C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "小仙奶",
	},

	illustrator: "OKACHEKE",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",
	attacks: [
		{
			cost: ["Psychic"],
			name: { 'zh-cn': "喃喃自语" },
			damage: 20,
		},
	],
	weaknesses: [{ type: "Metal", value: "x2" }],
	retreat: 1,
	regulationMark: "H",
	rarity: "Uncommon",
	dexId: [868],
}

export default card
