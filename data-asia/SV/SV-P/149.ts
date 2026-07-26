import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "鬼の仮面",
	},

	illustrator: "5ban Graphics",
	category: "Trainer",

	effect: {
		ja: "自分のトラッシュから、名前に「オーガポン」とつく「ポケモンex」を1枚選び、自分の場の、名前に「オーガポン」とつく「ポケモンex」1匹と入れ替える（ついているカード・ダメカン・特殊状態・効果などは、すべて引きつぐ）。入れ替えたポケモンはトラッシュする。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 765993,
				tcgplayer: 587892,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "H",
	rarity: "Promo",
};

export default card;
