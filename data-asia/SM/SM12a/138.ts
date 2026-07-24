import { Card } from "../../../interfaces";
import Set from "../SM12a";

const card: Card = {
	set: Set,
	name: {
		ja: "ロストミキサー",
	},

	illustrator: "5ban Graphics",
	category: "Trainer",

	effect: {
		ja: "自分の手札を2枚、ロストゾーンに置く。その後、自分の山札を1枚引く。（自分の手札を2枚、ロストゾーンに置けないなら、このカードは使えない。）",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 544326,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "B",
	rarity: "None",
};

export default card;
