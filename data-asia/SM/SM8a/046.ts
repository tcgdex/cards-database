import { Card } from "../../../interfaces";
import Set from "../SM8a";

const card: Card = {
	set: Set,
	name: {
		ja: "エレキチャージャー",
	},

	illustrator: "Eske Yoshinob",
	category: "Trainer",

	effect: {
		ja: "コインを2回投げ、オモテの数ぶん、自分のトラッシュにある「エレキパワー」を、相手に見せてから、山札にもどして切る。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558620,
			},
		},
	],

	trainerType: "Item",
	rarity: "Uncommon",
};

export default card;
