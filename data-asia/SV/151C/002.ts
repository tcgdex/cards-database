import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "妙蛙草",
	},

	illustrator: "Yuu Nishida",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],
	evolveFrom: {
		'zh-cn': "妙蛙种子",
	},
	description: {
		'zh-cn': "沐浴在阳光下越久，身体内会涌出越多力量，背上的花苞也会渐渐成长。",
	},
	stage: "Stage1",
	attacks: [
		{
			cost: ["Grass", "Colorless"],
			name: { 'zh-cn': "寄生种子" },
			effect: { 'zh-cn': "回复这只宝可梦「20」HP。" },
			damage: 30,
		},
		{
			cost: ["Grass", "Grass", "Colorless"],
			name: { 'zh-cn': "藤鞭" },
			damage: 80,
		},
	],
	weaknesses: [{ type: "Fire", value: "x2" }],
	retreat: 3,
	regulationMark: "G",
	rarity: "Uncommon",
	dexId: [2],
}

export default card
