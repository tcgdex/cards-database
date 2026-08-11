import { Card } from "../../../interfaces";
import Set from "../SM2K";

const card: Card = {
	set: Set,
	name: {
		ja: "まんたんのくすり",
	},

	illustrator: "",
	category: "Trainer",

	effect: {
		ja: "自分のポケモンを1匹選び、HPをすべて回復する。その後、そのポケモンについているエネルギーをすべてトラッシュする。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 561527,
			},
		},
	],

	trainerType: "Item",
	rarity: "Secret Rare",
};

export default card;
