import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "猴怪",
	},

	illustrator: "Mina Nakai",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],
	description: {
		'zh-cn': "在树上群居的宝可梦。和伙伴分散的猴怪会因寂寞而动不动就生气。",
	},
	stage: "Basic",
	attacks: [
		{
			cost: ["Fighting"],
			name: { 'zh-cn': "大闹一番" },
			effect: { 'zh-cn': "抛掷1次硬币如果为正面，则追加造成20伤害。如果为反面，则给这只宝可梦也造成20伤害。" },
			damage: "20+",
		},
	],
	weaknesses: [{ type: "Psychic", value: "x2" }],
	retreat: 1,
	regulationMark: "G",
	rarity: "Common",
	dexId: [56],
}

export default card
