import { Card } from "../../../interfaces";
import Set from "../SM5M";

const card: Card = {
	set: Set,
	name: {
		ja: "クラッシュハンマー",
	},

	illustrator: "Yoshinobu Saito",
	category: "Trainer",

	effect: {
		ja: "コインを1回投げオモテなら、相手のポケモンについているエネルギーを1個選び、トラッシュする。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559868,
			},
		},
	],

	trainerType: "Item",
	rarity: "Uncommon",
};

export default card;
