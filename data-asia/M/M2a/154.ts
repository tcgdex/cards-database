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
		ja: "この番、自分のポケモンが使うワザの、相手のバトルポケモンへのダメージは「+30」される。 グッズは、自分の番に何枚でも使える。",
	},

	variants: [{"type": "normal"}],

	trainerType: "Item",
	regulationMark: "I",
	rarity: "Common",
};

export default card;
