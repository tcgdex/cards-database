import { Card } from "../../../interfaces";
import Set from "../SM11b";

const card: Card = {
	set: Set,
	name: {
		ja: "リーリエの全力",
	},

	illustrator: "kodama",
	category: "Trainer",

	effect: {
		ja: "自分の山札を4枚引く。このカードを使った番の終わりに、自分の手札が3枚以上あるなら、その手札が2枚になるように、山札にもどして切る。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 555249,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "C",
	rarity: "Uncommon",
};

export default card;
