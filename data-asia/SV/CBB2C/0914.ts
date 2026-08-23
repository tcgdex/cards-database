import { Card } from "../../../interfaces"
import Set from "../CBB2C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "仙子伊布VMAX",
	},

	illustrator: "Ryota Murayama",
	category: "Pokemon",
	hp: 310,
	types: ["Psychic"],
	evolveFrom: {
		'zh-cn': "仙子伊布V",
	},
	stage: "VMAX",
	attacks: [
		{
			cost: ["Psychic"],
			name: { 'zh-cn': "珍贵一触" },
			effect: { 'zh-cn': "选择自己手牌中的1张能量，附着于自己的备战宝可梦身上。然后，回复那只宝可梦「120」点HP。" },
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: { 'zh-cn': "极巨和弦" },
			effect: { 'zh-cn': "追加造成自己备战宝可梦的属性种类数量×30点伤害。" },
			damage: "70+",
		},
	],
	weaknesses: [{ type: "Metal", value: "x2" }],
	retreat: 2,
	regulationMark: "E",
	rarity: "Triple Rare",
	dexId: [700],
}

export default card
