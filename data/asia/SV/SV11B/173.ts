import { Card } from "models/database/card";
import Set from "../SV11B";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "Nの筋書き",
	},

	illustrator: "REND",
	category: "Trainer",

	effect: {
		'ja-jp': "自分のベンチポケモンについているエネルギーを2個まで選び、バトルポケモンにつけ替える。 サポートは、自分の番に1枚しか使えない。",
	},

	variants: [{ type: "holo" }],

	trainerType: "Supporter",
	regulationMark: "I",
	rarity: "Special illustration rare",

	thirdParty: {
		cardmarket: 829434,
		tcgplayer: 636527,
	},
};

export default card;
