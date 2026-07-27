import { Card } from "../../../interfaces";
import Set from "../SM9b";

const card: Card = {
	set: Set,
	name: {
		ja: "ビーストリング",
	},

	illustrator: "5ban Graphics",
	category: "Trainer",

	effect: {
		ja: "このカードは、相手のサイドの残り枚数が、4枚または3枚でなければ使えない。自分の山札にある基本エネルギーを2枚まで、自分の「ウルトラビースト」1匹につける。そして山札を切る。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 558170,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "B",
	rarity: "Rare Holo",
};

export default card;
