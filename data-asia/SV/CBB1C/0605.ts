import { Card } from "../../../interfaces"
import Set from "../CBB1C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "涌跃鸭",
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],
	evolveFrom: {
		'zh-cn': "润水鸭",
	},
	stage: "Stage1",
	attacks: [
		{
			cost: ["Water"],
			name: { 'zh-cn': "水枪" },
			damage: 30,
		},
		{
			cost: ["Water", "Colorless"],
			name: { 'zh-cn': "飞溅" },
			damage: 50,
		},
	],
	weaknesses: [{ type: "Lightning", value: "x2" }],
	retreat: 1,
	regulationMark: "G",
	rarity: "Rare",
	dexId: [913],
}

export default card
