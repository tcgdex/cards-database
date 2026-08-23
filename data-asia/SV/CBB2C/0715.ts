import { Card } from "../../../interfaces"
import Set from "../CBB2C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "叶伊布",
	},

	illustrator: "HYOGONOSUKE",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],
	evolveFrom: {
		'zh-cn': "伊布",
	},
	stage: "Stage1",
	attacks: [
		{
			cost: ["Colorless"],
			name: { 'zh-cn': "能量花园" },
			effect: { 'zh-cn': "选择自己牌库中，最多3张属性各不同的基本能量，以任意方式附着于自己的宝可梦身上。并重洗牌库。" },
		},
		{
			cost: ["Grass", "Colorless", "Colorless"],
			name: { 'zh-cn': "飞叶旋风" },
			effect: { 'zh-cn': "在下一个自己的回合，这只宝可梦无法使用招式。" },
			damage: 120,
		},
	],
	weaknesses: [{ type: "Fire", value: "x2" }],
	retreat: 2,
	regulationMark: "F",
	rarity: "Triple Rare",
	dexId: [470],
}

export default card
