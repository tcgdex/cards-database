import { Card } from "models/database/card";
import Set from "../SM6b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "マサキのメンテナンス",
	},

	illustrator: "Sanosuke Sakuma",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の手札を1枚、山札にもどして切る。その後、自分の山札を3枚引く。（自分の手札をもどせないなら、このカードは使えない。）",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 559226,
			},
		},
	],

	trainerType: "Supporter",
	rarity: "Ultra Rare",
};

export default card;
