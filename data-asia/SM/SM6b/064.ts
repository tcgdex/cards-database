import { Card } from "../../../interfaces";
import Set from "../SM6b";

const card: Card = {
	set: Set,
	name: {
		ja: "マサキのメンテナンス",
	},

	illustrator: "Ken Sugimori",
	category: "Trainer",

	effect: {
		ja: "自分の手札を1枚、山札にもどして切る。その後、自分の山札を3枚引く。（自分の手札をもどせないなら、このカードは使えない。）",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559214,
			},
		},
	],

	trainerType: "Supporter",
	rarity: "Common",
};

export default card;
