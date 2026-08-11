import { Card } from "models/database/card";
import Set from "../SM10b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ヒコウZエアスラッシュ",
	},

	illustrator: "aky CG Works",
	category: "Trainer",

	effect: {
		'ja-jp': "このカードをつけている、ワザ「エアスラッシュ」を持つポケモンは、このカードに書かれているGXワザを使える。［ワザを使うためのエネルギーは必要。］",
	},

	attacks: [
		{
			name: { ja: "ダイブクラッシュGX" },
			damage: 180,
			cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "次の相手の番、このポケモンはワザのダメージや効果を受けない。",
			},
		},
	],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 557246,
			},
		},
	],

	trainerType: "Tool",
	regulationMark: "C",
	rarity: "Uncommon",
};

export default card;
