import { Card } from "models/database/card";
import Set from "../SV6a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "アンズの秘技",
	},

	illustrator: "Taira Akitsu",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の[D]ポケモンを2匹まで選び、自分の山札から「基本[D]エネルギー」を1枚ずつつける。そして山札を切る。バトルポケモンにつけた場合、そのポケモンをどくにする。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 773833,
				tcgplayer: 566335,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "H",
	rarity: "Ultra Rare",
};

export default card;
