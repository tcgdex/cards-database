import { Card } from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
	set: Set,
	name: {
		ja: "ブレインのモルトレス",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [146],
	hp: 90,
	types: ["Fire"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Fire", "Fire", "Fire", "Fire", "Fire"],
			name: {
				ja: "フェニックスの炎",
			},
			effect: {
				ja: "コインをひっくり返します。尾の場合、シャッフルブレインのモルト、およびすべてのカードがデッキに取り付けられています（ダメージを与えた後）。",
			},
			damage: 90,
		},
	],

	retreat: 3,

	variants: [
		{
			type: "holo",
		},
	],
};

export default card
