import { Card } from "models/database/card";
import Set from "../SV11B";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "Nの筋書き",
	},

	illustrator: "hncl",
	category: "Trainer",

	effect: {
		'ja-jp': "自分のベンチポケモンについているエネルギーを2個まで選び、バトルポケモンにつけ替える。 サポートは、自分の番に1枚しか使えない。",
	},

	variants: [{ type: "normal" }, { type: "reverse", foil: "pokeball" }],

	trainerType: "Supporter",
	regulationMark: "I",
	rarity: "Uncommon",

	thirdParty: {
		cardmarket: 828636,
		tcgplayer: 636437,
	},
};

export default card;
