import { Card } from "../../../interfaces";
import Set from "../SV10";

const card: Card = {
	set: Set,
	name: {
		ja: "ロケット団のアポロ",
	},

	illustrator: "Hideki Ishikawa",
	category: "Trainer",

	effect: {
		ja: "このカードは、前の相手の番に、自分の「ロケット団のポケモン」がきぜつしていなければ使えない。おたがいのプレイヤーは、それぞれ手札をすべて山札にもどして切る。その後、自分は5枚、相手は3枚、山札を引く。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 821952,
				tcgplayer: 629061,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "I",
	rarity: "Ultra Rare",
};

export default card;
