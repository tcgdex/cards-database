import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "エマ",
	},

	illustrator: "",
	category: "Trainer",

	effect: {
		ja: "相手の手札を見て、その中にあるポケモンの枚数ぶん、自分の山札を引く。 サポートは、自分の番に1枚しか使えない。",
	},

	variants: [{"type": "holo"}],

	trainerType: "Supporter",
	regulationMark: "I",
	rarity: "Special illustration rare",
};

export default card;
