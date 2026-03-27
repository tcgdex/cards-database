import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "スペシャルレッドカード",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",
	trainerType: "Item",

	effect: {
		ja: "相手は手札をすべて山札に戻してよく切る。その後、お互いに山札の上から4枚引く。",
	},

	variants: [{ type: "normal" }, { type: "reverse", foil: "pokeball" }, { type: "reverse", foil: "masterball" }],

	regulationMark: "I",
	rarity: "Uncommon",
};

export default card;
