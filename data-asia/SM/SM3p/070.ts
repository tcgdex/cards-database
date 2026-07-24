import { Card } from "../../../interfaces";
import Set from "../SM3p";

const card: Card = {
	set: Set,
	name: {
		ja: "リーリエ",
	},

	illustrator: "Ken Sugimori",
	category: "Trainer",

	effect: {
		ja: "自分の手札が6枚になるように、山札を引く。最初の自分の番に使ったなら、8枚になるように引く。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560228,
			},
		},
	],

	trainerType: "Supporter",
	rarity: "Uncommon",
};

export default card;
