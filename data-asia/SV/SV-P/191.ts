import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "アカマツ",
	},

	illustrator: "GIDORA",
	category: "Trainer",

	effect: {
		ja: "自分の山札から、それぞれちがうタイプの基本エネルギーを2枚まで選び、相手に見せて、どちらか1枚を手札に加え、残りのエネルギーを自分のポケモンにつける。そして山札を切る。",
	},

	variants: [{ type: "normal" }],

	trainerType: "Supporter",
	regulationMark: "H",
	rarity: "Promo",
};

export default card;
