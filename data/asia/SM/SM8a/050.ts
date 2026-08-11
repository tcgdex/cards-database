import { Card } from "models/database/card";
import Set from "../SM8a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "クチナシ",
	},

	illustrator: "Ken Sugimori",
	category: "Trainer",

	effect: {
		'ja-jp': "自分のトラッシュにある[悪]タイプのたねポケモン1枚を、自分の場のポケモン1匹と入れ替える（ついているカード・ダメカン・特殊状態・かかっている効果などは、すべて引きつぐ）。入れ替えたポケモンはトラッシュする。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558624,
			},
		},
	],

	trainerType: "Supporter",
	rarity: "Uncommon",
};

export default card;
