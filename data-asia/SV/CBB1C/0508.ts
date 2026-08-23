import { Card } from "../../../interfaces"
import Set from "../CBB1C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "润水鸭",
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],
	stage: "Basic",
	attacks: [
		{
			cost: ["Water", "Colorless"],
			name: { 'zh-cn': "泼洒凝胶" },
			effect: { 'zh-cn': "在下一个对手的回合，受到这个招式影响的宝可梦在使用招式时，对手将抛掷1次硬币。如果为反面则那个招式失败。" },
			damage: 20,
		},
	],
	weaknesses: [{ type: "Lightning", value: "x2" }],
	retreat: 1,
	regulationMark: "G",
	rarity: "Triple Rare",
	dexId: [912],
}

export default card
