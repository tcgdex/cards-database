import { Card } from "models/database/card";
import Set from "../M-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "かるいし",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		'ja-jp': "このカードをつけているポケモンのにげるために必要なエネルギーは、すべてなくなる。",
	},

	variants: [{ type: "normal" }],

	trainerType: "Tool",
	rarity: "Promo",
};

export default card;
