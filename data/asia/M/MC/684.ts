import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "デラックスボム",
	},

	illustrator: "inose yukie",
	category: "Trainer",

	effect: {
		'ja-jp': "このカードをつけているポケモンが、バトル場で相手のポケモンからワザのダメージを受けたとき、ワザを使ったポケモンにダメカンを12個のせる。その後、このカードをトラッシュする。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863986,
			},
		},
	],

	trainerType: "Tool",
	regulationMark: "H",
	rarity: "None",
};

export default card;
