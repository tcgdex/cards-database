import { Card } from "models/database/card";
import Set from "../SM7b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "のろいのおふだ",
	},

	illustrator: "",
	category: "Trainer",

	effect: {
		'ja-jp': "このカードをつけているポケモンが、相手のワザのダメージを受けてきぜつしたとき、ダメカン4個を、相手のポケモンに好きなようにのせる。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 558888,
			},
		},
	],

	trainerType: "Tool",
	rarity: "Secret Rare",
};

export default card;
