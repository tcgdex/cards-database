import { Card } from "../../../interfaces";
import Set from "../M2a";

const card: Card = {
	set: Set,
	name: {
		ja: "パワープロテイン",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		ja: "この番、自分の「Fighting」ポケモンが使うワザの、相手のバトルポケモンへのダメージは「+30」される。\nグッズは、自分の番に何枚でも使える。",
	},

	variants: [{"type": "holo"}],

	trainerType: "Item",
	regulationMark: "I",
	rarity: "Uncommon",
};

export default card;
