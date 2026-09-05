import { Card } from "../../../interfaces";
import Set from "../M-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ボスの指令",
	},

	illustrator: "akagi",
	category: "Trainer",

	effect: {
		ja: "相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。",
	},

	variants: [{ type: "normal" }],

	trainerType: "Supporter",
	regulationMark: "I",
	rarity: "Promo",
};

export default card;
