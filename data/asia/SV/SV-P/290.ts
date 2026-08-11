import { Card } from "models/database/card";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ツツジ",
	},

	illustrator: "Sanosuke Sakuma",
	category: "Trainer",

	effect: {
		'ja-jp': "このカードは、相手のサイドの残り枚数が3枚以下のときにしか使えない。おたがいのプレイヤーは、それぞれ手札をすべて山札にもどして切る。その後、自分は6枚、相手は2枚、山札を引く。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 830069,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "F",
	rarity: "Promo",
};

export default card;
