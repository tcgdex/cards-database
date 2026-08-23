import { Card } from "../../../interfaces"
import Set from "../CBB6C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "艾姆利多",
	},

	illustrator: "HYOGONOSUKE",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",
	attacks: [
		{
			cost: ["Colorless"],
			name: { 'zh-cn': "心满意足" },
			effect: { 'zh-cn': "选择自己手牌中最多2张「基本【超】能量」，以任意方式附着于自己的宝可梦身上。" },
		},
		{
			cost: ["Psychic", "Psychic"],
			name: { 'zh-cn': "神破" },
			effect: { 'zh-cn': "如果自己的备战区中没有「由克希」「亚克诺姆」的话，则这个招式失败。" },
			damage: 160,
		},
	],
	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],
	retreat: 1,
	regulationMark: "H",
	rarity: "Rare",
	dexId: [481],
}

export default card
