import { Card } from "models/database/card";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "アカマツ",
	},

	illustrator: "GIDORA",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の山札から、それぞれちがうタイプの基本エネルギーを2枚まで選び、相手に見せて、どちらか1枚を手札に加え、残りのエネルギーを自分のポケモンにつける。そして山札を切る。",
	},

	variants: [{ type: "normal" }],

	trainerType: "Supporter",
	regulationMark: "H",
	rarity: "Promo",
};

export default card;
