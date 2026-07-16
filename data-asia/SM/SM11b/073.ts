import { Card } from "../../../interfaces";
import Set from "../SM11b";

const card: Card = {
	set: Set,
	name: {
		ja: "スイレンのつりざお",
	},

	illustrator: "",
	category: "Trainer",

	effect: {
		ja: "自分のトラッシュにあるポケモンと「ポケモンのどうぐ」を1枚ずつ、相手に見せてから、山札にもどして切る。",
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
