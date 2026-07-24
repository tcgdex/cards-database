import { Card } from "../../../interfaces";
import Set from "../SM4p";

const card: Card = {
	set: Set,
	name: {
		ja: "月輪の祭壇",
	},

	illustrator: "5ban Graphics",
	category: "Trainer",

	effect: {
		ja: "[超]または[悪]エネルギーがついているおたがいのポケモン全員のにげるためのエネルギーは、それぞれ2個ぶん少なくなる。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560144,
			},
		},
	],

	trainerType: "Stadium",
	rarity: "None",
};

export default card;
