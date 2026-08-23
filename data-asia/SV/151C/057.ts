import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "火暴猴",
	},

	illustrator: "Mina Nakai",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],
	evolveFrom: {
		'zh-cn': "猴怪",
	},
	description: {
		'zh-cn': "仅是感觉到他方的视线都会暴怒起来，然后去追与它对上视线的家伙。",
	},
	stage: "Stage1",
	attacks: [
		{
			cost: ["Fighting"],
			name: { 'zh-cn': "大声吵嚷" },
			effect: { 'zh-cn': "令这只宝可梦陷入【混乱】状态。" },
			damage: 40,
		},
		{
			cost: ["Fighting", "Colorless", "Colorless"],
			name: { 'zh-cn': "激昂粉碎" },
			effect: { 'zh-cn': "如果这只宝可梦未处于【混乱】状态的话，则这个招式失败。" },
			damage: 150,
		},
	],
	weaknesses: [{ type: "Psychic", value: "x2" }],
	retreat: 2,
	regulationMark: "G",
	rarity: "Uncommon",
	dexId: [57],
}

export default card
