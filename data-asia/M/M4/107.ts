import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "どうぐのスクラッパー",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",
	trainerType: "Item",

	effect: {
		ja: "相手のポケモンについているポケモンのどうぐを2枚まで選んでトラッシュする。",
	},

	variants: [{ type: "holo" }],

	regulationMark: "I",
	rarity: "Ultra Rare",
};

export default card;
