import { Card } from "../../../interfaces";
import Set from "../M-P";

const card: Card = {
	set: Set,
	name: {
		ja: "プルメリ",
	},

	illustrator: "Ken Sugimori",
	category: "Trainer",

	effect: {
		ja: "このカードは、自分の手札を2枚トラッシュしなければ使えない。相手の場のポケモンについているエネルギーを、1個トラッシュする。",
	},

	variants: [{ type: "normal" }],

	trainerType: "Supporter",
	regulationMark: "A",
	rarity: "Promo",
};

export default card;
