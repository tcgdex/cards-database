import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ウエートレス",
	},

	illustrator: "Cona Nitanda",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の山札を上から6枚見て、その中から基本エネルギーを1枚選び、自分のポケモンにつける。残りのカードは山札にもどして切る。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 864002,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "J",
	rarity: "None",
};

export default card;
