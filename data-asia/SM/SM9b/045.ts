import { Card } from "../../../interfaces";
import Set from "../SM9b";

const card: Card = {
	set: Set,
	name: {
		ja: "ビーストブリンガー",
	},

	illustrator: "Ayaka Yoshida",
	category: "Trainer",

	effect: {
		ja: "自分のサイドの残り枚数が6枚のとき、このカードをつけている「ウルトラビースト」のワザのダメージで、相手のバトル場の「ポケモンGX・EX」がきぜつしたなら、サイドを1枚多くとる。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558163,
			},
		},
	],

	trainerType: "Tool",
	regulationMark: "C",
	rarity: "Uncommon",
};

export default card;
