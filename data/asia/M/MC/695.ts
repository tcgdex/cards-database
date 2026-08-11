import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "アオキの手際",
	},

	illustrator: "hncl",
	category: "Trainer",

	effect: {
		ja: "自分の手札をすべてトラッシュし、自分の山札から「ポケモン」「サポート」「基本エネルギー」を1枚ずつ選び、相手に見せて、手札に加える。そして山札を切る。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863997,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "H",
	rarity: "None",
};

export default card;
