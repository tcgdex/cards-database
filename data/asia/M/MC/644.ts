import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "クラッシュハンマー",
	},

	illustrator: "Ayaka Yoshida",
	category: "Trainer",

	effect: {
		ja: "コインを1回投げオモテなら、相手のポケモンについているエネルギーを1個選び、トラッシュする。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863946,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "J",
	rarity: "None",
};

export default card;
