import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "臭泥",
	},

	illustrator: "Nisota Niso",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],
	description: {
		'zh-cn': "由污泥变成的宝可梦。会聚集在肮脏的地方来繁殖身体的细菌。",
	},
	stage: "Basic",
	attacks: [
		{
			cost: ["Darkness"],
			name: { 'zh-cn': "黏着压制" },
			effect: { 'zh-cn': "在下一个对手的回合，受到这个招式影响的宝可梦，【撤退】所需能量增加1个。" },
			damage: 10,
		},
	],
	weaknesses: [{ type: "Fighting", value: "x2" }],
	retreat: 2,
	regulationMark: "G",
	rarity: "Common",
	dexId: [88],
}

export default card
