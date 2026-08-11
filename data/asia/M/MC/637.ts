import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "エネルギーコイン",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		ja: "コインを2回投げ、すべてオモテなら、自分の山札から基本エネルギーを1枚選び、自分のポケモンにつける。そして山札を切る。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863939,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "I",
	rarity: "None",
};

export default card;
