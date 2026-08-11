import { Card } from "models/database/card";
import Set from "../SM1M";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "どくバリ",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		'ja-jp': "このカードをつけているポケモンが、バトル場で相手のポケモンからワザのダメージを受けたとき、ワザを使ったポケモンをどくにする。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561658,
			},
		},
	],

	trainerType: "Tool",
	rarity: "Uncommon",
};

export default card;
