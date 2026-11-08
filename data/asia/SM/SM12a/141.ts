import { Card } from "models/database/card";
import Set from "../SM12a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "のろいのおふだ",
	},

	illustrator: "Ayaka Yoshida",
	category: "Trainer",

	effect: {
		'ja-jp': "このカードをつけているポケモンが、相手のワザのダメージを受けてきぜつしたとき、ダメカン4個を、相手のポケモンに好きなようにのせる。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 544341,
			},
		},
	],

	trainerType: "Tool",
	regulationMark: "B",
	rarity: "None",
};

export default card;
