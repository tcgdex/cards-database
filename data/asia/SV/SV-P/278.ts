import { Card } from "models/database/card";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ボスの指令",
	},

	illustrator: "NC Empire",
	category: "Trainer",

	effect: {
		'ja-jp': "相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。",
	},

	variants: [{ type: "normal" }],

	trainerType: "Supporter",
	regulationMark: "G",
	rarity: "Promo",
};

export default card;
