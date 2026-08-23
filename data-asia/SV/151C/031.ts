import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "尼多后",
	},

	illustrator: "Teeziro",
	category: "Pokemon",
	hp: 170,
	types: ["Darkness"],
	evolveFrom: {
		'zh-cn': "尼多娜",
	},
	description: {
		'zh-cn': "把孩子放在背上刺与刺的空隙里来哄它们。在这时绝对不会释放毒素。",
	},
	stage: "Stage2",
	attacks: [
		{
			cost: ["Darkness", "Colorless"],
			name: { 'zh-cn': "女王压制" },
			effect: { 'zh-cn': "在下一个对手的回合，这只宝可梦不会受到【基础】宝可梦的招式的伤害。" },
			damage: 90,
		},
		{
			cost: ["Darkness", "Darkness", "Colorless"],
			name: { 'zh-cn': "撞倒" },
			damage: 160,
		},
	],
	weaknesses: [{ type: "Fighting", value: "x2" }],
	retreat: 3,
	regulationMark: "G",
	rarity: "Uncommon",
	dexId: [31],
}

export default card
