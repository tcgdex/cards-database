import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "角金鱼",
	},

	illustrator: "SIE NANAHARA",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	description: {
		'zh-cn': "背鳍和尾鳍像肌肉那样发达。能够以５节的速度在水中游泳。",
	},
	stage: "Basic",
	attacks: [
		{
			cost: ["Water"],
			name: { 'zh-cn': "三连突刺" },
			effect: { 'zh-cn': "抛掷3次硬币，造成正面次数×10伤害。" },
			damage: "10×",
		},
		{
			cost: ["Colorless", "Colorless"],
			name: { 'zh-cn': "射水" },
			damage: 20,
		},
	],
	weaknesses: [{ type: "Lightning", value: "x2" }],
	retreat: 1,
	regulationMark: "G",
	rarity: "Common",
	dexId: [118],
}

export default card
