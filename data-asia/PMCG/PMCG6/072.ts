import { Card } from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
	set: Set,
	name: {
		ja: "コガの同上",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [132],
	hp: 40,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "巨大な成長",
			},
			effect: {
				ja: "コインをひっくり返します。ヘッドの場合、KogaのDittoの最大HPは80になり、KogaのDittoのポンド攻撃のベースダメージは10ではなく30です（KogaのDittoがこの効果を終了します。）",
			},
		},
		{
			cost: ["Colorless"],
			name: {
				ja: "ポンド",
			},
			damage: 10,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
		},
	],
};

export default card
