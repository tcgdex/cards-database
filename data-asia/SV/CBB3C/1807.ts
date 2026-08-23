import { Card } from "../../../interfaces"
import Set from "../CBB3C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "弃世猴ex",
	},

	illustrator: "PLANETA Hiiragi",
	category: "Pokemon",
	hp: 320,
	types: ["Fighting"],
	evolveFrom: {
		'zh-cn': "火暴猴",
	},
	stage: "Stage2",
	suffix: "ex",
	attacks: [
		{
			cost: ["Fighting"],
			name: { 'zh-cn': "愤恨积怨" },
			effect: { 'zh-cn': "给这只宝可梦身上放置最多12个伤害指示物，造成放置的伤害指示物数量×20伤害。" },
			damage: "20×",
		},
		{
			cost: ["Fighting", "Colorless"],
			name: { 'zh-cn': "地球上投" },
			damage: 150,
		},
	],
	weaknesses: [{ type: "Psychic", value: "x2" }],
	retreat: 2,
	regulationMark: "G",
	rarity: "Rare",
	dexId: [979],
}

export default card
