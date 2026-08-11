import { Card } from "models/database/card";
import Set from "../SM11b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "スイレンのつりざお",
	},

	illustrator: "",
	category: "Trainer",

	effect: {
		'ja-jp': "自分のトラッシュにあるポケモンと「ポケモンのどうぐ」を1枚ずつ、相手に見せてから、山札にもどして切る。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 555331,
			},
		},
	],

	trainerType: "Item",
	regulationMark: "C",
	rarity: "Secret Rare",
};

export default card;
