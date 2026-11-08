import { Card } from "models/database/card";
import Set from "../S10a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "災いの箱",
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		'ja-jp': "このカードをつけている「ポケモンV」のHPがまんたんの状態で、相手のポケモンからワザのダメージを受けてきぜつしたとき、ワザを使ったポケモンにダメカンを8個のせる。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 657078,
				tcgplayer: 570762,
			},
		},
	],

	trainerType: "Tool",
	regulationMark: "F",
	rarity: "Mega Hyper Rare",
};

export default card;
