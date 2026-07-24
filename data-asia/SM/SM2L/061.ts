import { Card } from "../../../interfaces";
import Set from "../SM2L";

const card: Card = {
	set: Set,
	name: {
		ja: "改造ハンマー",
	},

	illustrator: "",
	category: "Trainer",

	effect: {
		ja: "相手のポケモンについている特殊エネルギーを1個選び、トラッシュする。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 561465,
			},
		},
	],

	trainerType: "Item",
	rarity: "Secret Rare",
};

export default card;
