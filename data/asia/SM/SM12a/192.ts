import { Card } from "models/database/card";
import Set from "../SM12a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "かんこうきゃく",
	},

	illustrator: "Naoki Saito",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の手札が5枚になるように、山札を引く。のぞむなら、山札を引く前に、自分の手札を好きなだけトラッシュする。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 544501,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "B",
	rarity: "Ultra Rare",
};

export default card;
