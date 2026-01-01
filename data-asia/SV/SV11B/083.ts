import { Card } from "../../../interfaces";
import Set from "../SV11B";

const card: Card = {
	set: Set,
	name: {
		ja: "Nの筋書き",
	},

	illustrator: "hncl",
	category: "Trainer",

	effect: {
		ja: "自分のベンチポケモンについているエネルギーを2個まで選び、バトルポケモンにつけ替える。 サポートは、自分の番に1枚しか使えない。",
	},

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false,
	},

	trainerType: "Supporter",
	regulationMark: "I",
	rarity: "Uncommon",
};

export default card;
