import { Card } from "../../../interfaces"
import Set from "../CBB1C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "狗仔包",
	},

	illustrator: "Saya Tsuruta",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",
	attacks: [
		{
			cost: ["Psychic"],
			name: { 'zh-cn': "软软糯糯" },
			effect: { 'zh-cn': "在下一个对手的回合，这只宝可梦所受到的招式的伤害「-30」。" },
		},
		{
			cost: ["Psychic", "Colorless", "Colorless"],
			name: { 'zh-cn': "活蹦乱跳" },
			damage: 30,
		},
	],
	weaknesses: [{ type: "Metal", value: "x2" }],
	retreat: 2,
	regulationMark: "G",
	rarity: "Common",
	dexId: [926],
}

export default card
