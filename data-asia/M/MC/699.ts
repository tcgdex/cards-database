import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "アンズの秘技",
	},

	illustrator: "Taira Akitsu",
	category: "Trainer",

	effect: {
		ja: "自分の[D]ポケモンを2匹まで選び、自分の山札から「基本[D]エネルギー」を1枚ずつつける。そして山札を切る。バトルポケモンにつけた場合、そのポケモンをどくにする。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 864001,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "H",
	rarity: "None",
};

export default card;
