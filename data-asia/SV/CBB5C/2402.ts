import { Card } from "../../../interfaces"
import Set from "../CBB5C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "涌跃鸭",
	},

	illustrator: "OKACHEKE",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],
	evolveFrom: {
		'zh-cn': "润水鸭",
	},
	stage: "Stage1",
	attacks: [
		{
			cost: ["Water"],
			name: { 'zh-cn': "水流利刃" },
			damage: 40,
		},
	],
	weaknesses: [{ type: "Lightning", value: "x2" }],
	retreat: 1,
	regulationMark: "H",
	rarity: "Common",
	dexId: [913],
}

export default card
