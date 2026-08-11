import { Card } from "models/database/card";
import Set from "../S6H";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "いかついメット",
	},

	illustrator: "sadaji",
	category: "Trainer",

	effect: {
		'ja-jp': "このカードをつけているポケモンが、バトル場で相手のポケモンからワザのダメージを受けたとき、ワザを使ったポケモンについているエネルギーを1個選び、相手の手札にもどす。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 560970,
				tcgplayer: 569226,
			},
		},
	],

	trainerType: "Tool",
	regulationMark: "E",
	rarity: "Secret Rare",
};

export default card;
