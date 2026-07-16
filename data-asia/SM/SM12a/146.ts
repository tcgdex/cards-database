import { Card } from "../../../interfaces";
import Set from "../SM12a";

const card: Card = {
	set: Set,
	name: {
		ja: "エリカのおもてなし",
	},

	illustrator: "Sanosuke Sakuma",
	category: "Trainer",

	effect: {
		ja: "このカードは、自分の手札がこのカードをふくめて6枚以上なら使えない。相手の場のポケモンの数ぶん、自分の山札を引く。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 544366,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "C",
	rarity: "None",
};

export default card;
