import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "アイリスの闘志",
	},

	illustrator: "yuu",
	category: "Trainer",

	effect: {
		ja: "このカードは、自分の手札を1枚トラッシュしなければ使えない。自分の手札が6枚になるように、山札を引く。",
	},

	variants: [{ type: "normal" }],

	trainerType: "Supporter",
	regulationMark: "I",
	rarity: "Promo",
};

export default card;
