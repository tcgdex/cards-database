import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "エネルギー転送",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		ja: "自分の山札から基本エネルギーを1枚選び、相手に見せてから、手札に加える。そして山札を切る。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863941,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "J",
	rarity: "None",
};

export default card;
