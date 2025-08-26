import { Card } from "../../../interfaces"
import Set from "../neo1"

const card: Card = {
	set: Set,
	name: {
		ja: "aipom",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [190],
	hp: 40,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "盗みます",
			},
			effect: {
				ja: "Shuffle Aipomとすべてのカードがデッキに取り付けられています。コインをひっくり返します。頭の場合は、廃棄の山からカードをデッキにシャッフルします。",
			},
		},
		{
			cost: ["Colorless"],
			name: {
				ja: "テールラップ",
			},
			effect: {
				ja: "2つのコインをフリップします。この攻撃は、ヘッド数の10倍のダメージを与えます。",
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
