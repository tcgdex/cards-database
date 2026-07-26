import { Card } from "../../../interfaces";
import Set from "../SV6";

const card: Card = {
	set: Set,
	name: {
		ja: "改造ハンマー",
	},

	illustrator: "Eske Yoshinob",
	category: "Trainer",

	effect: {
		ja: "相手のポケモンについている特殊エネルギーを1個選び、トラッシュする。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 767566,
				tcgplayer: 568122,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "H",
	rarity: "Mega Hyper Rare",
};

export default card;
