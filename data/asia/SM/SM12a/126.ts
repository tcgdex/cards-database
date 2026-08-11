import { Card } from "../../../interfaces";
import Set from "../SM12a";

const card: Card = {
	set: Set,
	name: {
		ja: "ビーストリング",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		ja: "このカードは、相手のサイドの残り枚数が、4枚または3枚でなければ使えない。自分の山札にある基本エネルギーを2枚まで、自分の「ウルトラビースト」1匹につける。そして山札を切る。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 544266,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "B",
	rarity: "None",
};

export default card;
