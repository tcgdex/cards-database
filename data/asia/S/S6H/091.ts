import { Card } from "models/database/card";
import Set from "../S6H";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "メロン",
	},

	illustrator: "Taira Akitsu",
	category: "Trainer",

	effect: {
		'ja-jp': "自分のトラッシュから[水]エネルギーを1枚選び、自分の「ポケモンV」につける。その後、自分の山札を3枚引く。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 560967,
				tcgplayer: 569223,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "E",
	rarity: "Hyper rare",
};

export default card;
