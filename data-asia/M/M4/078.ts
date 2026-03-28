import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "マチエール",
	},

	illustrator: "Akira Komayama",
	category: "Trainer",

	effect: {
		ja: "相手の手札を見て、その中にあるポケモンの枚数ぶん、自分の山札を引く。 サポートは、自分の番に1枚しか使えない。",
	},

	variants: [{"type": "normal"}],

	trainerType: "Supporter",
	regulationMark: "I",
	rarity: "Uncommon",
};

export default card;
