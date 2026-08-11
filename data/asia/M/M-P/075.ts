import { Card } from "models/database/card";
import Set from "../M-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ジェット",
	},

	illustrator: "GIDORA",
	category: "Trainer",

	effect: {
		'ja-jp': "相手の場の「メガシンカex」の数ぶん、自分の山札を引く。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 871040,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "J",
	rarity: "Promo",
};

export default card;
