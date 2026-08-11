import { Card } from "models/database/card";
import Set from "../SM6a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "竜の鉤爪",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		'ja-jp': "このカードをつけているポケモンが、バトル場で相手のポケモンからワザのダメージを受けたとき、ワザを使ったポケモンにダメカンを3個のせる。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559360,
			},
		},
	],

	trainerType: "Tool",
	rarity: "Common",
};

export default card;
