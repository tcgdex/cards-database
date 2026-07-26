import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ロトりぼう",
	},

	illustrator: "Studio Bora Inc.",
	category: "Trainer",

	effect: {
		ja: "自分の山札を上から4枚見て、その中からサポートを好きなだけ選び、相手に見せて、手札に加える。残りのカードは山札にもどして切る。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 766676,
				tcgplayer: 587903,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "G",
	rarity: "Promo",
};

export default card;
