import { Card } from "../../../interfaces"
import Set from "../CBB5C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "小小象",
	},

	illustrator: "Saboteri",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],
	stage: "Basic",
	attacks: [
		{
			cost: ["Fighting"],
			name: { 'zh-cn': "头锤" },
			damage: 20,
		},
	],
	weaknesses: [{ type: "Grass", value: "x2" }],
	retreat: 2,
	regulationMark: "H",
	rarity: "Triple Rare",
	dexId: [231],
}

export default card
