import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "铁甲蛹",
	},

	illustrator: "Tika Matsuno",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],
	evolveFrom: {
		'zh-cn': "绿毛虫",
	},
	description: {
		'zh-cn': "虽然有坚硬的外壳，因为壳里的身体很软，所以无法抵抗强力的攻击。",
	},
	stage: "Stage1",
	attacks: [
		{
			cost: ["Grass"],
			name: { 'zh-cn': "撞击" },
			damage: 20,
		},
		{
			cost: ["Colorless", "Colorless"],
			name: { 'zh-cn': "防御姿势" },
			effect: { 'zh-cn': "抛掷1次硬币如果为正面，则在下一个对手的回合，这只宝可梦不受到招式的伤害。" },
		},
	],
	weaknesses: [{ type: "Fire", value: "x2" }],
	retreat: 3,
	regulationMark: "G",
	rarity: "Common",
	dexId: [11],
}

export default card
