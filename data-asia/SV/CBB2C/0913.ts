import { Card } from "../../../interfaces"
import Set from "../CBB2C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "仙子伊布V",
	},

	illustrator: "aky CG Works",
	category: "Pokemon",
	hp: 200,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "V",
	abilities: [
		{
			type: "Ability",
			name: { 'zh-cn': "梦中赠礼" },
			effect: { 'zh-cn': "在自己的回合可以使用1次，如果使用了，则自己的回合结束。选择自己牌库中1张物品，在给对手看过之后，加入手牌。并重洗牌库。" },
		},
	],
	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: { 'zh-cn': "魔法射击" },
			damage: 60,
		},
	],
	weaknesses: [{ type: "Metal", value: "x2" }],
	retreat: 1,
	regulationMark: "E",
	rarity: "Rare",
	dexId: [700],
}

export default card
