import { Card } from "../../../interfaces";
import Set from "../M5";

const card: Card = {
	set: Set,
	name: {
		ja: "クラッシュハンマー",
	},

	illustrator: "Ayako Yoshida",
	category: "Trainer",

	effect: {
		ja: "コインを1回投げオモテなら、相手の場のポケモンについているエネルギーを1個選び、トラッシュする。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 888649,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "J",
	rarity: "Ultra Rare",
};

export default card;
