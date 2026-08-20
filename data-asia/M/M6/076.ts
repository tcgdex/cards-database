import { Card } from "../../../interfaces";
import Set from "../M6";

const card: Card = {
	set: Set,
	name: {
		ja: "伝説の溶岩洞",
	},

	illustrator: "akagi",
	category: "Trainer",

	effect: {
		ja: "おたがいの場の進化ポケモン全員は、特性がすべてなくなる。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 900089,
				tcgplayer: 709229,
			},
		},
	],

	trainerType: "Stadium",
	regulationMark: "J",
	rarity: "Uncommon",
};

export default card;
