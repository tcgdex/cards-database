import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒビキの冒険",
	},

	illustrator: "Iori Suzuki",
	category: "Trainer",

	effect: {
		ja: "自分の山札から「ヒビキのポケモン」と「基本[R]エネルギー」を合計3枚まで選び、相手に見せて、手札に加える。そして山札を切る。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 861417,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "I",
	rarity: "None",
};

export default card;
