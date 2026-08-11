import { Card } from "models/database/card";
import Set from "../SM9b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ビーストブリンガー",
	},

	illustrator: "",
	category: "Trainer",

	effect: {
		'ja-jp': "自分のサイドの残り枚数が6枚のとき、このカードをつけている「ウルトラビースト」のワザのダメージで、相手のバトル場の「ポケモンGX・EX」がきぜつしたなら、サイドを1枚多くとる。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 558185,
			},
		},
	],

	trainerType: "Tool",
	regulationMark: "C",
	rarity: "Secret Rare",
};

export default card;
