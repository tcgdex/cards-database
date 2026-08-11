import { Card } from "../../../interfaces";
import Set from "../SM9b";

const card: Card = {
	set: Set,
	name: {
		ja: "ウルトラフォレストのかみつかい",
	},

	illustrator: "Masakazu Fukuda",
	category: "Trainer",

	effect: {
		ja: "この番、自分の「ウルトラビースト」が使うワザのダメージは、相手のバトルポケモンにかかっている効果を計算しない。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558165,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "C",
	rarity: "Uncommon",
};

export default card;
