import { Card } from "../../../interfaces";
import Set from "../SM8a";

const card: Card = {
	set: Set,
	name: {
		ja: "エレキチャージャー",
	},

	illustrator: "",
	category: "Trainer",

	effect: {
		ja: "コインを2回投げ、オモテの数ぶん、自分のトラッシュにある「エレキパワー」を、相手に見せてから、山札にもどして切る。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 558637,
			},
		},
	],

	trainerType: "Item",
	rarity: "Secret Rare",
};

export default card;
