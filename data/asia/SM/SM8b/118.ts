import { Card } from "../../../interfaces";
import Set from "../SM8b";

const card: Card = {
	set: Set,
	name: {
		ja: "まんたんのくすり",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		ja: "自分のポケモンを1匹選び、HPをすべて回復する。その後、そのポケモンについているエネルギーをすべてトラッシュする。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 551086,
			},
		},
	],

	trainerType: "Item",
	rarity: "None",
};

export default card;
