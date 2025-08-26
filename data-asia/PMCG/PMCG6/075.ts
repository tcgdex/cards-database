import { Card } from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
	set: Set,
	name: {
		ja: "_____のチャンシー",
	},

	rarity: "Ultra Rare",
	category: "Pokemon",
	dexId: [113],
	hp: 90,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "ラッキーエッグ",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合は、2枚のカードを描きます。尾の場合は、手からデッキに2枚のカードをシャッフルします。 （2枚未満のカードがある場合は、すべてをデッキにシャッフルします。）",
			},
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				ja: "ラッキーパンチ",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、この攻撃は10ダメージに加えて30ダメージを与えます。",
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
