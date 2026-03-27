import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "マチエール",
	},

	illustrator: "Sanosuke Sakuma",
	category: "Trainer",
	trainerType: "Supporter",

	effect: {
		ja: "自分の手札を好きな枚数トラッシュする。その後、手札が7枚になるようにカードを引く。",
	},

	variants: [{ type: "holo" }],

	regulationMark: "I",
	rarity: "ACE SPEC Rare",
};

export default card;
