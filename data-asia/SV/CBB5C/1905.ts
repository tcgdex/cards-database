import { Card } from "../../../interfaces"
import Set from "../CBB5C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "腾蹴小将",
	},

	illustrator: "aspara",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],
	evolveFrom: {
		'zh-cn': "炎兔儿",
	},
	stage: "Stage1",
	attacks: [
		{
			cost: ["Fire"],
			name: { 'zh-cn': "下盘踢" },
			damage: 30,
		},
		{
			cost: ["Fire", "Colorless", "Colorless"],
			name: { 'zh-cn': "烈焰" },
			damage: 60,
		},
	],
	weaknesses: [{ type: "Water", value: "x2" }],
	retreat: 1,
	regulationMark: "H",
	rarity: "Rare",
	dexId: [814],
}

export default card
