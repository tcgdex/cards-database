import { Card } from "../../../interfaces"
import Set from "../CBB3C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "沙奈朵",
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 150,
	types: ["Psychic"],
	evolveFrom: {
		'zh-cn': "奇鲁莉安",
	},
	stage: "Stage2",
	abilities: [
		{
			type: "Ability",
			name: { 'zh-cn': "精炼" },
			effect: { 'zh-cn': "在自己的回合，如果将自己的1张手牌放于弃牌区的话，则可使用1次。从自己牌库上方抽取2张卡牌。" },
		},
	],
	attacks: [
		{
			cost: ["Psychic", "Colorless"],
			name: { 'zh-cn': "魔法射击" },
			damage: 120,
		},
	],
	weaknesses: [{ type: "Metal", value: "x2" }],
	retreat: 2,
	regulationMark: "F",
	rarity: "Rare",
	dexId: [282],
}

export default card
