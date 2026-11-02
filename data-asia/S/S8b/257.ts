import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "カブ",
	},

	illustrator: "Hideki Ishikawa",
	category: "Trainer",

	effect: {
		ja: "自分の手札をすべて山札にもどして切る。その後、山札を4枚引く。自分の場のポケモンがバトルポケモンだけなら、引く枚数は8枚になる。",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 587055,
				tcgplayer: 571509,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "D",
	rarity: "Ultra Rare",
};

export default card;
