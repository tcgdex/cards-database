import { Card } from "../../../interfaces"
import Set from "../CBB4C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "龙头地鼠",
	},

	illustrator: "Bun Toujo",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],
	evolveFrom: {
		'zh-cn': "螺钉地鼠",
	},
	stage: "Stage1",
	attacks: [
		{
			cost: ["Colorless"],
			name: { 'zh-cn': "泥巴射击" },
			damage: 20,
		},
		{
			cost: ["Fighting", "Fighting", "Colorless"],
			name: { 'zh-cn': "疯狂冲撞" },
			effect: { 'zh-cn': "给这只宝可梦也造成50伤害。" },
			damage: 180,
		},
	],
	weaknesses: [{ type: "Grass", value: "x2" }],
	retreat: 2,
	regulationMark: "H",
	rarity: "Double rare",
	dexId: [530],
}

export default card
