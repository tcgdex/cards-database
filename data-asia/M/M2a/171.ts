import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "サーファー",
	},

	illustrator: "Hideki Ishikawa",
	category: "Trainer",

	effect: {
		ja: "自分のバトルポケモンをベンチポケモンと入れ替える。その後、自分の手札が5枚になるように、山札を引く。 サポートは、自分の番に1枚しか使えない。",
	},

	variants: [{"type": "normal"}],

	trainerType: "Supporter",
	regulationMark: "I",
	rarity: "Common",
};

export default card;
