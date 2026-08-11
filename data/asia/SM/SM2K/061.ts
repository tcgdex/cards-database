import { Card } from "models/database/card";
import Set from "../SM2K";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "まんたんのくすり",
	},

	illustrator: "",
	category: "Trainer",

	effect: {
		'ja-jp': "自分のポケモンを1匹選び、HPをすべて回復する。その後、そのポケモンについているエネルギーをすべてトラッシュする。",
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
