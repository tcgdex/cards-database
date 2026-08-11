import { Card } from "../../../interfaces";
import Set from "../SM12";

const card: Card = {
	set: Set,
	name: {
		ja: "しまめぐりのあかし",
	},

	illustrator: "sadaji",
	category: "Trainer",

	effect: {
		ja: "このカードをつけている「ポケモンGX・EX」の最大HPは「100」小さくなり、そのポケモンが相手のワザのダメージできぜつしたとき、とられるサイドは1枚少なくなる。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 555002,
			},
		},
	],

	trainerType: "Tool",
	regulationMark: "C",
	rarity: "Uncommon",
};

export default card;
