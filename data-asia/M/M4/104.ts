import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "エネルギー回収",
	},

	illustrator: "Studio Bora Inc.",
	category: "Trainer",

	effect: {
		ja: "自分のトラッシュから基本エネルギーを2枚選び、相手に見せてから、手札に加える。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 877348,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "I",
	rarity: "Ultra Rare",
};

export default card;
