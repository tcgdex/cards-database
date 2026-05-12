import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "むしとりセット",
	},

	illustrator: "AYUMI ODASHIMA",
	category: "Trainer",

	effect: {
		ja: "自分の山札を上から7枚見て、その中から「Grass」ポケモンと「基本「Grass」エネルギー」を合計2枚まで選び、相手に見せて、手札に加える。残りのカードは山札にもどして切る。\nグッズは、自分の番に何枚でも使える。",
	},

	variants: [{"type": "holo"}],

	trainerType: "Item",
	regulationMark: "I",
	rarity: "Uncommon",
};

export default card;
