import { Card } from "../../../interfaces";
import Set from "../SM6a";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒガナ",
	},

	illustrator: "Hideki Ishikawa",
	category: "Trainer",

	effect: {
		ja: "このカードは、前の相手の番に、自分のポケモンがきぜつしていなければ使えない。自分の手札にある基本エネルギーを2枚まで、自分の[竜]ポケモン1匹につける。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 559387,
			},
		},
	],

	trainerType: "Supporter",
	rarity: "Ultra Rare",
};

export default card;
