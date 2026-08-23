import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "派拉斯特",
	},

	illustrator: "Yoriyuki Ikegami",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],
	evolveFrom: {
		'zh-cn': "派拉斯",
	},
	description: {
		'zh-cn': "底下的虫子基本上死了，真正的本体是背上的蘑菇。如果蘑菇掉下来，它就不会动了。",
	},
	stage: "Stage1",
	attacks: [
		{
			cost: ["Grass"],
			name: { 'zh-cn': "散播菌丝" },
			effect: { 'zh-cn': "抛掷2次硬币，选择自己牌库中最多与出现正面次数相同数量的【草】宝可梦，放于备战区。并重洗牌库。" },
		},
		{
			cost: ["Colorless", "Colorless"],
			name: { 'zh-cn': "利爪劈开" },
			damage: 50,
		},
	],
	weaknesses: [{ type: "Fire", value: "x2" }],
	retreat: 2,
	regulationMark: "G",
	rarity: "Uncommon",
	dexId: [47],
}

export default card
