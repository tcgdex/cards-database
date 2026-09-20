import { Card } from "../../../interfaces";
import Set from "../MF";

const card: Card = {
	set: Set,
	name: {
		ja: "ウエートレス",
	},

	illustrator: "Cona Nitanda",
	category: "Trainer",

	effect: {
		ja: "自分の山札を上から6枚見て、その中から基本エネルギーを1枚選び、自分のポケモンにつける。残りのカードは山札にもどして切る。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 908397,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "J",
	rarity: "None",
};

export default card;
