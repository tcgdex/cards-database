import { Card } from "models/database/card";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ボスの指令",
	},

	illustrator: "NC Empire",
	category: "Trainer",

	effect: {
		'ja-jp': "相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 587066,
				tcgplayer: 571519,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "D",
	rarity: "Ultra Rare",
};

export default card;
