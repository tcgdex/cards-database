import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "胡地ex",
	},

	illustrator: "PLANETA Tsuji",
	category: "Pokemon",
	hp: 310,
	types: ["Psychic"],
	evolveFrom: {
		'zh-cn': "勇基拉",
	},
	stage: "Stage2",
	suffix: "ex",
	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: { 'zh-cn': "意志劫持" },
			effect: { 'zh-cn': "追加造成对手备战宝可梦数量×30伤害。" },
			damage: "90+",
		},
		{
			cost: ["Psychic", "Psychic"],
			name: { 'zh-cn': "维度之手" },
			effect: { 'zh-cn': "这个招式，即使这只宝可梦在备战区也能使用。" },
			damage: 120,
		},
	],
	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],
	retreat: 1,
	regulationMark: "G",
	rarity: "Shiny Ultra Rare",
	dexId: [65],
}

export default card
