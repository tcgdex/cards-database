import { Card } from "../../../interfaces";
import Set from "../M1L";

const card: Card = {
	set: Set,
	name: {
		ja: "パワープロテイン",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		ja: "この番、自分のポケモンが使うワザの、相手のバトルポケモンへのダメージは「+30」される。",
	},

	variants: [{"type": "normal"}],

	trainerType: "Item",
	regulationMark: "I",
	rarity: "Uncommon",

	thirdParty: {
		cardmarket: 840353,
		tcgplayer: 647167,
	},
};

export default card;