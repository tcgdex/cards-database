import { Card } from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
	set: Set,
	name: {
		ja: "Electabuzz",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [125],
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Lightning"],
			name: {
				ja: "サンダーショック",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
			},
			damage: 10,
		},
		{
			cost: ["Lightning", "Colorless"],
			name: {
				ja: "サンダーパンチ",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、この攻撃は30ダメージに加えて10ダメージを与えます。尾の場合、ElectaBuzzはそれ自体に10ダメージを与えます。",
			},

		},
	],

	retreat: 2,

	variants: [
		{
			type: "normal",
		},
	],
};

export default card
