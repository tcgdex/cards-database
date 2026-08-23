import { Card } from "../../../interfaces"
import Set from "../151C"

const card: Card = {
	set: Set,
	name: {
		'zh-cn': "胖可丁ex",
	},

	illustrator: "Saki Hayashiro",
	category: "Pokemon",
	hp: 250,
	types: ["Colorless"],
	evolveFrom: {
		'zh-cn': "胖丁",
	},
	stage: "Stage1",
	suffix: "ex",
	abilities: [
		{
			type: "Ability",
			name: { 'zh-cn': "鼓胀之躯" },
			effect: { 'zh-cn': "如果这只宝可梦身上附着了特殊能量的话，则这只宝可梦的最大HP「+100」。" },
		},
	],
	attacks: [
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: { 'zh-cn': "朋友冲撞" },
			effect: { 'zh-cn': "在这个回合，如果从手牌使出了支援者的话，则追加造成90伤害。" },
			damage: "90+",
		},
	],
	weaknesses: [{ type: "Fighting", value: "x2" }],
	retreat: 3,
	regulationMark: "G",
	rarity: "Double rare",
	dexId: [40],
}

export default card
