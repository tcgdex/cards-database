import { Card } from "../../../interfaces"
import Set from "../neo1"

const card: Card = {
	set: Set,
	name: {
		ja: "レディバ",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [165],
	hp: 40,
	types: ["Grass"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Grass"],
			name: {
				ja: "超音速",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御ポケモンは混乱しています。",
			},
		},
		{
			cost: ["Grass", "Grass"],
			name: {
				ja: "彗星パンチ",
			},
			effect: {
				ja: "4コインをひっくり返します。この攻撃は、ヘッド数の10倍のダメージを与えます。",
			},
		},
	],


	variants: [
		{
			type: "normal",
		},
	],
};

export default card
