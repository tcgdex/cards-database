import { Card } from "../../../interfaces";
import Set from "../SM6b";

const card: Card = {
	set: Set,
	name: {
		ja: "エネルギー循環装置",
	},

	illustrator: "Zu-Ka",
	category: "Trainer",

	effect: {
		ja: "自分のトラッシュにある基本エネルギーを1枚、相手に見せてから、手札に加える。または、自分のトラッシュにある基本エネルギーを3枚、相手に見せてから、山札にもどして切る。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559202,
			},
		},
	],

	trainerType: "Item",
	rarity: "Common",
};

export default card;
