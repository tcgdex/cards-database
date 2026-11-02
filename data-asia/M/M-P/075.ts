import { Card } from "../../../interfaces";
import Set from "../M-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ジェット",
	},

	illustrator: "GIDORA",
	category: "Trainer",

	effect: {
		ja: "相手の場の「メガシンカex」の数ぶん、自分の山札を引く。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 871040,
				tcgplayer: 684578,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "J",
	rarity: "Promo",
};

export default card;
