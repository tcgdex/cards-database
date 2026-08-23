import { Card } from "../../../interfaces"
import Set from "../CBB5C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "浩大鲸",
	},

	illustrator: "Uta",
	category: "Pokemon",
	hp: 180,
	types: ["Water"],
	evolveFrom: {
		'zh-cn': "走鲸",
	},
	stage: "Stage1",
	abilities: [
		{
			type: "Ability",
			name: { 'zh-cn': "健壮之躯" },
			effect: { 'zh-cn': "这只宝可梦所受到的招式的伤害「-30」。" },
		},
	],
	attacks: [
		{
			cost: ["Water", "Colorless", "Colorless", "Colorless"],
			name: { 'zh-cn': "危险巨口" },
			damage: 150,
		},
	],
	weaknesses: [{ type: "Metal", value: "x2" }],
	retreat: 3,
	regulationMark: "H",
	rarity: "Double rare",
	dexId: [975],
}

export default card
