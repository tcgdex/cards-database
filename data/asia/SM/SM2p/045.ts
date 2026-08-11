import { Card } from "models/database/card";
import Set from "../SM2p";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "じゃくてんほけん",
	},

	illustrator: "Ayaka Yoshida",
	category: "Trainer",

	effect: {
		'ja-jp': "このカードをつけているポケモンの弱点は、すべてなくなる。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561300,
			},
		},
	],

	trainerType: "Tool",
	rarity: "None",
};

export default card;
