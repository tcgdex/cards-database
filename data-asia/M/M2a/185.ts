import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ハッコウシティ",
	},

	illustrator: "MARINA Chikazawa",
	category: "Trainer",

	effect: {
		ja: "おたがいのプレイヤーは、自分の番ごとに1回、自分のトラッシュから「基本エネルギー」を2枚まで選び、相手に見せて、手札に加えてよい。 スタジアムは、自分の番に1枚、バトル場の横に出せる。別のスタジアムが場に出たなら、このカードをトラッシュする。同じ名前のスタジアムは場に出せない。",
	},

	variants: [{"type": "normal"}],

	trainerType: "Stadium",
	regulationMark: "I",
	rarity: "Common",
};

export default card;
