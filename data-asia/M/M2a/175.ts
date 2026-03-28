import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "リーリエの決心",
	},

	illustrator: "Atsushi Furusawa",
	category: "Trainer",

	effect: {
		ja: "自分の手札をすべて山札にもどして切る。その後、山札を6枚引く。自分のサイドの残り枚数が6枚なら、引く枚数は8枚になる。 サポートは、自分の番に1枚しか使えない。",
	},

	variants: [{"type": "normal"}],

	trainerType: "Supporter",
	regulationMark: "I",
	rarity: "Common",
};

export default card;
