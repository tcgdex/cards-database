import { Card } from "models/database/card";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ネジキ",
	},

	illustrator: "Hideki Ishikawa",
	category: "Trainer",

	effect: {
		'ja-jp': "自分のトラッシュからたねポケモンを1枚選び、自分の場のたねポケモン1匹と入れ替える（ついているカード・ダメカン・特殊状態・効果などは、すべて引きつぐ）。入れ替えたポケモンはトラッシュする。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 678825,
				tcgplayer: 597490,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "F",
	rarity: "Promo",
};

export default card;
