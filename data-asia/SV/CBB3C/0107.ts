import { Card } from "../../../interfaces"
import Set from "../CBB3C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "皮可西ex",
	},

	illustrator: "Satoshi Shirai",
	category: "Pokemon",
	hp: 260,
	types: ["Psychic"],
	evolveFrom: {
		'zh-cn': "皮皮",
	},
	stage: "Stage1",
	suffix: "ex",
	abilities: [
		{
			type: "Ability",
			name: { 'zh-cn': "月面领域" },
			effect: { 'zh-cn': "只要这只宝可梦在场上，身上附着了【超】能量的自己所有宝可梦的【撤退】所需能量，全部消除。" },
		},
	],
	attacks: [
		{
			cost: ["Psychic", "Psychic", "Psychic"],
			name: { 'zh-cn': "月之奇迹" },
			effect: { 'zh-cn': "选择自己场上宝可梦身上附着的任意数量的【超】能量，以任意方式转附于自己的宝可梦身上。" },
			damage: 170,
		},
	],
	weaknesses: [{ type: "Metal", value: "x2" }],
	retreat: 2,
	regulationMark: "G",
	rarity: "Rare",
	dexId: [36],
}

export default card
