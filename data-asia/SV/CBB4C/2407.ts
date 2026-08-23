import { Card } from "../../../interfaces"
import Set from "../CBB4C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "美录坦",
	},

	illustrator: "Masa",
	category: "Pokemon",
	hp: 80,
	types: ["Metal"],
	stage: "Basic",
	attacks: [
		{
			cost: ["Metal", "Metal"],
			name: { 'zh-cn': "头锤" },
			damage: 50,
		},
	],
	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],
	retreat: 3,
	regulationMark: "H",
	rarity: "Triple Rare",
	dexId: [808],
}

export default card
