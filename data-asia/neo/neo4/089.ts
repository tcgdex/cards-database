import { Card } from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
	set: Set,
	name: {
		ja: "Girafarig",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [203],
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "テールバイト",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、この攻撃は10ダメージに加えて20ダメージを与えます。尾の場合、この攻撃は10ダメージを与えます。",
			},
		},
		{
			cost: ["Psychic", "Psychic"],
			name: {
				ja: "サイキック",
			},
			effect: {
				ja: "ディフェンディングポケモンに取り付けられた各エネルギーカードに対して、10のダメージと10ダメージがさらに10ダメージを与えます。",
			},
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
