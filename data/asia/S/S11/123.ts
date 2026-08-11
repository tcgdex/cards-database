import { Card } from "models/database/card";
import Set from "../S11";

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
			type: "holo",
			thirdParty: {
				cardmarket: 668241,
				tcgplayer: 570054,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "F",
	rarity: "Holo Rare",
};

export default card;
