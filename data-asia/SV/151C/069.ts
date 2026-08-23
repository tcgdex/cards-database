import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "喇叭芽",
	},

	illustrator: "Jerky",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	description: {
		'zh-cn': "因为花苞长得像人脸，所以私底下它被说成是某种传说中的风茄。",
	},
	stage: "Basic",
	attacks: [
		{
			cost: ["Grass"],
			name: { 'zh-cn': "居合劈" },
			damage: 10,
		},
		{
			cost: ["Grass", "Colorless"],
			name: { 'zh-cn': "束缚" },
			effect: { 'zh-cn': "在下一个对手的回合，受到这个招式影响的宝可梦，无法撤退。" },
			damage: 20,
		},
	],
	weaknesses: [{ type: "Fire", value: "x2" }],
	retreat: 1,
	regulationMark: "G",
	rarity: "Common",
	dexId: [69],
}

export default card
