import { Card } from "models/database/card";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ポケモンキャッチャー",
	},

	illustrator: "Studio Bora Inc.",
	category: "Trainer",

	effect: {
		'ja-jp': "相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。",
	},

	variants: [{ type: "normal" }],

	trainerType: "Item",
	regulationMark: "G",
	rarity: "Promo",
};

export default card;
