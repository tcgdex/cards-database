import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ハッサク",
	},

	illustrator: "GOSSAN",
	category: "Trainer",

	effect: {
		ja: "このカードは、前の相手の番に、自分のポケモンがきぜつしていなければ使えない。自分の山札を上から8枚見て、その中からカードを3枚まで選び、手札に加える。残りのカードは山札にもどして切る。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 864023,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "H",
	rarity: "None",
};

export default card;
