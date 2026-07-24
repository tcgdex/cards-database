import { Card } from "../../../interfaces";
import Set from "../SM5M";

const card: Card = {
	set: Set,
	name: {
		ja: "クラッシュハンマー",
	},

	illustrator: "",
	category: "Trainer",

	effect: {
		ja: "コインを1回投げオモテなら、相手のポケモンについているエネルギーを1個選び、トラッシュする。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 559889,
			},
		},
	],

	trainerType: "Item",
	rarity: "Secret Rare",
};

export default card;
