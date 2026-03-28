import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "活力の森",
	},

	illustrator: "AYUMI ODASHIMA",
	category: "Trainer",

	effect: {
		ja: "おたがいのポケモン全員は、出したばかりの番（最初の自分の番をのぞく）でもポケモンに進化できる。 スタジアムは、自分の番に1枚、バトル場の横に出せる。別のスタジアムが場に出たなら、このカードをトラッシュする。同じ名前のスタジアムは場に出せない。",
	},

	variants: [{"type": "normal"}],

	trainerType: "Stadium",
	regulationMark: "I",
	rarity: "Common",
};

export default card;
