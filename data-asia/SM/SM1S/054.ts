import { Card } from "../../../interfaces";
import Set from "../SM1S";

const card: Card = {
	set: Set,
	name: {
		ja: "タイマーボール",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		ja: "コインを2回投げ、オモテの数ぶん、自分の山札にある進化ポケモンを、相手に見せてから、手札に加える。そして山札を切る。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561731,
			},
		},
	],

	trainerType: "Item",
	rarity: "Uncommon",
};

export default card;
