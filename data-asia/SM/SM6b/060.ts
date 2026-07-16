import { Card } from "../../../interfaces";
import Set from "../SM6b";

const card: Card = {
	set: Set,
	name: {
		ja: "ルアーボール",
	},

	illustrator: "Katsura Tabata",
	category: "Trainer",

	effect: {
		ja: "コインを3回投げ、オモテの数ぶん、自分のトラッシュにある進化ポケモンを、相手に見せてから、手札に加える。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559210,
			},
		},
	],

	trainerType: "Item",
	rarity: "Uncommon",
};

export default card;
