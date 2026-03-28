import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "ホップのバッグ",
	},

	illustrator: "AYUMI ODASHIMA",
	category: "Trainer",

	effect: {
		ja: "自分の山札からたねポケモンの「ホップのポケモン」を2枚まで選び、ベンチに出す。そして山札を切る。 グッズは、自分の番に何枚でも使える。",
	},

	variants: [{"type": "normal"}],

	trainerType: "Item",
	regulationMark: "I",
	rarity: "Common",
};

export default card;
