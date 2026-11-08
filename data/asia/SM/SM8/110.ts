import { Card } from "models/database/card";
import Set from "../SM8";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ロストミキサー",
	},

	illustrator: "",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の手札を2枚、ロストゾーンに置く。その後、自分の山札を1枚引く。（自分の手札を2枚、ロストゾーンに置けないなら、このカードは使えない。）",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 558749,
			},
		},
	],

	trainerType: "Item",
	rarity: "Secret Rare",
};

export default card;
