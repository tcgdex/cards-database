import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ミステリーガーデン",
	},

	illustrator: "AYUMI ODASHIMA",
	category: "Trainer",

	effect: {
		ja: "おたがいのプレイヤーは、自分の番ごとに1回、手札からエネルギーを1枚トラッシュするなら、自分の手札の枚数が、自分の場のポケモンの数と同じ枚数になるように、山札を引いてよい。 スタジアムは、自分の番に1枚、バトル場の横に出せる。別のスタジアムが場に出たなら、このカードをトラッシュする。同じ名前のスタジアムは場に出せない。",
	},

	variants: [{"type": "normal"}],

	trainerType: "Stadium",
	regulationMark: "I",
	rarity: "Common",
};

export default card;
