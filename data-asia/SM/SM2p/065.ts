import { Card } from "../../../interfaces";
import Set from "../SM2p";

const card: Card = {
	set: Set,
	name: {
		ja: "マルチつけかえ",
	},

	illustrator: "",
	category: "Trainer",

	effect: {
		ja: "自分のベンチポケモンについているエネルギーを1個、自分のバトルポケモンにつけ替える。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 561335,
			},
		},
	],

	trainerType: "Item",
	rarity: "Secret Rare",
};

export default card;
