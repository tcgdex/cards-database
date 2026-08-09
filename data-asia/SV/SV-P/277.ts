import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ポケモンキャッチャー",
	},

	illustrator: "Studio Bora Inc.",
	category: "Trainer",

	effect: {
		ja: "相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。",
	},

	variants: [{ type: "normal" }],

	trainerType: "Item",
	regulationMark: "G",
	rarity: "Promo",
};

export default card;
