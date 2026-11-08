import { Card } from "models/database/card";
import Set from "../S7D";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "スクールガール",
	},

	illustrator: "",
	category: "Trainer",

	effect: {
		'ja-jp': "自分の山札を2枚引く。相手のサイドの残り枚数が6枚・4枚・2枚なら、さらに2枚引く。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 572067,
				tcgplayer: 569408,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "E",
	rarity: "Hyper rare",
};

export default card;
