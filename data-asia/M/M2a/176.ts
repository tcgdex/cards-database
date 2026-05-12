import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ロケット団のアテナ",
	},

	illustrator: "hncl",
	category: "Trainer",

	effect: {
		ja: "自分の手札が5枚になるように、山札を引く。自分の場のポケモン全員が「ロケット団のポケモン」なら、8枚になるように引く。\nサポートは、自分の番に1枚しか使えない。",
	},

	variants: [{"type": "holo"}],

	trainerType: "Supporter",
	regulationMark: "I",
	rarity: "Uncommon",
};

export default card;
