import { Card } from "../../../interfaces";
import Set from "../M-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒカリ",
	},

	illustrator: "Yuu Nishida",
	category: "Trainer",

	effect: {
		ja: "自分の山札から「たねポケモン」「1進化ポケモン」「2進化ポケモン」を1枚ずつ選び、相手に見せて、手札に加える。そして山札を切る。",
	},

	variants: [{ type: "normal" }],

	trainerType: "Supporter",
	regulationMark: "I",
	rarity: "Promo",
};

export default card;
