import { Card } from "../../../interfaces"
import Set from "../CBB3C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "谜拟丘",
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",
	abilities: [
		{
			type: "Ability",
			name: { 'zh-cn': "神秘守护" },
			effect: { 'zh-cn': "这只宝可梦，不受到对手「宝可梦【ex】・【V】」的招式的伤害。" },
		},
	],
	attacks: [
		{
			cost: ["Psychic", "Colorless"],
			name: { 'zh-cn': "幽灵之眼" },
			effect: { 'zh-cn': "给对手的战斗宝可梦身上，放置7个伤害指示物。" },
		},
	],
	weaknesses: [{ type: "Metal", value: "x2" }],
	retreat: 1,
	regulationMark: "G",
	rarity: "Double rare",
	dexId: [778],
}

export default card
