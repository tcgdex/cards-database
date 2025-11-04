import { Card } from "../../../interfaces";
import Set from "../SV11W";

const card: Card = {
	set: Set,
	name: {
		ja: "ツールスクラッパー",
	},

	illustrator: "Studio Bora Inc.",
	category: "Trainer",

	effect: {
		ja: "おたがいの場のポケモンについている「ポケモンのどうぐ」を2枚まで選び、トラッシュする。",
	},

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false,
	},

	trainerType: "Item",
	regulationMark: "I",
	rarity: "Uncommon",
};

export default card;
