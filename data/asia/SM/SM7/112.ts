import { Card } from "models/database/card";
import Set from "../SM7";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ハッスルベルト",
	},

	illustrator: "",
	category: "Trainer",

	effect: {
		'ja-jp': "このカードをつけているポケモンの残りHPが「30」以下でダメカンがのっているなら、このカードをつけているポケモンが使うワザの、相手のバトルポケモンへのダメージは「+60」される。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 559073,
			},
		},
	],

	trainerType: "Tool",
	rarity: "Secret Rare",
};

export default card;
