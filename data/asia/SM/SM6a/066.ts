import { Card } from "models/database/card";
import Set from "../SM6a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "竜の鉤爪",
	},

	illustrator: "",
	category: "Trainer",

	effect: {
		'ja-jp': "このカードをつけているポケモンが、バトル場で相手のポケモンからワザのダメージを受けたとき、ワザを使ったポケモンにダメカンを3個のせる。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 559402,
			},
		},
	],

	trainerType: "Tool",
	rarity: "Secret Rare",
};

export default card;
