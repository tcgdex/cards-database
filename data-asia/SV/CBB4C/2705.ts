import { Card } from "../../../interfaces"
import Set from "../CBB4C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "眷恋云",
	},

	illustrator: "DOM",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],
	stage: "Basic",
	attacks: [
		{
			cost: ["Colorless"],
			name: { 'zh-cn': "爱心标志" },
			damage: 30,
		},
		{
			cost: ["Psychic", "Colorless", "Colorless"],
			name: { 'zh-cn': "爱的共振" },
			effect: { 'zh-cn': "如果自己场上，有与对手场上宝可梦相同属性的宝可梦的话，则追加造成120伤害。" },
			damage: "80+",
		},
	],
	weaknesses: [{ type: "Metal", value: "x2" }],
	retreat: 1,
	regulationMark: "H",
	rarity: "Rare",
	dexId: [905],
}

export default card
