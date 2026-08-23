import { Card } from "../../../interfaces"
import Set from "../CBB6C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "触手百合",
	},

	illustrator: "Ounishi",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],
	evolveFrom: {
		'zh-cn': "谜之化石",
	},
	stage: "Stage1",
	attacks: [
		{
			cost: ["Grass"],
			name: { 'zh-cn': "束缚" },
			effect: { 'zh-cn': "在下一个对手的回合，受到这个招式影响的宝可梦，无法撤退。" },
			damage: 50,
		},
	],
	weaknesses: [{ type: "Fire", value: "x2" }],
	retreat: 2,
	regulationMark: "H",
	rarity: "Uncommon",
	dexId: [345],
}

export default card
